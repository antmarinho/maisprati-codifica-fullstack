package com.acgm.repositories;

import com.acgm.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ClienteRepository extends JpaRepository<UUID, Cliente> {
}
