import { UserFisicoArgs, UserFisicoModel } from "../../../contracts.ts";

export const prepareCreateUserFisico = (a: UserFisicoArgs): UserFisicoModel => {
  const model: UserFisicoModel = { ...a, id: "1" };
  return model;
};
