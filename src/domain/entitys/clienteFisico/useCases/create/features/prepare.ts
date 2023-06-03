import {
  ClienteFisicoArgs,
  ClienteFisicoModel,
} from "../../../clienteFisico.deps.ts";

export const prepareCreateClienteFisico = (
  a: ClienteFisicoArgs,
): ClienteFisicoModel => {
  const model: ClienteFisicoModel = { ...a, ID: "1" };
  return model;
};
