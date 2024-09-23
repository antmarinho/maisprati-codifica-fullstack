package atividade08.q7eq8;

public class Boleto extends FormaPagamento {
	
	private String numBoleto;
	private double valorBoleto;

	public Boleto(String numBoleto, double valorBoleto) {
	
		this.numBoleto = numBoleto;
		this.valorBoleto = valorBoleto;
	}

	@Override
	public void processarPagamento(double valor) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void validarPagamento() {
		// TODO Auto-generated method stub
		
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
