import {
  ClienteFisicoArgs,
  ClienteFisicoModel,
} from "../../../../../../../topLevel/deps/_deps.deps.ts";

const prepareCreateClienteFisico = (
  a: ClienteFisicoArgs,
): ClienteFisicoModel => {
  const model: ClienteFisicoModel = { ...a, ID: "1" };
  return model;
};

export { prepareCreateClienteFisico }
