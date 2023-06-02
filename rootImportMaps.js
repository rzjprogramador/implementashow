import { readJsonSync } from "https://deno.land/std@0.66.0/fs/mod.ts";

// import { readJsonSync } from "https://deno.land/std@0.66.0/fs/mod.ts";

// ARQUIVOS QUE SERAO LIDOS
const import_map = "import_map.json";
const imports_entity = "imports_entity.json";
const imports_entity2 = "imports_entity2.json";

const importMap = {};

const importMapFiles = [import_map, imports_entity, imports_entity2];

for (const file of importMapFiles) {
  const data = await readJsonSync(file);
  Object.assign(importMap, data.imports);
}

// console.log(importMap);
