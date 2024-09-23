package atividade08.q3eq4;

public class Gerente extends Funcionario {

	public Gerente(String nome, double salario) {
		super(nome, salario);
	}
	
	public double calcularBonus() {
		
		return this.salario * (1 + 0.2);
	}
	
	@Override
	public void trabalhar() {
		
		System.out.println("Estou analisando o projeto q os desenvolvedores vao trabalhar");
	}


}
