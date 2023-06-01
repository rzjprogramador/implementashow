import { ClienteFisicoArgs, ClienteFisicoModel } from "@clienteFisico";

export const prepareCreateClienteFisico = (
  a: ClienteFisicoArgs,
): ClienteFisicoModel => {
  const model: ClienteFisicoModel = { ...a, ID: "1" };
  return model;
};
