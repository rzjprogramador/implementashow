/*
*  FONTE UNICA DEPS REMOTE
* Replicas -> replicar nos mod.ts de cada entidade para uso.
* ferramentas: se for renomear a replica renomeie o symbol após a clausula <as>
*/

// logConsole
export {
  log as Log,
  pipeGeneric as PipeGeneric
} from "/home/rzj/..gitAll/SuperLibsTS/main.ts";

// superDate
export { superDateTS as SuperDateTS } from "/home/rzj/..gitAll/SuperLibsTS/main.ts";

// -- ObjectValues - Remote --
import { makerObjectValues } from "/home/rzj/..gitAll/SuperValidades/main.ts";
// -- cada objectValue -->
export const FirstnamePerson = await makerObjectValues.makerFirstnamePerson
