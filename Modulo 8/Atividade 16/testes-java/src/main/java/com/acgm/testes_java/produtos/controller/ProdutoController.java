package com.acgm.testes_java.produtos.controller;

import java.util.List;

import com.acgm.testes_java.produtos.dto.ProdutoDTO;
import com.acgm.testes_java.produtos.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/produto")
public class ProdutoController {
	
	@Autowired
	private ProdutoService produtoService;
	
	
	@PostMapping
    private ResponseEntity<ProdutoDTO> createProd(@RequestBody ProdutoDTO dto) {

        return ResponseEntity.ok(produtoService.create(dto));

    }

    @GetMapping
    public  List<ProdutoDTO> getAll() {

        return produtoService.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProdutoDTO> getById(@PathVariable long id) {

    	ProdutoDTO dto = produtoService.getById(id);

        return dto != null ? ResponseEntity.ok(dto) : ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProdutoDTO> updateProd(@PathVariable long id, @RequestBody ProdutoDTO dto) {

    	ProdutoDTO prodUpd = produtoService.updateProd(id,dto);

        return prodUpd != null ? ResponseEntity.ok(prodUpd) : ResponseEntity.notFound().build();
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProd(@PathVariable long id) {

        boolean verif = produtoService.deleteProd(id);

        return verif != false ? ResponseEntity.ok("Produto Deletado") : ResponseEntity.notFound().build();
    }
    

}
