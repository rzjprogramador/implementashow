---
marp: true
---
# REQUERIMENTOS

## feats Args Create Entity
> conceito: para campos argumentados.

1. [x] checagem ::  se ja existe :: checkExist com campos id || ID - senao existir cria novo id
1. [x] validacao :: validar argumentos
1. [x] fabricar :: fabrica entidade : criando factory.
1. [x] regrar :: aplica regras
1. [x] transformar :: por ultimo transforma adiciona props ...pronto de args tera um semiModel...este sera argumento psra features do pipe model controller


---

## feats Model Controller CreateEntity :

> conceito: tudo que possa usar todos csmpos de um modelo final de entidade.

1. [] computaCampos que precisam de valores computados vindo de outros membros :: computedFieldsEntidade
1. [] registra LogUsuario
1. [] por ultimo >> salva no repositorio , preciso deste retorno no controle...este salva uso no test pq é o ultimo e ja esta com tudo pronto.

controlador: com este input de pipes prontos:
1.[] add ao obj responseData o info: com feedback caso sucesso. e entrega pro framework que servira a resposta ao Client.

---

# TESTS_OBRIGATORIOS
1.[] prototype da factory
1.[x] criacao objeto pela factory

---


