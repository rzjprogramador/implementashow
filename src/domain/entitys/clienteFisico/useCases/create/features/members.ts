import { SuperDateTS } from "@externals";
import { IClienteFisicoArgs, IMembersClienteFisico } from "@clienteFisico";

const membersClienteFisico: IMembersClienteFisico = {
  showIdade(this: IClienteFisicoArgs) {
    const year = SuperDateTS.currentYear();
    return year - this?.dataNascimento?.ano;
  },
};

export { membersClienteFisico };
// usaLib -- arrumando superDate
