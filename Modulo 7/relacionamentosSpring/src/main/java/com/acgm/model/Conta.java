package com.acgm.model;

import jakarta.persistence.*;

@Entity
public class Conta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String numero;

    //@OneToOne(mappedBy = "conta")
   // private Cliente cliente;

    public Conta() {}

    public Conta(String numero, Long id) {

        this.numero = numero;
        this.id = id;
       // this.cliente = cliente;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }


}
