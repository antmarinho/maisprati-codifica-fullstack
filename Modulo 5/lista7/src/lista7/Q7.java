package lista7;

import java.util.PriorityQueue;
import java.util.Queue;
import java.util.Scanner;

public class Q7 {

	public static void main(String[] args) throws InterruptedException {

		boolean x = false;
		int op;
		String arquivo;
		
		Scanner in = new Scanner(System.in);
		Scanner inStr = new Scanner(System.in);
		Queue<String> imprimir = new PriorityQueue<>();
		
		do {
			
				System.out.println("[1] - Add arquivos para imprimir");
				System.out.println("[2] - Imprimir");
					op = in.nextInt();
					
				switch (op) {
				
					case 1 -> {
						
						System.err.println("Nome do arquivo para imprmir");
							arquivo = inStr.nextLine();
							
						imprimir.add(arquivo);
					}
					
					case 2 -> x = true;
					
					default -> System.out.println("opcao invalida");
					
				}
			
				
			
		} while(!x);
		
		System.out.println("Comecando a Impressao" + imprimir.size());
		
		for(int i = 0; i <= (imprimir.size() + 1); i++) {
			
			System.out.println("Imprimindo o arquivo " + imprimir.remove());
			Thread.sleep(2000);
			
			
		}

	}

}
