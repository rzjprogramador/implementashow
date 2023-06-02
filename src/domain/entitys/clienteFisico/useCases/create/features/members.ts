import { objectDateCurrent } from "@rzModulesTS";
import { ClienteFisicoArgs } from "@contractsClienteFisico";
import { MembersClienteFisico } from "@contractsClienteFisico";

const membersClienteFisico: MembersClienteFisico = {
  showIdade(this: ClienteFisicoArgs) {
    const year = objectDateCurrent.currentYear();
    return year - this?.dataNascimento?.ano;
  },
};

export { membersClienteFisico };
