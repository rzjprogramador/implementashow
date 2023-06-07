---
marp: true
---

# ImportMaps_e_Deps : importacoes de dependencias
1. *todos artefatos são registrados no diretorio roots/deps
   1. no arquivo que referencia sua entidadeDeps.ts
   2. todos estes entidadeDeps são importados no master _rootDeps.
   3. no import_map.json teremos variaveis que apontam apra o endereço do master _rootDeps e nele teremos referencia somente de entidades e todas apontando pro master _rootDeps.
   4. na aplicacao quando precisar importar uma dependencia busco com <@depsEntidade> que preciso e esta registrada no import_map.json que na verdade puxa do master _rootDeps que concentra todos imports.

1. *rodar_visualizacao_no_console:
   1. rodar_test_enxerando_import_mapJSON: `deno test -A --watch --import-map import_map.json`
   1. rodar_arquivoIsolado_enxerando_import_mapJSON: `deno run --watch -A --import-map import_map.json <ARQUIVO.ext>`

# Implementacoes_controller

> construir_model:
 na construcao do controller ao construir um model do tipo do IModel garante que vai devolver um model correto no ok, e assim nao precisa criar varios objetos response ok do tipo que to precisando..ele ja esta garantido nesta construcao.

---
