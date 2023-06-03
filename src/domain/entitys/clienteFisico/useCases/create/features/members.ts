import { objectDateCurrent } from "../../../../../../externals/externalsDeps.deps.ts";
import {
  ClienteFisicoArgs,
  MembersClienteFisico,
} from "../../../clienteFisico.deps.ts";

const membersClienteFisico: MembersClienteFisico = {
  showIdade(this: ClienteFisicoArgs) {
    const year = objectDateCurrent.currentYear();
    return year - this?.dataNascimento?.ano;
  },
};

export { membersClienteFisico };
