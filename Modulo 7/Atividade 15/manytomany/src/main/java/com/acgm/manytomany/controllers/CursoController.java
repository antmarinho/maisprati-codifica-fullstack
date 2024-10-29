package com.acgm.manytomany.controllers;

import com.acgm.manytomany.model.Aluno;
import com.acgm.manytomany.model.Curso;
import com.acgm.manytomany.repositories.AlunoRepository;
import com.acgm.manytomany.repositories.CursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cursos")
public class CursoController {

    @Autowired
    private AlunoRepository alunoRepository;

    @Autowired
    private CursoRepository cursoRepository;

    @PostMapping()
    public Curso addCurso(@RequestBody Curso curso) {

        Curso novo = new Curso(curso.getNome(), curso.getDescricao());

        novo = cursoRepository.save(novo);

        return novo;
    }

    @GetMapping("/{id}/alunos")
    public List<String> alunosMatriculados(@PathVariable Long id) {

        List<String> alunos = cursoRepository.alunosMatriculados(id);

        return alunos;
    }

}
