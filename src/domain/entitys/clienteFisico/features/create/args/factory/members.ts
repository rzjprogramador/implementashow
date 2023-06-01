import { objectDateCurrent } from "@rzModulesTS";
import { ClienteFisicoArgs } from "@clienteFisicoContracts";
import { MembersClienteFisico } from "@clienteFisicoContracts";

const membersClienteFisico: MembersClienteFisico = {
  showIdade(this: ClienteFisicoArgs) {
    const year = objectDateCurrent.currentYear();
    return year - this?.dataNascimento?.ano;
  },
};

export { membersClienteFisico };
