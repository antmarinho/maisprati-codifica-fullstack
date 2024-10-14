package com.acgm.api_user.security;

import com.acgm.api_user.dto.TokenDTO;
import com.acgm.api_user.models.User;
import com.acgm.api_user.repositories.UserRepository;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Service
public class TokenService {

    @Value("${security.jwt.token.secret-key}")
    private String secret;

    @Value("${security.jwt.token.expiration}")
    private Integer expiration;

    @Value("${security.jwt.refresh-token.expiration}")
    private Integer refreshExpiration;

    @Autowired
    private UserRepository userRepository;


    public String generateToken(User user) {

        try {

                Algorithm algorithm = Algorithm.HMAC256(secret);

                String token = JWT.create()
                                  .withIssuer("auth-api")
                                  .withSubject(user.getLogin())
                                  .withExpiresAt(genExpirationDate(expiration))
                                  .sign(algorithm);

                return token;

        } catch (JWTCreationException jwtCreationException) {

            throw new RuntimeException("error generating token", jwtCreationException);
        }

    }

    public String generateRefreshToken(User user) {

        try {

            Algorithm algorithm = Algorithm.HMAC256(secret);

            String RefreshToken = JWT.create()
                    .withIssuer("auth-api")
                    .withSubject(user.getLogin())
                    .withExpiresAt(genExpirationDate(refreshExpiration))
                    .sign(algorithm);

            return RefreshToken;

        } catch (JWTCreationException jwtCreationException) {

            throw new RuntimeException("error generating refresh-token", jwtCreationException);
        }

    }

    public TokenDTO getRefreshToken(String refreshToken) {

        String login = validateToken(refreshToken);

        UserDetails user = userRepository.findByLogin(login);

        if(user == null)
            throw new RuntimeException();

        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(user,null,user.getAuthorities());

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = generateToken((User) user);
        String newRefreshToken = generateRefreshToken((User) user);

        TokenDTO tokenDTO = new TokenDTO(token,newRefreshToken);

        return tokenDTO;

    }

    public String validateToken(String token) {

        try {

                Algorithm algorithm = Algorithm.HMAC256(secret);

                return JWT.require(algorithm)
                          .withIssuer("auth-api")
                          .build()
                          .verify(token)
                          .getSubject();

        } catch (JWTVerificationException jwtVerificationException) {

            return "";
        }


    }

    private Instant genExpirationDate(Integer expiration) {

        return LocalDateTime.now().plusHours(expiration).toInstant(ZoneOffset.of("-03:00"));
    }

}
