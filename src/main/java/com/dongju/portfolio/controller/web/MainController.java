package com.dongju.portfolio.controller.web;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@Slf4j
public class MainController {

    @GetMapping(value = {"", "/", "/main"})
    public String main(Model model) {
        log.info("access home");

        return "main";
    }
}
