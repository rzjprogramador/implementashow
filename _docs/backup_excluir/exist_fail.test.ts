// // deno-lint-ignore-file no-explicit-any no-unused-vars
// import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

// const sutFeat = await featExistClienteFisico;
// const inputFAIL = seedClienteFisico?.one;

// TODO: O FAIL NAO VOU CONSEGUIR FAZER AQUI PORQUE ESTOU TESTANDO O REPO SEM NADA SALVO NELE POR ISTO NAO ESTOURA O ERRO.

// const fnExistFAIL = async () => {
//   try {
//     return await sut(inputFAIL);
//   } catch (err: any) {
//     return await err.message.toString();
//   }
// };

// Deno.test("deve retornar o erro com feddback de ja cadastrado ao passar item que ja existe", async () => {
//   // expect(await fnExistFAIL()).toBeFalsy();
//   expect(await fnExistFAIL()).toEqual(Error(feedbacks.alreadyExists));
// });

// import { clienteFisicoRepositoryMockWithOneSeed } from "./repository.ts";
// import { seedClienteFisico } from "@seedsClienteFisico";
// import {
//   ClienteFisicoRepository,
// } from "../../../../domain/entitys/clienteFisico/contracts.ts";

// const sut = clienteFisicoRepositoryMockWithOneSeed;
// const inputSeed = seedClienteFisico.one;

// // aux suites
// const cleanRepo2 = () => clienteFisicoRepositoryMockWithOneSeed.items = [];

// Deno.test("[Mock] deve retornar o item se ja tiver a entidade no items do repo.", async () => {
//   const input = inputSeed;
//   const actual = await sut?.exist?.(input);
//   const assertion = undefined;

//   expect(actual).toEqual(assertion);
//   cleanRepo2();
// });

// Deno.test("[Mock] Se retornou ja existe entao deve retornar undefined para quem for usar tratar.", async () => {
//   const input = inputSeed;
//   const actual = await sut?.exist?.(input);

//   const res = (actual) ? undefined : actual;
//   const assertion = undefined;

//   expect(res).toEqual(assertion);
//   cleanRepo2();
// });

// /* TESTER_Log ************************************* */

// function show_ExistMock() {
//   const input = inputSeed;
//   const operation = sut?.exist?.(input);
//   // ver resposta
//   operation?.then((d) => Log.log("RESPOSTA DO EXIST >>> ", d));

//   if (operation) {
//     Log.log("TEM");
//   }
// }
// show_ExistMock();

// async function show_existClienteFisicoFAIL() {
//   Log.log(
//     "TEM QUE VOLTAR O FEED DE ERRO >>> ",
//     await fnExistFAIL(),
//   );
// }
// show_existClienteFisicoFAIL(); // ok ta voltando o feed de erro.

// export default 1;
