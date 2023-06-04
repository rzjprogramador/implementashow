import { IClienteFisicoArgs, IClienteFisicoModel } from "@clienteFisico";

const prepareCreateClienteFisico = (
  a: IClienteFisicoArgs,
): IClienteFisicoModel => {
  const model: IClienteFisicoModel = { ...a, ID: "1" };
  return model;
};

export { prepareCreateClienteFisico };
