package org.example;

import java.util.ArrayList;
import java.util.List;

public class GerenciadorTarefa {

    private List<Tarefa> tarefas = new ArrayList<>();

    public void addTarefa(Tarefa tarefa) {

        tarefas.add(tarefa);

    }

    public void removerTarefa(Tarefa tarefa) {

        tarefas.remove(tarefa);

    }

    public Tarefa buscarTarefa(String titulo) {

        for(Tarefa tarefa : tarefas) {

            if(tarefa.getTitulo().equalsIgnoreCase(titulo))
                return tarefa;

        }

        return null;

    }

    public List<Tarefa> tarefasConcluidas() {

        List<Tarefa> concluidas = new ArrayList<>();

        for(Tarefa tarefa : tarefas) {

            if(tarefa.isConcluido())
                concluidas.add(tarefa);

        }

        return  concluidas;

    }

}
