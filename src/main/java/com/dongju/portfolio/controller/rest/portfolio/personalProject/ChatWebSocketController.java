package com.dongju.portfolio.controller.rest.portfolio.personalProject;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@Slf4j
public class ChatWebSocketController {

    @MessageMapping("/sendMessage")
    @SendTo("/topic/roomId")
    public ResponseEntity broadCasting(String message) throws JsonProcessingException {

        Map<String, String> map = new ObjectMapper().readValue(message, HashMap.class);
        map.put("sender", "blue");

        return ResponseEntity.ok().body(map);
    }

}
