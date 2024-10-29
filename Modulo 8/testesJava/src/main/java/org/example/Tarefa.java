package org.example;

public class Tarefa {

    private String titulo;
    private boolean concluido;

    public Tarefa() {}

    public Tarefa(String titulo) {

        this.titulo = titulo;
        this.concluido = false;

    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public boolean isConcluido() {
        return concluido;
    }

    public void setConcluido(boolean concluido) {
        this.concluido = concluido;
    }

}
