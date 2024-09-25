package atividade08.q7eq8;

import java.util.Scanner;

public class CartaoCredito extends FormaPagamento{
	
	private String numeroCC;
	private double saldo;

	public CartaoCredito(String numeroCC, double saldo) {
		
		this.numeroCC = numeroCC;
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
		
		String cartao;
		boolean verif = false;
		
		Scanner in = new Scanner(System.in);
		Scanner inNum = new Scanner(System.in);
		
		System.out.println("Digite o numero do cartao");
			cartao = in.nextLine();
			
		if(this.numeroCC.equalsIgnoreCase(cartao)) {
			
			System.out.println("Digite o valor do pagamento ");
				verif = processarPagamento(inNum.nextDouble());
				
			if(verif)
				System.out.println("pagamento realizado com sucesso");
			else 
				System.out.println("erro no pagamento saldo insuficiente");
			
		}
		
		else
			System.out.println("numero invalido");
		
		
	}
	

	public String getNumeroCC() {
		return numeroCC;
	}

	public void setNumeroCC(String numeroCC) {
		this.numeroCC = numeroCC;
	}

	public double getSaldo() {
		return saldo;
	}

	public void setSaldo(double saldo) {
		this.saldo = saldo;
	}
	

}
