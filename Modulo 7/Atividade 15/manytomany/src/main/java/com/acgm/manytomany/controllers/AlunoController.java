package com.acgm.manytomany.controllers;

import com.acgm.manytomany.model.Aluno;
import com.acgm.manytomany.model.Curso;
import com.acgm.manytomany.repositories.AlunoRepository;
import com.acgm.manytomany.repositories.CursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/alunos")
public class AlunoController {

    @Autowired
    private AlunoRepository alunoRepository;

    @Autowired
    private CursoRepository cursoRepository;

    @PostMapping()
    public Aluno addAluno(@RequestBody Aluno aluno) {

        Aluno novo = new Aluno(aluno.getNome(), aluno.getEmail());

        novo = alunoRepository.save(novo);

        return novo;
    }

    @PostMapping("/{id}/cursos/{cursoId}")
    public Aluno matricularAluno(@PathVariable Long id, @PathVariable Long cursoId) {

        Aluno aluno = alunoRepository.getById(id);
        Curso curso = cursoRepository.getById(cursoId);

        List<Curso> cursos = aluno.getCursos();

        cursos.add(curso);

        aluno.setCursos(cursos);

        aluno = alunoRepository.save(aluno);

        return aluno;
    }

    @GetMapping("/{id}/cursos")
    public List<Curso> getCursosAluno(@PathVariable Long id) {

        Aluno aluno = alunoRepository.getById(id);

        return aluno.getCursos();

    }

    @DeleteMapping("/{id}/cursos/{cursoId}")
    public Aluno deletarMatricula(@PathVariable Long id, @PathVariable Long cursoId) {

        Aluno aluno = alunoRepository.getById(id);
        Curso curso = cursoRepository.getById(cursoId);

        List<Curso> cursosMatriculados = aluno.getCursos();

        cursosMatriculados.remove(curso);

        aluno.setCursos(cursosMatriculados);

        aluno = alunoRepository.save(aluno);

        return aluno;

    }

}