package com.acgm.testes_java.produtos.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.acgm.testes_java.produtos.dto.ProdutoDTO;
import com.acgm.testes_java.produtos.model.Produto;
import com.acgm.testes_java.produtos.repository.ProdutoRepository;

@Service
public class ProdutoService {
	
	@Autowired
	private ProdutoRepository produtoRepository;
	
	
	public ProdutoDTO create(ProdutoDTO dto) {
		
		Produto novo = new Produto(dto.nome(), dto.descricao(), dto.preco(), dto.qtdEstoque());
		
		Produto prod = produtoRepository.save(novo);
		
		return convertDTO(prod);
				
	}
	
	
	public ProdutoDTO getById(long id) {

        Optional<Produto> prod = produtoRepository.findById(id);

        return prod.map(this::convertDTO).orElse(null);

    }

	
    public List<ProdutoDTO> getAll() {

        return produtoRepository.findAll().stream().map(this::convertDTO).collect(Collectors.toList());
    }
    
    
    public ProdutoDTO updateProd(long id, ProdutoDTO dto) {

    	Optional<Produto> prod = produtoRepository.findById(id);

        if (prod.isPresent()) {

            Produto novoProd = prod.get();
            
            novoProd.setDescricao(dto.descricao());
            novoProd.setNome(dto.nome());
            novoProd.setPreco(dto.preco());
            novoProd.setQtdEstoque(dto.qtdEstoque());

            produtoRepository.save(novoProd);

            return convertDTO(novoProd);
        }

        return null;
    }
    
    
    public boolean deleteProd(long id) {
    	
    	if(produtoRepository.existsById(id)) {
    		
    		produtoRepository.deleteById(id);
    		
    		return true;
    	}
    	
    	return false;
    }
	
    
	private ProdutoDTO convertDTO(Produto prod) {

		ProdutoDTO prodDTO = new ProdutoDTO(prod.getId(),prod.getNome(),prod.getDescricao(),prod.getPreco(),prod.getQtdEstoque());

        return prodDTO;
    }
	

}
