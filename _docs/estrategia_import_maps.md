---
marp: true
---

# Estrategia Estrutura para ImportMap

// exemplo fakers

> construir_model:
1. diretorio nomear como categoria ::package/nameSpace
    1. primeiro o ferramenta/
       1. dentro a entidade

1. estrategia_variavel_diretorio_ou_arquivo:
   1. se for global usar *variavelDiretorio - se for entidade usar *variavelFerramentaDaEntidade , beneficio: se precisar mudar algo muda nesta variavel e nao nos dependentes espalhados #fonteUnica.

1. estrategia_modularizacaoVariavel:
   1. nomeie a variavel com <nomeDoArquivoEntidade> ... e Não com o nomeDaPasta
   2. recomendados: [ ferramentaEntidade, ]

2. estrategia_modularizacaoDiretorio:
   1. nomeie a variavel com  <nomeDoDiretorio/>
   2. recomendados: [ useCasesEntidade, ]

3. casos_que_nao_precisa_modularizar_caminho:
   1. nos casos que a importacao sempre vem da mesma pasta nao vai ser usado por mais ninguem fora , nao precisa modularizar o caminho pode importar com ./arquivo.ext

---
