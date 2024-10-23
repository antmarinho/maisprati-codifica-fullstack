package com.acgm.repositories;

import com.acgm.model.Conta;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContaRepository extends JpaRepository<Long, Conta> {
}
