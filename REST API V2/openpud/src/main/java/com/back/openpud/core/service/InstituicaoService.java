package com.back.openpud.core.service;

import com.back.openpud.api.dto.request.InstituicaoRequestDTO;
import com.back.openpud.core.entity.InstituicaoEntity;
import org.springframework.data.domain.Page;

import java.util.List;

public interface InstituicaoService {
    public Page<InstituicaoEntity> listarTodasInstituicoes();
    public InstituicaoEntity criarNovaInstituicao(InstituicaoEntity entity);

    public InstituicaoEntity editarInstituicao(InstituicaoEntity instituicao);
}
