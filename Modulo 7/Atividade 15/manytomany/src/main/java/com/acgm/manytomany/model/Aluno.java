package com.acgm.manytomany.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "alunos")
public class Aluno {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "nome")
    private String nome;

    @Column(name = "email")
    private String email;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(name = "alunos_cursos",
            joinColumns = @JoinColumn(name = "aluno_id",nullable = false),
            inverseJoinColumns = @JoinColumn(name = "curso_id", nullable = false)
    )
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private List<Curso> cursos;


    public Aluno() {}

    public Aluno(String nome, String email) {

        this.nome = nome;
        this.email = email;
    }

    public Aluno(Long id, String nome, String email) {
        
        this.id = id;
        this.nome = nome;
        this.email = email;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<Curso> getCursos() {
        return cursos;
    }

    public void setCursos(List<Curso> cursos) {
        this.cursos = cursos;
    }
    

}
