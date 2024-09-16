package lista7;

import java.util.LinkedList;
import java.util.Scanner;
import lista7.Tarefa;

public class Q1 {
	
	public static Tarefa addTarefa() {
		
		String tarefa;
		
		Scanner in = new Scanner(System.in);
		
		System.out.println("Digite a tarefa");
			tarefa = in.nextLine();	
		
		Tarefa tar = new Tarefa(tarefa);
		
		System.out.println("Tarefa adicionada");
		
		return tar;
	}
	
	
	public static int removerTarefa(LinkedList<Tarefa> tar) {
		
		int i = 0;
		int op;
		
		Scanner in = new Scanner(System.in);
		
		System.out.println("Escola a terefa para ser removida");
		
		for(Tarefa tarefa : tar) {
			
			System.out.println("[" + i + "] = " + tarefa.getTarefa());
			
			i++;
			
		}
		
		op = in.nextInt();
		
		System.out.println("Tarefa removida");
		
		return op;
		
	}
	
	
	public static void marcarTarefa(LinkedList<Tarefa> tar) {
		
		int i = 0;
		int op;
		
		Scanner in = new Scanner(System.in);
		
		System.out.println("Escola a terefa para marcar como concluido");
		
		for(Tarefa tarefa : tar) {
			
			System.out.println("[" + i + "] = " + tarefa.getTarefa());
			
			i++;
			
		}
		
		op = in.nextInt();
		
		tar.get(op).setCheck(true);
		
		System.out.println("Tarefa marcada como concluida");
		
	}
	
	
	public static void main(String[] args) {
		
		boolean x = false;
		int op;
		
		Scanner in = new Scanner(System.in);
		
		LinkedList<Tarefa> tar = new LinkedList<Tarefa>();
		
		do {
			
			System.out.println("Escolha a opcao desejada");
			System.out.println("[1] - Adicionar tafera");
			System.out.println("[2] - Remover tafera");
			System.out.println("[3] - Marcar como concluido");
			System.out.println("[4] - Listar tarefas");
			System.out.println("[5] - Sair");
			
			op = in.nextInt();
			
			switch (op) {
			
			case 1 -> tar.add(addTarefa());
			
			case 2 -> tar.remove(removerTarefa(tar));
			
			case 3 -> marcarTarefa(tar);
			
			case 4 -> tar.forEach(System.out::println);
			
			case 5 -> x = true; 
			
			default ->
			
				System.out.println("Valor invalido: ");
				
			}
			
			
		} while (!x);
		
		
	}

}
