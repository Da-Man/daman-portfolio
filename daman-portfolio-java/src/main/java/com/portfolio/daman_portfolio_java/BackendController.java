package com.portfolio.daman_portfolio_java;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
@CrossOrigin
public class BackendController {
	
	@GetMapping("/getImageURL")
	public String getImageURL() {
		String url = "https://static.wixstatic.com/media/e8b097_8fda4e0a85f84445b6c80bf631baa0b3~mv2.jpeg/v1/fill/w_1000,h_663,al_c,q_85,usm_0.66_1.00_0.01/e8b097_8fda4e0a85f84445b6c80bf631baa0b3~mv2.jpeg";
		return url;
	}

}
