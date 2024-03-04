package com.backend.movimentacao.service;

import com.backend.movimentacao.domain.Movimentacao;
import com.backend.movimentacao.repository.MovimentacaoRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovimentacaoService {

    @Autowired
    MovimentacaoRepository movimentacaoRepository;

    public List<Movimentacao> getAllMovimentacoes() {
        return movimentacaoRepository.findAll();
    }

    @Transactional
    public Movimentacao gravarMovimentacao(Movimentacao movimentacao) {
        return movimentacaoRepository.save(movimentacao);
    }
}
