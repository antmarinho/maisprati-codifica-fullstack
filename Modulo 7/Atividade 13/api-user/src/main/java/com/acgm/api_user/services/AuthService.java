package com.acgm.api_user.services;

import com.acgm.api_user.dto.AuthDTO;
import com.acgm.api_user.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AuthService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {

        return userRepository.findByLogin(login);

    }


}
