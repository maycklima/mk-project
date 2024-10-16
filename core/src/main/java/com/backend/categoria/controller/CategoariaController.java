package com.backend.categoria.controller;

import com.backend.categoria.domain.Categoria;
import com.backend.categoria.service.CategoriaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:8080")
public class CategoariaController {

    @Autowired
    private CategoriaService categoriaService;

    @GetMapping("/categorias")
    public List<Categoria> findAllMovimentacoes() {
        return categoriaService.getAllCategorias();
    }

}
