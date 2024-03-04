package com.backend.movimentacao.domain;

import com.backend.categoria.domain.Categoria;
import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "TB_MOVIMENTACAO")
public class Movimentacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String descricao;

    @ManyToOne
    private Categoria categoria;

    private BigDecimal valor;

    private boolean pago;

    private String tipo;

    private LocalDateTime dataInclusao;

}
