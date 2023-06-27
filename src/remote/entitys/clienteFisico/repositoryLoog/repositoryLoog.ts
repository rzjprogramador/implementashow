import { IMakeILoggPersonModel, IMakeILoggUserType } from "@externals";

const logUserRepositoryProduction: IMakeILoggUserType = {
  items: [],

  async create(props: IMakeILoggPersonModel) {
    if (props) {
      await this?.items?.push(props)!;
      return await props;
    } else {
      return await false;
    }
  },

  async list() {
    return await this?.items!;
  },
};

export { logUserRepositoryProduction };

