import { superDate } from "@externals";
import { IClienteFisicoArgs, IMembersClienteFisico } from "@clienteFisico";

const membersClienteFisico: IMembersClienteFisico = {
  showIdade(this: IClienteFisicoArgs) {
    const year = superDate.currentYear();
    return year - this?.dataNascimento?.ano;
  },
};

export { membersClienteFisico };
// usaLib -- arrumando superDate
