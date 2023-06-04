import { ImkeLoggPersonModel, ImkeLoggUserType } from "@depsExternals";

const logUserRepositoryProduction: ImkeLoggUserType = {
  items: [],

  async create(props: ImkeLoggPersonModel) {
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

// useLib - todo: problemaType
