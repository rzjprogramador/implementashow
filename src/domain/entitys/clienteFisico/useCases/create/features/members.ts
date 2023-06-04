import { remakerObjectDateCurrent } from "@depsExternals";
import { ClienteFisicoArgs, MembersClienteFisico } from "@depsClienteFisico";

const membersClienteFisico: MembersClienteFisico = {
  showIdade(this: ClienteFisicoArgs) {
    const year = remakerObjectDateCurrent.currentYear();
    return year - this?.dataNascimento?.ano;
  },
};

export { membersClienteFisico };
