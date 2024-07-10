package com.backend.movimentacao.domain;

import com.backend.categoria.domain.Categoria;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "TB_ATIVIDADE")
public class Atividade {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String descricao;

    @ManyToOne
    private Categoria categoria;

    private LocalDateTime data;

    private boolean feito;

    private String tipo;

    private LocalDateTime dataInclusao;

}
