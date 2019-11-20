package com.dongju.portfolio.controller.web.portfolio.personalProject;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@Slf4j
@RequestMapping("/personalProject")
public class PersonalProjectController {

    @GetMapping(value = {"", "/"})
    public String main(Model model) {

        return "portfolio/personalProject/personalProject";
    }

    @GetMapping(value = {"/snakeGame"})
    public String snakeGame(Model model) {

        return "portfolio/personalProject/snakeGame/snakeGame";
    }

    @GetMapping(value = {"/chatRoom"})
    public String chatRoom(Model model) {

        return "portfolio/personalProject/chat/chatRoom";
    }
}
