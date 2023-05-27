---
marp: true
---

# REQUESITOS_FLUXO_CRIACAO_ENTIDADE
> requerimentos_fases_passosLogicos
>
useCase_CreateEntity_features_pipe_args
conceito: para campos argumentados.

[x] - 1 - validar argumentos
[x] - 2 - fabrica entidade : criando factory.
[x] - 3 - aplica regras
[x] - 4 - por ultimo transforma adiciona props ...pronto de args tera um semiModel...este sera argumento psra features do pipe model controller


---

# features_pipe_model_controller:
> conceito: tudo que possa usar todos csmpos de um modelo final de entidade.

[x] - computaCampos que precisam de valores computados vindo de outros membros :: computedFieldsEntidade
[x] - registra LogUsuario
[x] - por ultimo >> salva no repositorio , preciso deste retorno no controle...este salva uso no test pq é o ultimo e ja esta com tudo pronto.

controlador: com este input de pipes prontos:
[x] - add ao obj responseData o info: com feedback caso sucesso. e entrega pro framework que servira a resposta ao Client.

---

# TESTS_OBRIGATORIOS
[x] - prototype da factory
[x] - criacao objeto pela factory
[x] -
[x] -

---


