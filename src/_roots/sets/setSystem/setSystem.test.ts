
// deno-lint-ignore-file no-explicit-any no-unused-vars
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { setSystem } from '@replicasLocalGlobal'


const sut = setSystem


Deno.test({
  name: "deve retornar os valores definidos em setSystem",
  only: false,
  async fn() {
    expect(setSystem.Strings.one).toBe('1');
    expect(setSystem.Strings.two).toBe('2');
  },

});

export default 1;