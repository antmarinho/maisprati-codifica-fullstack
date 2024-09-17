package lista7;

import java.util.PriorityQueue;
import java.util.Queue;
import java.util.Random;


public class Q8 {
	
	public static void main(String[] args) {
		
		int i = 1;
		boolean x = false;
		
		Random rand = new Random();
		
		Queue<String> prog = new PriorityQueue<>();
		
		do {
				
				if(i <= 3) {
					
					System.out.println("Processo " + i + " criado");
					
					prog.add("processo "  + i);
					
				}
				
				i++;
	
				if(prog.isEmpty())
					x = true;
				else if (rand.nextInt(4) == 2)
					System.out.println(prog.remove() + " entrou em execucao");
				
			
		} while (!x);
		
	}

}
