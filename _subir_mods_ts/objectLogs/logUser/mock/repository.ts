import { ILogPerson, LogUserType } from "../contracts.ts";

export const logUserRepositoryMock: LogUserType = {
  items: [],

  create(props: ILogPerson) {
    if (props) {
      this?.items?.push(props)!;
      return true;
    } else {
      return false;
    }
  },

  list() {
    return this?.items!;
  },
};
