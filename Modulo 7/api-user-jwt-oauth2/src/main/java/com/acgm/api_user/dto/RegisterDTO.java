package com.acgm.api_user.dto;

import com.acgm.api_user.enums.Roles;

public record RegisterDTO(String login, String pass, Roles role) {
}
