package com.example.ksw14reactback.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class HelloController {

    @GetMapping("/api/hello")
    public String hello(){
        return "지금은 "+new Date()+"입니다.\n";
    }
}
