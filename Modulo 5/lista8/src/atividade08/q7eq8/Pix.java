package atividade08.q7eq8;

import java.util.Scanner;

public class Pix extends FormaPagamento {
	
	private String cpf;
	private double saldo;

	public Pix(String cpf, double saldo) {
		
		this.cpf = cpf;
		this.saldo = saldo;
	}

	@Override
	public boolean processarPagamento(double valor) {
		
		double calculo;
		
		calculo = this.saldo - valor;
		
		if(calculo >= 0) {
			
			this.saldo = calculo;
			return true;
			
		}
		
		return false;
		
	}

	@Override
	public void validarPagamento() {
		
		String pix;
		boolean verif = false;
		
		Scanner in = new Scanner(System.in);
		Scanner inNum = new Scanner(System.in);
		
		System.out.println("Digite o cpf do pix");
			pix = in.nextLine();
			
		if(this.cpf.equalsIgnoreCase(pix)) {
			
			System.out.println("Digite o valor do pagamento ");
				verif = processarPagamento(inNum.nextDouble());
				
			if(verif)
				System.out.println("Pix realizado com sucesso");
			else 
				System.out.println("erro no pagamento saldo insuficiente");
			
		}
		
		else
			System.out.println("numero invalido");
		
		
	}
	

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public double getSaldo() {
		return saldo;
	}

	public void setSaldo(double saldo) {
		this.saldo = saldo;
	}
	

}
