package com.dongju.portfolio.controller.web.portfolio.career;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@Slf4j
@RequestMapping("/career")
public class CareerController {

    @GetMapping(value = {"", "/"})
    public String main(Model model) {

        return "portfolio/career/career";
    }
}
