package com.acgm.api_user.dto;

import com.acgm.api_user.enums.Roles;

public record UserDTO(Long id, String login, String pass) { }
