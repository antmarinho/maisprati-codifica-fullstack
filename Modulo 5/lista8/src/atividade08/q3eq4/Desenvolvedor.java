package atividade08.q3eq4;

public class Desenvolvedor extends Funcionario {

	public Desenvolvedor(String nome, double salario) {
		super(nome, salario);
	}

	public double calcularBonus() {
		
		return this.salario * (1 + 0.1);
	}
	
	@Override
	public void trabalhar() {
		
		System.out.println("Estou trabalhando no projeto");
	}
	
}
