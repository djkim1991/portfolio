package com.dongju.portfolio.controller.web.portfolio.profile;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@Slf4j
@RequestMapping("/profile")
public class ProfilesController {

    @GetMapping
    public String main() {

        return "portfolio/profiles/profiles";
    }
}
