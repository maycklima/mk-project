package com.backend.movimentacao.repository;

import com.backend.movimentacao.domain.Movimentacao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface MovimentacaoRepository extends JpaRepository<Movimentacao, Long> {

    @Query("SELECT m FROM Movimentacao m WHERE MONTH(m.data) = :mes AND YEAR(m.data) = :ano")
    List<Movimentacao> findAllByDataMovimentacaoBetween(int mes, int ano);

}