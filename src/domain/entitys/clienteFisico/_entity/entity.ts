import { ClienteFisicoEntityFN, IClienteFisicoArgs, membersClienteFisico } from "./mod.ts";

const clienteFisicoFactory = (a: IClienteFisicoArgs) => {
  const entity = Object.create(membersClienteFisico);
  const merge = Object.assign(entity, a);
  return merge;
};

// add_membros_entidade: Para isto a entidade será criada contendo a factory e seus membros e publicada.

const clienteFisicoEntity: ClienteFisicoEntityFN = async (d) => {
  const entity = clienteFisicoFactory(d)
  return await entity
}


export { clienteFisicoEntity }