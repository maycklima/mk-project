package com.backend.movimentacao.controller;

import com.backend.movimentacao.domain.Movimentacao;
import com.backend.movimentacao.model.MovimentacaoFilter;
import com.backend.movimentacao.service.MovimentacaoService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/movimentacao")
@CrossOrigin(origins = "http://localhost:4200")
public class MovimentacaoController {

    @Autowired
    private MovimentacaoService movimentacaoService;

    @GetMapping
    public List<Movimentacao> findAllMovimentacoes() {
        return movimentacaoService.getAllMovimentacoes();
    }

    @GetMapping("/movimentacaoBy")
    public List<Movimentacao> findAllMovimentacoesByData(MovimentacaoFilter movimentacaoFilter) {
        return movimentacaoService.getAllMovimentacoesByFilter(movimentacaoFilter);
    }

    @PostMapping
    public Movimentacao gravarMovimentacao(@RequestBody Movimentacao movimentacao) {
        return movimentacaoService.gravarMovimentacao(movimentacao);
    }

    @PutMapping
    public Movimentacao atualizarItem(@RequestBody Movimentacao movimentacao) {
        return movimentacaoService.atualizarMovimentacao(movimentacao);
    }

}
