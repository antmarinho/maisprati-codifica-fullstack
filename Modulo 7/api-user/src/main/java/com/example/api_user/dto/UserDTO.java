package com.example.api_user.dto;

public class UserDTO {
	
	private int id;
	private String user;
	private String email;
	private String role;
	
	
	public UserDTO(int id, String user, String email, String role) {

		this.id = id;
		this.user = user;
		this.email = email;
		this.role = role;
	}
	

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
	

}
