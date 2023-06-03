import { objectDateCurrent } from "../../../../../../../topLevel/deps/_rootDeps.deps.ts";
import {
  ClienteFisicoArgs,
  MembersClienteFisico,
} from "../../../../../../../topLevel/deps/_rootDeps.deps.ts";

const membersClienteFisico: MembersClienteFisico = {
  showIdade(this: ClienteFisicoArgs) {
    const year = objectDateCurrent.currentYear();
    return year - this?.dataNascimento?.ano;
  },
};

export { membersClienteFisico };
