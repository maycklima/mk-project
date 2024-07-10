package com.backend.movimentacao.repository;

import com.backend.movimentacao.domain.Atividade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AtividadeRepository extends JpaRepository<Atividade, Long> {

    @Query("SELECT m FROM Atividade m WHERE MONTH(m.data) = :mes AND YEAR(m.data) = :ano")
    List<Atividade> findAllByDataMovimentacaoBetween(int mes, int ano);

}