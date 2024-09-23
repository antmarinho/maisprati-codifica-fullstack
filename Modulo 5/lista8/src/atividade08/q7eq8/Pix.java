package atividade08.q7eq8;

public class Pix extends FormaPagamento {
	
	private String cpf;
	private double saldo;

	public Pix(String cpf, double saldo) {
		
		this.cpf = cpf;
		this.saldo = saldo;
	}

	@Override
	public void processarPagamento(double valor) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void validarPagamento() {
		// TODO Auto-generated method stub
		
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
