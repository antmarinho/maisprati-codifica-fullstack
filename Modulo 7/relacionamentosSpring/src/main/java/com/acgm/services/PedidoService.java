package com.acgm.services;

import com.acgm.model.Pedido;
import com.acgm.repositories.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PedidoService {

    @Autowired
    private PedidoRepository pedidoRepository;

    public Pedido salver(Pedido pedido) {

        return pedidoRepository.save(pedido);
    }

    public List<Pedido> listaPedidos() {

        return pedidoRepository.findAll();
    }

    public Pedido getPedido(Long id) {

        return pedidoRepository.findById(id).orElse(null);
    }

}
