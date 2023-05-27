import { objectDateCurrent } from "../../../../../../../../_subir_mods_ts/dateCurrent/main.ts";
import {
  ClienteFisicoArgs,
  MembersClienteFisico,
} from "../../../../contracts.ts";

const membersClienteFisico: MembersClienteFisico = {
  showIdade(this: ClienteFisicoArgs) {
    const year = objectDateCurrent.currentYear();
    return year - this?.dataNascimento?.ano;
  },
};

export { membersClienteFisico };
