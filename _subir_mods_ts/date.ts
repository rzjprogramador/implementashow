export const date = {
  dateNow: new Date("Mai 17 2023"),

  async currentYear() {
    return await this.dateNow.getFullYear();
  },
};
