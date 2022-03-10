package com.example.review.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

@CrossOrigin(origins={ "http://localhost:3000" })
@Controller
public class FrontEndController {
    // https://stackoverflow.com/questions/38783773/spring-boot-single-page-application-forward-every-request-to-index-html
    @RequestMapping(path = {"/book-*/**", "/search/**", "/admin/**"})
    public String forward() {
        return "forward:/index.html";
    }
}