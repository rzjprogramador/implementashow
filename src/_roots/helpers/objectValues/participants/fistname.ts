import { minString, maxString } from "@replicasRemote";

export const FirstName = async (arg: string) => minString(await maxString(arg))