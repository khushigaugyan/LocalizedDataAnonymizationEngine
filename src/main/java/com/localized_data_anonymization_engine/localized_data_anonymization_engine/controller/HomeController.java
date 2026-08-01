package com.localized_data_anonymization_engine.localized_data_anonymization_engine.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller

public class HomeController {
    @GetMapping("/")
    public String home() {
        return "index";
    }
}
