import { mkeObjectDateCurrent } from "@depsExternals";
import { ClienteFisicoArgs, MembersClienteFisico } from "@depsClienteFisico";

const membersClienteFisico: MembersClienteFisico = {
  showIdade(this: ClienteFisicoArgs) {
    const year = mkeObjectDateCurrent.currentYear();
    return year - this?.dataNascimento?.ano;
  },
};

export { membersClienteFisico };
// usaLib
