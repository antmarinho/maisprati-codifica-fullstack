package com.example.api_user.controller;

import javax.naming.AuthenticationException;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.api_user.security.JwtTokenProvider;

@RestController
@RequestMapping("/auth")
public class AuthController {
	
	private final AuthenticationManager authenticationManager;
	private final JwtTokenProvider jwtTokenProvider;
	private final UserDetailsService userDetailsService;
	
	
	public AuthController(AuthenticationManager authenticationManager, JwtTokenProvider jwtTokenProvider,
			UserDetailsService userDetailsService) {
		
		this.authenticationManager = authenticationManager;
		this.jwtTokenProvider = jwtTokenProvider;
		this.userDetailsService = userDetailsService;
		
	}
	
	@PostMapping("/login")
	public String login(@RequestParam String username, @RequestParam String pass) {
		
		Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, pass));
		
		UserDetails user = (UserDetails) authentication.getCredentials();
		
		return jwtTokenProvider.generateToken(user);
	}

}
