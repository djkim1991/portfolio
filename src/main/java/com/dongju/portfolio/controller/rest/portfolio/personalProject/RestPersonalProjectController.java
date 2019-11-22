package com.dongju.portfolio.controller.rest.portfolio.personalProject;

import com.dongju.portfolio.domain.common.AjaxResponse;
import com.dongju.portfolio.domain.dto.portfolio.personalProject.chat.ChatRoomDto;
import com.dongju.portfolio.domain.dto.portfolio.personalProject.miniGame.GameScoreDto;
import com.dongju.portfolio.service.portfolio.personalProject.chat.ChatRoomService;
import com.dongju.portfolio.service.portfolio.personalProject.miniGame.GameScoreService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/personalProject")
public class RestPersonalProjectController {

    private final ChatRoomService chatRoomService;
    private final GameScoreService gameScoreService;

    @PostMapping(value = {"/chat/createChatRoom"})
    public ResponseEntity createChatRoom(String roomName) {
        AjaxResponse ajaxResponse;

        if(chatRoomService.count() > 4) {
            ajaxResponse = AjaxResponse.builder()
                    .result("fail")
                    .resultMsg("방은 최대 5개까지 생성 가능합니다.")
                    .build();
        } else {
            ChatRoomDto chatRoomDto = ChatRoomDto.builder()
                    .roomName(roomName)
                    .maxMemberCount(3)
                    .build();

            chatRoomService.save(chatRoomDto);

            ajaxResponse = AjaxResponse.builder()
                    .result("success")
                    .resultMsg("성공적으로 방을 생성했습니다.")
                    .build();
        }

        return ResponseEntity.ok().body(ajaxResponse);
    }

    @PostMapping(value = {"/miniGame/saveScore"})
    public ResponseEntity saveScore(Integer score, String nickName) {
        AjaxResponse ajaxResponse;

        GameScoreDto gameScoreDto = GameScoreDto.builder()
                .score(score)
                .gameName("snakeGame")
                .nickName(nickName)
                .build();

        // 게임 score 저장
        gameScoreService.save(gameScoreDto);
        // 게임 순위 밖 제거
        gameScoreService.deleteOutOfRanking();

        ajaxResponse = AjaxResponse.builder()
                .result("success")
                .resultMsg("")
                .build();

        return ResponseEntity.ok().body(ajaxResponse);
    }
}
