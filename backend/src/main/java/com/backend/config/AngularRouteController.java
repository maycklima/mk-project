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
        path = {"/frontend",
            "/frontend/{route:^\\w[\\w-]+}",
            "/frontend/{route:^(?!assets)\\w[\\w-]+}/**"})
    public String forwardFrontend() {
        return "forward:/frontend/index.html";
    }
}
