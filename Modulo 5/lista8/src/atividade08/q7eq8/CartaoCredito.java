package atividade08.q7eq8;

public class CartaoCredito extends FormaPagamento{
	
	private String numeroCC;
	private double saldo;

	public CartaoCredito(String numeroCC, double saldo) {
		
		this.numeroCC = numeroCC;
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
