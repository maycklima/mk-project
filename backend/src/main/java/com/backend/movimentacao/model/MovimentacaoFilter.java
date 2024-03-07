package com.backend.movimentacao.model;

import lombok.Data;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Data
@Component
public class MovimentacaoFilter {

    private String mesMovimentacao;
    private String anoMovimentacao;
    private String orderBy;

}
