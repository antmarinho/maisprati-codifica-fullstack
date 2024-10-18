package com.acgm.api_user.config;

import com.acgm.api_user.security.SecurityFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.server.authorization.web.OAuth2ClientAuthenticationFilter;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter;
import org.springframework.security.oauth2.server.resource.authentication.JwtGrantedAuthoritiesConverter;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration {

    @Autowired
    private SecurityFilter securityFilter;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {

        return httpSecurity.csrf(AbstractHttpConfigurer::disable)
                           .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                           .authorizeHttpRequests(authorize -> authorize
                        		   .requestMatchers(HttpMethod.POST, "/auth/login").permitAll()
                                   .requestMatchers(HttpMethod.POST, "/auth/register").permitAll()
                                   .requestMatchers(HttpMethod.GET, "/user/**").hasRole("ADMIN")
                                   .anyRequest().authenticated())
                           //.oauth2Login(Customizer.withDefaults())
                          // .oauth2ResourceServer(oauth2 ->  oauth2.jwt(jwt -> jwt.jwtAuthenticationConverter(jwtAuthenticationConverter())))
                           .addFilterBefore(securityFilter, UsernamePasswordAuthenticationFilter.class)
                           .build();

    }

    @Bean
    public JwtAuthenticationConverter jwtAuthenticationConverter() {
    	
    	JwtGrantedAuthoritiesConverter grantedAuthoritiesConverter = new JwtGrantedAuthoritiesConverter();
    	
    	grantedAuthoritiesConverter.setAuthoritiesClaimName("role");
    	grantedAuthoritiesConverter.setAuthorityPrefix("ROLE_");
    	
    	JwtAuthenticationConverter jwtAuthenticationConverter = new JwtAuthenticationConverter();
    	
    	jwtAuthenticationConverter.setJwtGrantedAuthoritiesConverter(grantedAuthoritiesConverter);
    	
    	return jwtAuthenticationConverter;
    	
    }
    
    @Bean
    public PasswordEncoder passwordEncoder() {

        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {

        return authenticationConfiguration.getAuthenticationManager();
    }

}
