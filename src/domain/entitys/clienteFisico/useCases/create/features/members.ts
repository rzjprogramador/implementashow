import { objectDateCurrent } from "../../../../../../../topLevel/deps/_deps.deps.ts";
import {
  ClienteFisicoArgs,
  MembersClienteFisico,
} from "../../../../../../../topLevel/deps/_deps.deps.ts";

const membersClienteFisico: MembersClienteFisico = {
  showIdade(this: ClienteFisicoArgs) {
    const year = objectDateCurrent.currentYear();
    return year - this?.dataNascimento?.ano;
  },
};

export { membersClienteFisico };
