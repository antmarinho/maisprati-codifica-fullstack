package com.example.api_user.security;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;


public class JwtTokenProvider {
	
	@Value("${jwt.secret}")
	private String secretKey;
	
	public String extractUsername(String token) {
		
		return extractClaim(token, Claims::getSubject);
	}
	
	public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
		
		final Claims claims = extractAllClaims(token);
		
		return claimsResolver.apply(claims);
	}
	
	private Claims extractAllClaims(String token) {
		
		return Jwts.parser()
				   .setSigningKey(secretKey)
				   .parseClaimsJws(token)
				   .getBody();
	}
	
	public String generateToken(UserDetails details) {
		
		Map<String, Object> claims = new HashMap<>();
		
		return createToken(claims, details.getUsername());
	}
	
	private String createToken(Map<String, Object> claims, String subject) {
		
		return Jwts.builder()
				   .setClaims(claims)
				   .setSubject(subject)
				   .setIssuedAt(new Date())
				   .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60))
				   .signWith(SignatureAlgorithm.HS256,secretKey)
				   .compact();
	}
	
	public boolean isTokenValid(String token, UserDetails details) {
		
		final String username = extractUsername(token);
		
		return(username.equals(details.getUsername()) && !isTokenExpired(token));
	}
	
	private Date isTokenExpired(String token) {
		
		return extractExpiration(token).before(new Date());
	}
	
	private boolean extractExpiration(String token) {
		
		return extractClaim(token, Claims::getExpiration);
	}

}
