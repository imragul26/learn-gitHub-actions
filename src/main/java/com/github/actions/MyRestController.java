package com.github.actions;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping(value = "/")
public class MyRestController {



	@GetMapping(value = "/")
	public String name() {

		return "   Product Added succesfully in your cart. Please check and let me know. Change workflow file";

	}

}
