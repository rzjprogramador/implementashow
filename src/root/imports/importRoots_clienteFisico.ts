// IMPORTACOES * ROOT CLIENTEFISICO
// REPLICANDO ARTEFATOS DE INDEX

export * from "../../../src/data/unique/clienteFisico/index.ts"; // UNIQUE
export * from "../../../src/domain/controllers/clienteFisico/index.ts"; // CONTROLLERS
export * from "../../../src/domain/entitys/clienteFisico/index.ts"; // ENTITY

// cada Grupo de pastas importa e exporta tudo para um index
// e aqui no rootImports da entidade puxamos  e roteamos estes index de cada pasta agrupada
// no map_json a chaveEntidade busca este root
