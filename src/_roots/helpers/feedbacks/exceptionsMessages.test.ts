// deno-lint-ignore-file no-explicit-any no-unused-vars
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import { ExceptionsMessages } from "@replicasLocalGlobal"

const sut = ExceptionsMessages

Deno.test({
  name: "deve retornar os valores corretos das messages.",
  only: false,
  async fn() {
    expect(sut.feedbackExistID()).toEqual(
      {
        cause: `Já contém um registro ID, não pode recriar a entidade.`,
        toCorrect: `Faça outra operação`,
      }
    );
  },

});

export default 1;

