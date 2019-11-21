package com.dongju.portfolio.controller.rest.portfolio.personalProject;

import com.dongju.portfolio.domain.common.AjaxResponse;
import com.dongju.portfolio.domain.dto.portfolio.personalProject.chat.ChatRoomDto;
import com.dongju.portfolio.service.portfolio.personalProject.chat.ChatRoomService;
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
}
