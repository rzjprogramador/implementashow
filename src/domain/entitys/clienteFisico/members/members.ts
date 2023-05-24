import { objectDateCurrent } from "../../../../../_subir_mods_ts/dateCurrent/main.ts";
import { ClienteFisicoArgs } from "../contracts.ts";

interface MembersUserFisico {
  showIdade: () => Promise<number>;
}

export const membersClienteFisico: MembersUserFisico = {
  async showIdade(this: ClienteFisicoArgs) {
    return await objectDateCurrent.currentYear() - this.idade!;
  },
};
