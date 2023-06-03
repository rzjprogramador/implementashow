import {
  ClienteFisicoArgs,
  ClienteFisicoModel,
} from "@depsClienteFisico";

const prepareCreateClienteFisico = (
  a: ClienteFisicoArgs,
): ClienteFisicoModel => {
  const model: ClienteFisicoModel = { ...a, ID: "1" };
  return model;
};

export { prepareCreateClienteFisico };
