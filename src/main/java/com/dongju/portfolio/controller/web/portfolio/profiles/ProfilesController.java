package com.dongju.portfolio.controller.web.portfolio.profiles;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@Slf4j
@RequestMapping("/profiles")
public class ProfilesController {

    @GetMapping(value = {"", "/"})
    public String main(Model model) {

        return "portfolio/profiles/profiles";
    }
}
