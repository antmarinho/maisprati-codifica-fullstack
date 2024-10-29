package com.acgm.manytomany.repositories;

import com.acgm.manytomany.model.Aluno;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlunoRepository extends JpaRepository<Aluno, Long> {
}
