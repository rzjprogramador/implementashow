import { objectDateCurrent } from "../../../../../_subir_mods_ts/objectDateCurrent/main.ts";
import { UserFisicoArgs } from "../contracts.ts";

interface MembersUserFisico {
  showIdade: () => Promise<number>;
}

export const membersUserFisico: MembersUserFisico = {
  async showIdade(this: UserFisicoArgs) {
    return await objectDateCurrent.currentYear() - this.idade!;
  },
};
