package com.acgm.api_user.services;

import com.acgm.api_user.dto.UserDTO;
import com.acgm.api_user.models.User;
import com.acgm.api_user.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    /*public UserDTO createUser(UserDTO userDTO) {

        var pass = passwordEncoder.encode(userDTO.pass());

        User usuario = new User();

        userRepository.save(usuario);

        return convertDTO(usuario);

    }*/

    public UserDTO getById(long id) {

        Optional<User> user = userRepository.findById(id);

        return user.map(this::convertDTO).orElse(null);

    }

    public List<UserDTO> getAll() {

        return userRepository.findAll().stream().map(this::convertDTO).collect(Collectors.toList());
    }

    public UserDTO updateUser(long id, UserDTO userDTO) {

        Optional<User> userOptional = userRepository.findById(id);

        if (userOptional.isPresent()) {

            User user = userOptional.get();

            String passCrypt = new BCryptPasswordEncoder().encode(userDTO.pass());

            user.setPass(passCrypt);

            userRepository.save(user);

            return convertDTO(user);
        }

        return null;
    }

    public void deleteUser(long id) {

        userRepository.deleteById(id);
    }

    private UserDTO convertDTO(User user) {

        UserDTO userDTO = new UserDTO(user.getId(), user.getLogin(), user.getPass());

        return userDTO;
    }

}
