package atividade08.q7eq8;

import java.util.Scanner;

public class Boleto extends FormaPagamento {
	
	private String numBoleto;
	private double valorBoleto;

	public Boleto(String numBoleto, double valorBoleto) {
	
		this.numBoleto = numBoleto;
		this.valorBoleto = valorBoleto;
	}

	@Override
	public boolean processarPagamento(double valor) {
		
		if(valor == this.valorBoleto)
			return true;
		
		return false;
			
	}

	@Override
	public void validarPagamento() {
		
		String num;
		boolean verif = false;
		
		Scanner in = new Scanner(System.in);
		Scanner inNum = new Scanner(System.in);
		
		System.out.println("Digite o numero do boleto");
			num = in.nextLine();
			
		if(this.numBoleto.equalsIgnoreCase(num)) {
			
			System.out.println("O valor do boleto e R$ = " + this.valorBoleto);
			System.out.println("Envie o valor");
				verif = processarPagamento(inNum.nextDouble());
				
			if(verif)
				System.out.println("pagamento realizado com sucesso");
			else 
				System.out.println("erro no pagamento");
			
		}
		
		else
			System.out.println("numero invalido");
		
		
	}
	

	public String getNumBoleto() {
		return numBoleto;
	}

	public void setNumBoleto(String numBoleto) {
		this.numBoleto = numBoleto;
	}

	public double getValorBoleto() {
		return valorBoleto;
	}

	public void setValorBoleto(double valorBoleto) {
		this.valorBoleto = valorBoleto;
	}
	
	
}
