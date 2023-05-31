---
marp: true
---

# Estrategia Estrutura para ImportMap

// exemplo fakers

> construir_model:
1. diretorio nomear como categoria ::package/nameSpace
    1. primeiro o servico/
       1. dentro a entidade

1. json_maps: no nomeDachave será o nome do servico/ no valor vá ate a pasta/ que terá o nome do servico
  1. no uso vc chama a @variavel/entidade

1. estrategia_variavel_diretorio_ou_arquivo:
   1. se for global usar *variavelDiretorio - se for entidade usar *variavelServicoDaEntidade , beneficio: se precisar mudar algo muda nesta variavel e nao nos dependentes espalhados #fonteUnica.

1. casos_que_nao_precisa_modularizar_caminho:
   1. nos casos que a importacao sempre vem da mesma pasta nao vai ser usado por mais ninguem fora , nao precisa modularizar o caminho pode importar com ./arquivo.ext
---
