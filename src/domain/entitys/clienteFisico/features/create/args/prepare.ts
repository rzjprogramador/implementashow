import { ClienteFisicoArgs, ClienteFisicoModel } from "@clienteFisicoContracts";

export const prepareCreateClienteFisico = (
  a: ClienteFisicoArgs,
): ClienteFisicoModel => {
  const model: ClienteFisicoModel = { ...a, ID: "1" };
  return model;
};
