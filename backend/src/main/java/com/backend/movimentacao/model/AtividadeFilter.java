package com.backend.movimentacao.model;

import lombok.Data;
import org.springframework.stereotype.Component;

@Data
@Component
public class AtividadeFilter {

    private String mes;
    
    private String ano;

    private String orderBy;

}
