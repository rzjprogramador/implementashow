import { mkeObjectDateCurrent } from "@externals";
import { IClienteFisicoArgs, IMembersClienteFisico } from "@clienteFisico";

const membersClienteFisico: IMembersClienteFisico = {
  showIdade(this: IClienteFisicoArgs) {
    const year = mkeObjectDateCurrent.currentYear();
    return year - this?.dataNascimento?.ano;
  },
};

export { membersClienteFisico };
// usaLib
