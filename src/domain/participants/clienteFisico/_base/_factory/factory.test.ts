// import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

// import { Log } from '@replicasRemote'
// import {
//   ArgsClienteFisico, fakeBaseOkArgsClienteFisicoONE, generatorFactoryClienteFisico,
// } from '@clienteFisico'

// const sut = generatorFactoryClienteFisico
// const inputSutFakeBaseOK: ArgsClienteFisico = fakeBaseOkArgsClienteFisicoONE

// Deno.test({
//   name: "[ Ok.Args ] deve conter as props com os valores.",
//   only: false,
//   async fn() {
//     const action = await sut(inputSutFakeBaseOK);
//     // Log('  >>>>>>> ', action)
//     expect(action.primeiroNome).toBe('any');
//   },

// });

// Deno.test({
//   name: "[ Ok ] deve conter no prototype o membro showIdade().",
//   only: false,
//   async fn() {
//     const action = await sut(inputSutFakeBaseOK);
//     // action.showIdade()
//     // Log('  >>>>>>> ', action)
//     expect(action.showIdade()).toBeTruthy();
//   },

// });

// // Deno.test({
// //   name: "[ OK.members ] deve conter o membro { showIdade () } herdado na entidade final.",
// //   only: false,
// //   async fn() {
// //     const where = await sut(inputSutFakeBaseOK);
// //     Log('RESULT MEMBRO SHOW IDADE() >>>>> ', where.showIdade())
// //     expect(where.showIdade).toBeDefined()
// //     expect(where.showIdade).toBeInstanceOf(Function)
// //     expect(typeof where.showIdade == 'function').toBeTruthy()
// //   },

// // });

// // /* TESTER_CONSOLE ************************************* */

// // viewConsole : tester_Show_CreateEntityArgs
// // sut(inputSutOk_one).then((d: any) => Log(d))

// sut(inputSutFakeBaseOK).then((d: any) => Log(d))

// const instance1 = sut(inputSutFakeBaseOK).then((d: any) => d)
// instance1.then((d: any) => Log(d.showIdade()))

// export default 1;
