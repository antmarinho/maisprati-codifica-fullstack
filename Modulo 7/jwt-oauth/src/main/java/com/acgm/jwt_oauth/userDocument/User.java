package com.acgm.jwt_oauth.userDocument;

import com.mongodb.lang.NonNull;
import org.springframework.data.annotation.Id;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import java.util.Collection;
import java.util.List;

public class User implements UserDetails {

    @Id
    private String id;

    @NonNull
    private String username;

    @NonNull
    private String password;

    public User() {}

    public User(String id, @NonNull String userName, @NonNull String password) {

        this.id = id;
        this.username = userName;
        this.password = password;

    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {

        return List.of();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    @NonNull
    public String getUserName() {
        return username;
    }

    public void setUserName(@NonNull String userName) {
        this.username = userName;
    }

    @Override
    @NonNull
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return getUserName();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    public void setPassword(@NonNull String password) {
        this.password = password;
    }



}
