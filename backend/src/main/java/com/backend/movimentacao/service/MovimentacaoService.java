package com.backend.movimentacao.service;

import com.backend.movimentacao.domain.Movimentacao;
import com.backend.movimentacao.model.MovimentacaoFilter;
import com.backend.movimentacao.repository.MovimentacaoRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class MovimentacaoService {

    @Autowired
    MovimentacaoRepository movimentacaoRepository;

    public List<Movimentacao> getAllMovimentacoes() {
        return movimentacaoRepository.findAll();
    }

    public List<Movimentacao> getAllMovimentacoesByFilter(MovimentacaoFilter movimentacaoFilter) {

        return movimentacaoRepository.findAllByDataMovimentacaoBetween(Integer.parseInt(movimentacaoFilter.getMesMovimentacao()), Integer.parseInt(movimentacaoFilter.getAnoMovimentacao()));
    }

    @Transactional
    public Movimentacao gravarMovimentacao(Movimentacao movimentacao) {
        return movimentacaoRepository.save(movimentacao);
    }
}
