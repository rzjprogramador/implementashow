import { objectDateCurrent } from "@depsExternals";
import { ClienteFisicoArgs, MembersClienteFisico } from "@depsClienteFisico";

const membersClienteFisico: MembersClienteFisico = {
  showIdade(this: ClienteFisicoArgs) {
    const year = objectDateCurrent.currentYear();
    return year - this?.dataNascimento?.ano;
  },
};

export { membersClienteFisico };
