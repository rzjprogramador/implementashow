import { modRegisters } from "../../../../global/imports/mod_deps.ts";
// import { AddPropsUser } from "./contracts.ts";

export const addPropsUser = {
  ...modRegisters.identifiers,
  ...modRegisters.dates,
  // demais campos adicionar abaixo:
};

// # addProps: add props ao objeto acima ... sempre que precisar add props ao objeto inserir espalhadamente no objeto acima addProps, que esta programado para junto com os args da entity add props ao objeto final
