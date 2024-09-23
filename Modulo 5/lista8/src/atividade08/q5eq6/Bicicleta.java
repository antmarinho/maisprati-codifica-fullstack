package atividade08.q5eq6;

public class Bicicleta implements IMeioTransporte {
	
	private int medidor;
	

	public Bicicleta(int medidor) {
		this.medidor = medidor;
	}
	

	@Override
	public void acelerar() {
		
		this.medidor = this.medidor + 5;
		
		System.out.println("A bicicleta acelerou");
	}

	@Override
	public void frear() {
		
		this.medidor = this.medidor - 5;
		
		if(this.medidor < 0)
			this.medidor = 0;
		else 
			System.out.println("A bicicleta freiou");
		
	}


	public int getMedidor() {
		return medidor;
	}

	public void setMedidor(int medidor) {
		this.medidor = medidor;
	}
	
}