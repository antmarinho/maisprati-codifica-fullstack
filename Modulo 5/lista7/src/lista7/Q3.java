package lista7;

import java.util.LinkedList;
import java.util.Scanner;

public class Q3 {
	
	public static void desfazerTexto(LinkedList<String> texto) {
		
		if(texto.size() > 1) {
			texto.remove(texto.size() - 1);
		}
		
	}
	
	public static void imprimir(LinkedList<String> texto) {
		
		texto.forEach(System.out::println);
		
	}
	
	public static void escrever(LinkedList<String> texto) {
		
		
		Scanner text = new Scanner(System.in);
		
		String escrever;
		
		escrever = text.nextLine();
		
		texto.add(escrever);
		
	}
	
	public static void main(String[] args) {
		
		boolean x = false;
		int op;
		
		Scanner in = new Scanner(System.in);
		
		LinkedList<String> texto = new LinkedList<String>();
		texto.add("");
		
		do {
			
				imprimir(texto);
				System.out.println();
				
				System.out.println("[1] - Escrever texto");
				System.out.println("[2] - Desfazer");
				System.out.println("[3] - Sair");
				
				op = in.nextInt();
				
				switch (op) {
				
					case 1 -> escrever(texto);
					
					case 2 -> desfazerTexto(texto);
					
					case 3 -> x = true; 
			
				
			}
			
			
		} while (!x);
		
		
	}
}
