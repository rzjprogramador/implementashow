// deno-lint-ignore-file no-unused-vars
import { repositoryTypeO1Tester } from "../../repository/repository.tester.typeO1.ts";
import { TypeO1Model } from "../editables/contract/contracts.typeO1.ts";
import { prepareCreateTypeO1 } from "../editables/prepare/b.prepare.typeO1.ts";

const saveCreateTypeO1 = (d: TypeO1Model): TypeO1Model => {
  const prepared = d;
  const saved = prepareCreateTypeO1(prepared);
  return repositoryTypeO1Tester.create(saved);
};
export { saveCreateTypeO1 };
