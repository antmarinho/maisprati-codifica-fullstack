package com.acgm.api_user.controllers;

import com.acgm.api_user.dto.AuthDTO;
import com.acgm.api_user.dto.TokenDTO;
import com.acgm.api_user.dto.RegisterDTO;
import com.acgm.api_user.models.User;
import com.acgm.api_user.repositories.UserRepository;
import com.acgm.api_user.security.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TokenService tokenService;

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody @Validated AuthDTO authDTO) {

        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(authDTO.login(),authDTO.pass());

        var auth = authenticationManager.authenticate(usernamePasswordAuthenticationToken);

        String token = tokenService.generateToken((User) auth.getPrincipal());

        return ResponseEntity.ok(new TokenDTO(token));
    }

    @PostMapping("/register")
    public ResponseEntity register(@RequestBody @Validated RegisterDTO registerDTO) {

        if(this.userRepository.findByLogin(registerDTO.login()) != null)
            return ResponseEntity.badRequest().build();

        String passCrypt = new BCryptPasswordEncoder().encode(registerDTO.pass());

        User user = new User(registerDTO.login(),passCrypt,registerDTO.role());

        this.userRepository.save(user);

        return ResponseEntity.ok().build();

    }

}
