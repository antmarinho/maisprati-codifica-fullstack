import org.example.GerenciadorTarefa;
import org.example.Tarefa;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

public class GerenciadorTarefaTest {

    private GerenciadorTarefa gerenciadorTarefa;

    @BeforeEach
    public void setup() {

        gerenciadorTarefa = new GerenciadorTarefa();

    }

    @Test
    public void testAddtarefa() {

        Tarefa tarefa = new Tarefa("estudar java");

        gerenciadorTarefa.addTarefa(tarefa);

       // assertEquals(1,gerenciadorTarefa.tarefasConcluidas().size());
        assertNotNull(gerenciadorTarefa.buscarTarefa("estudar java"));

    }

    @Test
    public void testRemovertarefa() {

        Tarefa tarefa = new Tarefa("estudar java");

        gerenciadorTarefa.addTarefa(tarefa);
        gerenciadorTarefa.removerTarefa(tarefa);

        assertNull(gerenciadorTarefa.buscarTarefa("estudar java"));

    }

    @Test
    public void testBuscartarefa() {

        Tarefa tarefa = new Tarefa("estudar python");

        gerenciadorTarefa.addTarefa(tarefa);

        Tarefa result = gerenciadorTarefa.buscarTarefa("estudar python");

        assertNotNull(result);
        assertEquals("estudar python", tarefa.getTitulo());

    }

    @Test
    public void tesListartarefaConcluidas() {

        Tarefa tarefa = new Tarefa("estudar python");
        Tarefa tarefa2 = new Tarefa("estudar java");

        tarefa.setConcluido(true);

        gerenciadorTarefa.addTarefa(tarefa);
        gerenciadorTarefa.addTarefa(tarefa2);

        List<Tarefa> result = gerenciadorTarefa.tarefasConcluidas();

        assertNotNull(result);
        assertEquals(1,result.size());
        assertEquals("estudar python", result.get(0).getTitulo());

    }

}
