// deno-lint-ignore-file no-explicit-any no-unused-vars
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { CreateClienteFisicoController, seedClienteFisicoONE } from "@clienteFisico";
import { ExceptionsMessages } from "@replicasLocal"


const sut = CreateClienteFisicoController
const argSeedONE = seedClienteFisicoONE

Deno.test("[ deve retornar feedback faça outra ação de conter a prop. ID { #investigacaoJaExiste }", async () => {
  const action = await sut.execute(argSeedONE);
  const assertion: any = ExceptionsMessages.existID
  // Log('  >>>>>>> ', where)
  expect(action).toEqual(assertion);
});

/* TESTER_CONSOLE ************************************* */

// sut.execute(argSeedONE).catch((d) => console.log(d))

export default 1;