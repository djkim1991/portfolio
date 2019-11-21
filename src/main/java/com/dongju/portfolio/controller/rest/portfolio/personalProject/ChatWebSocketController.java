package com.dongju.portfolio.controller.rest.portfolio.personalProject;

import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
public class ChatWebSocketController {

    @MessageMapping("/sendMessage")
    @SendTo("/topic/roomId")
    public String broadCasting(String message) throws JsonProcessingException {

        return message;
    }
}
