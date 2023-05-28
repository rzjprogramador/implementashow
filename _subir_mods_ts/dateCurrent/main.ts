// para usar chame as props ou metodos que ja dara a data congelada util apra testes em 17-05-2023

export const objectDateCurrent = {
  dateNow: new Date("05/17/2023"),
  // dateNow: new Date("Mai 17 2023"),

  currentYear() {
    return this.dateNow.getFullYear();
  },
};

// todo: mudar nome para dateCurrent