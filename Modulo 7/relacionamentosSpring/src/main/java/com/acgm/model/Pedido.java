package com.acgm.model;

import jakarta.persistence.*;

import java.util.List;
import java.util.Objects;

@Entity
public class Pedido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String descricao;

    @OneToMany(mappedBy = "pedido", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Produto> produtos;

    public Pedido() {}

    public Pedido(Long id, String descricao, List<Produto> produtos) {

        this.id = id;
        this.descricao = descricao;
        this.produtos = produtos;

    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public List<Produto> getProdutos() {
        return produtos;
    }

    public void setProdutos(List<Produto> produtos) {
        this.produtos = produtos;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Pedido pedido = (Pedido) o;
        return Objects.equals(id, pedido.id) && Objects.equals(descricao, pedido.descricao) && Objects.equals(produtos, pedido.produtos);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, descricao, produtos);
    }
}
