package com.acgm.controllers;

import com.acgm.model.Cliente;
import com.acgm.services.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/cliente")
public class ClienteController {

    @Autowired
    private ClienteService clienteService;

    @PostMapping
    public ResponseEntity<Cliente> salvar(@RequestBody Cliente cliente) {

        Cliente cli = clienteService.salvar(cliente);
        return ResponseEntity.ok(cli);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cliente> getCliente(@PathVariable Long id) {

        Cliente cli = clienteService.getCLiente(id);

        if(cli != null)
            return ResponseEntity.ok(cli);

        return ResponseEntity.notFound().build();

    }

}
