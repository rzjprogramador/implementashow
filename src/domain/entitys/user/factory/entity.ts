import { validPrimeiroNome } from "../../../../global/imports/githubModulesSubir/functionValue/primeiroNome/primeiroNome.ts";
import { addPropsUser } from "../dynamic/addProps.ts";
import { UserArgs } from "../dynamic/contracts.ts";
import { membersProtoUser } from "../dynamic/members.ts";

const userFactoryByArgs = (u: UserArgs) => {
  const entity = Object.create(membersProtoUser);
  // criar props separadas :: para validar cada uma
  entity.primeiroNome = validPrimeiroNome(u.primeiroNome);
  entity.texto = u.texto;
  entity.numeroInteiro = u.numeroInteiro;
  return entity;
};

export const createEntityUser = (f: UserArgs) => {
  const protoCore = userFactoryByArgs(f);
  const addProps = { ...addPropsUser };
  const model = {
    ...protoCore,
    ...addProps,
  };
  return model;
};
