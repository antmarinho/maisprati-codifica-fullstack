package com.acgm.controllers;

import com.acgm.model.Pedido;
import com.acgm.services.PedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pedido")
public class PedidoController {

    @Autowired
    private PedidoService pedidoService;

    @PostMapping
    public ResponseEntity<Pedido> criar(@RequestBody Pedido pedido) {

        Pedido ped = pedidoService.salver(pedido);

        return ResponseEntity.ok(ped);

    }

    @GetMapping
    public ResponseEntity<List<Pedido>> listar() {

        List<Pedido> list = pedidoService.listaPedidos();

        return ResponseEntity.ok(list);

    }

    @GetMapping("/{id}")
    public ResponseEntity<Pedido> getPedido(@PathVariable Long id) {

        Pedido ped = pedidoService.getPedido(id);

        if(ped != null)
            return ResponseEntity.ok(ped);

        return ResponseEntity.notFound().build();

    }

}
