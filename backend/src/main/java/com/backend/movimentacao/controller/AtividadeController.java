package com.backend.movimentacao.controller;

import com.backend.movimentacao.domain.Atividade;
import com.backend.movimentacao.model.AtividadeFilter;
import com.backend.movimentacao.service.AtividadeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/atividade")
@CrossOrigin(origins = "http://localhost:4200")
public class AtividadeController {

    @Autowired
    private AtividadeService atividadeService;

    @GetMapping
    public List<Atividade> findAllAtividade() {
        return atividadeService.getAllAtividades();
    }

    @GetMapping("/atividadeBy")
    public List<Atividade> findAllAtividadeByData(AtividadeFilter atividadeFilter) {
        return atividadeService.getAllAtividadesByFilter(atividadeFilter);
    }

    @PostMapping
    public Atividade gravarAtividade(@RequestBody Atividade Atividade) {
        return atividadeService.gravarAtividade(Atividade);
    }

    @PutMapping
    public Atividade atualizarAtividade(@RequestBody Atividade movimentacao) {
        return atividadeService.atualizarMovimentacao(movimentacao);
    }

}
