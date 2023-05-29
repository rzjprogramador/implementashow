import { objectDateCurrent } from "../../../../../../../app/dataApp/imports/mod_deps.ts";
import {
  ClienteFisicoArgs,
  MembersClienteFisico,
} from "../../../../contracts.ts";

const membersClienteFisico: MembersClienteFisico = {
  showIdade(this: ClienteFisicoArgs) {
    const year = objectDateCurrent.currentYear();
    return year - this?.dataNascimento?.ano;
  },
};

export { membersClienteFisico };
