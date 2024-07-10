package com.backend.movimentacao.service;

import com.backend.movimentacao.domain.Atividade;
import com.backend.movimentacao.model.AtividadeFilter;
import com.backend.movimentacao.repository.AtividadeRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AtividadeService {

    @Autowired
    AtividadeRepository atividadeRepository;

    public List<Atividade> getAllAtividades() {
        return atividadeRepository.findAll();
    }

    public List<Atividade> getAllAtividadesByFilter(AtividadeFilter atividadeFilter) {
        return atividadeRepository.findAllByDataMovimentacaoBetween(Integer.parseInt(atividadeFilter.getMes()), Integer.parseInt(atividadeFilter.getAno()));
    }

    @Transactional
    public Atividade gravarAtividade(Atividade Atividade) {
        return atividadeRepository.save(Atividade);
    }

    @Transactional
    public Atividade atualizarMovimentacao(Atividade Atividade) {
        return atividadeRepository.save(Atividade);
    }
}
