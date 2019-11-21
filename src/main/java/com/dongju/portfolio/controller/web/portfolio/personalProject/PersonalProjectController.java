package com.dongju.portfolio.controller.web.portfolio.personalProject;

import com.dongju.portfolio.domain.dto.portfolio.personalProject.chat.ChatRoomDto;
import com.dongju.portfolio.domain.dto.portfolio.personalProject.miniGame.GameScoreDto;
import com.dongju.portfolio.service.portfolio.personalProject.chat.ChatRoomService;
import com.dongju.portfolio.service.portfolio.personalProject.miniGame.GameScoreService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/personalProject")
public class PersonalProjectController {

    private final ChatRoomService chatRoomService;
    private final GameScoreService gameScoreService;

    @GetMapping(value = {"", "/"})
    public String main(Model model) {

        return "portfolio/personalProject/personalProject";
    }

    @GetMapping(value = {"/snakeGame"})
    public String snakeGame(Model model) {
        List<GameScoreDto> gameScoreDtoList = gameScoreService.list();

        model.addAttribute("gameScoreDtoList", gameScoreDtoList);

        return "portfolio/personalProject/snakeGame/snakeGame";
    }

    @GetMapping(value = {"/chat/chatRoom"})
    public String chatRoom(Model model) {
        List<ChatRoomDto> chatRoomDtoList = chatRoomService.list();

        model.addAttribute("chatRoomDtoList", chatRoomDtoList);

        return "portfolio/personalProject/chat/chatRoom";
    }

    @GetMapping(value = {"/chat/{uid}"})
    public String chat(Model model, @PathVariable(value = "uid") Long uid) {
        ChatRoomDto chatRoomDto = chatRoomService.findByUid(uid);

        model.addAttribute("chatRoomDto", chatRoomDto);

        return "portfolio/personalProject/chat/chat";
    }
}
