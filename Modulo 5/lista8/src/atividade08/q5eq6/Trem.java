package atividade08.q5eq6;

public class Trem implements IMeioTransporte {
	
	private int medidor;
	

	public Trem(int medidor) {
		this.medidor = medidor;
	}
	
	
	@Override
	public void acelerar() {
		
		this.medidor = this.medidor + 20;
		
		System.out.println("O trem acelerou");
	}

	@Override
	public void frear() {
		
		this.medidor = this.medidor - 20;
		
		if(this.medidor < 0)
			this.medidor = 0;
		else
			System.out.println("O trem freiou");
		
	}


	public int getMedidor() {
		return medidor;
	}

	public void setMedidor(int medidor) {
		this.medidor = medidor;
	}
	
}