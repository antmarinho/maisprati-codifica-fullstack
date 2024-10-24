package com.acgm.services;

import com.acgm.model.Cliente;
import com.acgm.repositories.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    public Cliente salvar(Cliente cliente) {

        return clienteRepository.save(cliente);
    }

    public Cliente getCLiente(Long id) {

        return clienteRepository.findById(id).orElse(null);
    }

}
