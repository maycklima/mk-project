package com.backend.config;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Redirects angular routes to index.html
 */
@RestController
public class AngularRouteController implements ErrorController {

    @RequestMapping(
        method = {RequestMethod.OPTIONS, RequestMethod.GET},
        path = {"/ui",
            "/ui/{route:^\\w[\\w-]+}",
            "/ui/{route:^(?!assets)\\w[\\w-]+}/**"})
    public String forwardUI() {
        return "forward:/ui/index.html";
    }
}
