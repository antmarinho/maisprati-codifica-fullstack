package lista7;

import java.util.LinkedList;
import java.util.Scanner;
import lista7.Url;

public class Q2 {
	
	public static void acessarUrl(LinkedList<Url> url) {
		
		String link;
		
		Scanner in = new Scanner(System.in);
		
		System.out.println("Digite o Url");
			link = in.nextLine();	
			
		Url urlLink = new Url(link);
		
		if(url.size() > 2) {
			
			url.remove();
			url.add(urlLink);
		}
		
		else 
			url.add(urlLink);
		
	}

	public static void main(String[] args) {
	
		boolean x = false;
		int op;
		
		Scanner in = new Scanner(System.in);
		
		LinkedList<Url> url = new LinkedList<Url>();
		
		do {
			
			System.out.println("Escolha a opcao desejada");
			System.out.println("[1] - Acessar Url");
			System.out.println("[2] - Ver historico");
			System.out.println("[3] - Sair");
			
			op = in.nextInt();
			
			switch (op) {
			
			case 1 -> acessarUrl(url);
			
			case 2 -> url.forEach(System.out::println);
			
			case 3 -> x = true; 
			
			default ->
			
				System.out.println("Valor invalido: ");
				
			}
			
			
		} while (!x);
		

	}

}
