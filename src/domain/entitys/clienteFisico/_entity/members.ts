import { SuperDate, IClienteFisicoArgs, IMembersClienteFisico } from "./mod.ts";

const membersClienteFisico: IMembersClienteFisico = {
  showIdade(this: IClienteFisicoArgs) {
    const year = SuperDate.currentYear();
    return year - this?.dataNascimento?.ano;
  },
};

export { membersClienteFisico };
