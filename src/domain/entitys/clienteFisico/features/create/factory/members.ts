import { objectDateCurrent } from "@modRZ";
import { ClienteFisicoArgs, MembersClienteFisico } from "@clienteFisico";

const membersClienteFisico: MembersClienteFisico = {
  showIdade(this: ClienteFisicoArgs) {
    const year = objectDateCurrent.currentYear();
    return year - this?.dataNascimento?.ano;
  },
};

export { membersClienteFisico };
