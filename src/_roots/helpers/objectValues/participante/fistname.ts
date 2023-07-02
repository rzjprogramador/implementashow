import { minString, maxString } from "../../../deps/replicas.remote.deps.ts";

export const FirstName = async (arg: string) => minString(await maxString(arg))