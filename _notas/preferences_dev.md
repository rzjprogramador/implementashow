---
marp: true
---

# NOMEACOES
> nomeacoes: <Entidade>

conceito:
  quando_acao: <verbo><Entidade> ex: createUser
  quando_objeto : <Entidade><ObjetoCoisaLocal> ex: userRepository

lista_features : listFeat<Entidade>
pipe_args: pipeArgs<Entidade>
pipe_model: pipeModel<Entidade>
literais: <Entidade>literal


---

# import_export:
seguir o padrao de no fim do arquivo
exportar separado :importacso de modulo e importacao de types. Porque em caso de lib fazer um main onde importa e ja exporta tudo sem necessidade de fazer um objeto modulo main.

# criacional:
> entidade_prototype_e_membros :
- melhor criar com classe , fica mais visivel os membros... e no mesmo arquivo ja faz e exporta só o make para instanciar o objeto.

---

