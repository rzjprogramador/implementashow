import { minString, maxString } from "../../../deps/replicas.deps.ts";

export const FirstName = async (arg: string) => minString(await maxString(arg))