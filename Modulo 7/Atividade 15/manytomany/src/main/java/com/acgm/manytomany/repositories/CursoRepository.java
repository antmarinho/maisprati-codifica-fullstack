package com.acgm.manytomany.repositories;

import com.acgm.manytomany.model.Curso;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CursoRepository extends JpaRepository<Curso, Long> {

    @Query(value = "SELECT a.nome, a.email FROM alunos a INNER JOIN alunos_cursos m ON a.id = m.aluno_id WHERE m.curso_id = ?1;", nativeQuery = true)
    List<String> alunosMatriculados(Long id);

}
