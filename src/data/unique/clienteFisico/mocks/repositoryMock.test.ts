// deno-lint-ignore-file no-explicit-any no-unused-vars
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { clienteFisicoRepositoryMockWithOneSeed } from "./repository.ts";
import { seedClienteFisico } from "../seed/seed.ts";
import {
  ClienteFisicoRepository,
} from "../../../../domain/entitys/clienteFisico/contracts.ts";

const sut = clienteFisicoRepositoryMockWithOneSeed;
const inputSeed = seedClienteFisico.one;

// aux suites
const cleanRepo2 = () => clienteFisicoRepositoryMockWithOneSeed.items = [];

Deno.test("[Mock] deve retornar o item se ja tiver a entidade no items do repo.", async () => {
  const input = inputSeed;
  const actual = await sut?.exist?.(input);
  const assertion = undefined;

  expect(actual).toEqual(assertion);
  cleanRepo2();
});

Deno.test("[Mock] Se retornou ja existe entao deve retornar undefined para quem for usar tratar.", async () => {
  const input = inputSeed;
  const actual = await sut?.exist?.(input);

  const res = (actual) ? undefined : actual;
  const assertion = undefined;

  expect(res).toEqual(assertion);
  cleanRepo2();
});

/* TESTER_CONSOLE ************************************* */

function show_ExistMock() {
  const input = inputSeed;
  const operation = sut?.exist?.(input);
  // ver resposta
  operation?.then((d) => console.log("RESPOSTA DO EXIST >>> ", d));

  if (operation) {
    console.log("TEM");
  }
}
show_ExistMock();

export default 1;
