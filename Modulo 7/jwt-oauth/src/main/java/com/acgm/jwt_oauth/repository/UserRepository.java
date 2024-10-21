package com.acgm.jwt_oauth.repository;

import com.acgm.jwt_oauth.userDocument.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<User, String> {

    boolean existsByUserName(String username);

    Optional<User> findByUserName(String username);

}
