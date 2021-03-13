package com.dongju.portfolio.controller.web.portfolio.skills;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@Slf4j
@RequestMapping("/skills")
public class SkillsController {

    @GetMapping
    public String main() {

        return "portfolio/skills/skills";
    }
}
