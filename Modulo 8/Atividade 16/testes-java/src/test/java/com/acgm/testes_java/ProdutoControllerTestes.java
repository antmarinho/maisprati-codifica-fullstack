package com.acgm.testes_java;

import org.junit.jupiter.api.BeforeEach;  
import org.junit.jupiter.api.Test;  
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc; 
import org.springframework.boot.test.context.SpringBootTest;  
import org.springframework.http.MediaType;  
import org.springframework.test.web.servlet.MockMvc;  

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*; 
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;  

import com.acgm.testes_java.produtos.model.Produto;
import com.acgm.testes_java.produtos.repository.ProdutoRepository;
import com.fasterxml.jackson.databind.ObjectMapper;

@SpringBootTest
@AutoConfigureMockMvc
public class ProdutoControllerTestes {
	
	@Autowired
	private MockMvc mockMvc;
	
	@Autowired
	private ProdutoRepository produtoRepository;
	
	@Autowired
	private ObjectMapper mapper;
	
	@BeforeEach
	public void setup() {
		produtoRepository.deleteAll();
	}
	
	@Test
	public void getAll() throws Exception {
		
		Produto prod = new Produto("lapis", "lapis", 1.5d,3);
		
		produtoRepository.save(prod);

		Produto prod1 = new Produto("caneta", "caneta", 2.5d,5);

		produtoRepository.save(prod1);
		
		mockMvc.perform(get("/produto"))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$[0].nome").value("lapis"))
				.andExpect(jsonPath("$[0].descricao").value("lapis"))
				.andExpect(jsonPath("$[0].preco").value(1.5d))
				.andExpect(jsonPath("$[0].qtdEstoque").value(3))
				.andExpect(jsonPath("$[1].nome").value("caneta"))
				.andExpect(jsonPath("$[1].descricao").value("caneta"))
				.andExpect(jsonPath("$[1].preco").value(2.5d))
				.andExpect(jsonPath("$[1].qtdEstoque").value(5));
	}
	
	@Test
	public void getById() throws Exception {
		
		Produto prod = new Produto("lapis", "lapis", 1.5d,3);
		
		Produto saveProd = produtoRepository.save(prod);
		
		mockMvc.perform(put("/produto/" + saveProd.getId())
                .contentType(MediaType.APPLICATION_JSON)
                .content(mapper.writeValueAsString(prod)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.nome").value("lapis"))
                .andExpect(jsonPath("$.descricao").value("lapis"))
                .andExpect(jsonPath("$.preco").value(1.5d))
                .andExpect(jsonPath("$.qtdEstoque").value(3));
	}
	
	@Test
	public void falhaGetById() throws Exception {
		
		Produto prod = new Produto("lapis", "lapis", 1.5d,3);
		
		Produto saveProd = produtoRepository.save(prod);
		
		mockMvc.perform(put("/produto/" + saveProd.getId() + 1)
                .contentType(MediaType.APPLICATION_JSON)
                .content(mapper.writeValueAsString(prod)))
                .andExpect(status().isNotFound());
                
	}
	
	@Test
	 public void createProd() throws Exception {
		
			Produto prod = new Produto("caneta", "caneta", 1.5d,3);

	        mockMvc.perform(post("/produto")
	                .contentType(MediaType.APPLICATION_JSON)
	                .content(mapper.writeValueAsString(prod)))
	                .andExpect(status().isOk())
	                .andExpect(jsonPath("$.nome").value("caneta"))
					.andExpect(jsonPath("$.descricao").value("caneta"))
					.andExpect(jsonPath("$.preco").value(1.5d))
					.andExpect(jsonPath("$.qtdEstoque").value(3));
	 }
	
	@Test  
    public void updateProd() throws Exception {
		
		Produto prod = new Produto("lapis", "lapis", 1.5d,3);
        Produto saveProd = produtoRepository.save(prod); 

        Produto upProd = new Produto("caneta", "caneta", 2d,5);

        mockMvc.perform(put("/produto/" + saveProd.getId())
                .contentType(MediaType.APPLICATION_JSON)
                .content(mapper.writeValueAsString(upProd)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.nome").value("caneta"))
                .andExpect(jsonPath("$.descricao").value("caneta"))
                .andExpect(jsonPath("$.preco").value(2d))
                .andExpect(jsonPath("$.qtdEstoque").value(5));
        
    }

	@Test
	public void falhaUpdateProd() throws Exception {
		
		Produto prod = new Produto("lapis", "lapis", 1.5d,3);
        Produto saveProd = produtoRepository.save(prod); 

        Produto upProd = new Produto("caneta", "caneta", 2d,5);

        mockMvc.perform(put("/produto/" + saveProd.getId() + 1)
                .contentType(MediaType.APPLICATION_JSON)
                .content(mapper.writeValueAsString(upProd)))
                .andExpect(status().isNotFound());
        
    }

    @Test  
    public void deleteProd() throws Exception {
    	
    	Produto prod = new Produto("lapis", "lapis", 1.5d,3);
    	Produto saveProd = produtoRepository.save(prod);  

        mockMvc.perform(delete("/produto/" + saveProd.getId()))
                .andExpect(status().isOk());
        
    }
    
    @Test  
    public void falhaDeleteProd() throws Exception {
    	
    	Produto prod = new Produto("lapis", "lapis", 1.5d,3);
    	Produto saveProd = produtoRepository.save(prod);  

        mockMvc.perform(delete("/produto/" + saveProd.getId() + 1))
                .andExpect(status().isNotFound());
        
    }

}
