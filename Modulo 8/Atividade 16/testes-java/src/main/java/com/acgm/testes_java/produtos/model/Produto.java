package com.acgm.testes_java.produtos.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "produtos")
public class Produto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "nome")
	private String nome;
	
	@Column(name = "descricao")
	private String descricao;
	
	@Column(name = "preco")
	private double preco;
	
	@Column(name = "qtdEstoque")
	private int qtdEstoque;

	public Produto() {}
	
	public Produto(String nome, String descricao, double preco, int qtdEstoque) {
		
		this.nome = nome;
		this.descricao = descricao;
		this.preco = preco;
		this.qtdEstoque = qtdEstoque;
		
	}

	public Produto(Long id, String nome, String descricao, double preco, int qtdEstoque) {
		
		this.id = id;
		this.nome = nome;
		this.descricao = descricao;
		this.preco = preco;
		this.qtdEstoque = qtdEstoque;
		
	}

	
	public Long getId() {
		return id;
	}
	

	public void setId(Long id) {
		this.id = id;
	}
	

	public String getNome() {
		return nome;
	}
	

	public void setNome(String nome) {
		this.nome = nome;
	}
	

	public String getDescricao() {
		return descricao;
	}
	

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	

	public double getPreco() {
		return preco;
	}
	

	public void setPreco(double preco) {
		this.preco = preco;
	}
	

	public int getQtdEstoque() {
		return qtdEstoque;
	}
	

	public void setQtdEstoque(int qtdEstoque) {
		this.qtdEstoque = qtdEstoque;
	}
	
	
}
