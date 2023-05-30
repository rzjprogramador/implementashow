import { objectDateCurrent } from "@mods";
import {
  ClienteFisicoArgs,
  MembersClienteFisico,
} from "@clienteFisicoContracts";

const membersClienteFisico: MembersClienteFisico = {
  showIdade(this: ClienteFisicoArgs) {
    const year = objectDateCurrent.currentYear();
    return year - this?.dataNascimento?.ano;
  },
};

export { membersClienteFisico };
