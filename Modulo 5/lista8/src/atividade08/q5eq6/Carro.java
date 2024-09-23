package atividade08.q5eq6;

public class Carro implements IMeioTransporte {
	
	private int medidor;
	

	public Carro(int medidor) {
		this.medidor = medidor;
	}


	@Override
	public void acelerar() {
		
		this.medidor = this.medidor + 10;
		
		System.out.println("O carro acelerou");
	}

	@Override
	public void frear() {
		
		this.medidor = this.medidor - 10;
		
		if(this.medidor < 0)
			this.medidor = 0;
		else
			System.out.println("O carro freiou");
		
	}
	
	
	public int getMedidor() {
		return medidor;
	}

	public void setMedidor(int medidor) {
		this.medidor = medidor;
	}

}