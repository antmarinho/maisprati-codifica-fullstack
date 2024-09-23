package atividade08.q1eq2;

public class Produto {
	
	private String nome;
	private double preco;
	private int qtd;
	
	public Produto(String nome, double preco, int qtd) {
		
		this.nome = nome;
		this.preco = preco;
		this.qtd = qtd;
		
	}
	
	
	public void aplicarDesconto(double percent) throws Exception {
		
		if(percent > 0.5)
			throw new Exception("desconto nao pode ser maior quer 50%");
		else 
			this.preco = Math.round(this.preco * (1 - percent));
		
	}
	

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public double getPreco() {
		return preco;
	}

	public void setPreco(double preco) {
		
		if(preco < 0)
			System.out.println("Preco nao pode ser negativo");
		else
			this.preco = preco;
		
	}

	public int getQtd() {
		return qtd;
	}

	public void setQtd(int qtd) {
		
		if(qtd < 0)
			System.out.println("A quantidade nao pode ser negativo");
		else
			this.qtd = qtd;
	}

	@Override
	public String toString() {
		return "Produto [nome = " + nome + ", preco = " + preco + ", qtd = " + qtd + "]";
	}
	
	

}
