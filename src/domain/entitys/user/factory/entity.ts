import { addPropsUser } from "../dynamic/addProps.ts";
import { UserArgs } from "../dynamic/contracts.ts";
import { membersProtoUser } from "../dynamic/members.ts";

const userFactoryByArgs = (u: UserArgs) => {
  const prototype = Object.create(membersProtoUser);
  const newCore = { ...prototype, ...u };
  return newCore;
};

export const createEntityUser = (f: UserArgs) => {
  const protoCore = userFactoryByArgs(f);
  const addProps = { ...addPropsUser };
  const model = {
    ...protoCore,
    ...addProps,
  };
  return model;
};
