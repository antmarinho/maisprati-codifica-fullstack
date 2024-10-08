package com.example.api_user.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.api_user.model.User;
import com.example.api_user.repository.UserRepository;
import com.example.api_user.dto.UserDTO;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;

		public List<UserDTO> getAllUsers() {
		
			return userRepository.findAll().stream().map(this::convertToDTO).collect(Collectors.toList());
		
		}
		
		public UserDTO getUserById(int id) {
			
			Optional<User> user = userRepository.findById(id);
			
			return user.map(this::convertToDTO).orElse(null);
			
		}
		
		public UserDTO createUser(UserDTO userDTO) {
			
			User user = new User();
			
			user.setNome(userDTO.getUser());
			user.setEmail(userDTO.getEmail());
			user.setRole(userDTO.getRole());
			user.setPass(userDTO.getPass());
			
			userRepository.save(user);
			
			return convertToDTO(user);
		}
		
		public UserDTO updateUser(int id, UserDTO userDTO) {
			
			Optional<User> userOp = userRepository.findById(id);
			
			if(userOp.isPresent()) {
			
				User user = new User();
			
				user.setNome(userDTO.getUser());
				user.setEmail(userDTO.getEmail());
				user.setRole(userDTO.getRole());
				user.setPass(userDTO.getPass());
			
				userRepository.save(user);
				
				return convertToDTO(user);
				
			}
			
			return null;
		}
		
		public void deleteUser(int id) {
			
			userRepository.deleteById(id);
		}
		
		private UserDTO convertToDTO(User user) {
			
			UserDTO userDTO = new UserDTO(user.getId(),user.getNome(),user.getEmail(),user.getRole(),user.getPass());
			
			return userDTO;
			
		}
	
}
