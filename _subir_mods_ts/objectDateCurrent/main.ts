// para usar chame as props ou metodos que ja dara a data congelada util apra testes em 17-05-2023

export const objectDateCurrent = {
  dateNow: new Date("Mai 17 2023"),

  async currentYear() {
    return await this.dateNow.getFullYear();
  },
};
