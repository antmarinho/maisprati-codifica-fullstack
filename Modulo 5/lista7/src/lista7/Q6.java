package lista7;

import java.util.PriorityQueue;
import java.util.Queue;
import java.util.Random;
import java.util.Scanner;

public class Q6 {

	public static void main(String[] args) {

		boolean x = false;
		int ficha = 1;
		int op;
		
		Scanner in = new Scanner(System.in);
		Queue<Integer> fila = new PriorityQueue<>();
		Random rand = new Random();
		
		do {
			
				System.out.println("[1] - Retire sua ficha de atendimento");
				System.out.println("[2] - Sair");
					op = in.nextInt();
					
				switch (op) {
				
					case 1 -> {
						
						System.out.println("Sua ficha e " + ficha);
						
						fila.add(ficha);
						
						ficha++;
					}
					
					case 2 -> x = true;
					
					default -> System.out.println("opcao invalida");
					
				}
				
				if(rand.nextInt(3) == 1) {
					
					System.out.println("Cliente de ficha numero " + fila.poll() + " ir para o caixa");
				}
				
			
		} while(!x || !fila.isEmpty());
		
		System.out.println("Todos clientes atendidos");

	}

}
