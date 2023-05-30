// // deno-lint-ignore-file no-explicit-any no-unused-vars
// import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

// import { Log } from "@mods";

// const sut = (d: any) => d;
// const inputSut = "foo";

// Deno.test({
//   name: "deve retornar ",
//   only: true,
//   async fn() {
//     // const input = inputSut;
//     // const where = await sut(input);
//     // const assertion = undefined;
//     // Log('  >>>>>>> ', where)
//     // expect(where).toEqual(assertion);
//   },
// });

// Deno.test("[ deve retornar ", () => {
//   const input = inputSut;
//   const where = sut(input);
//   const assertion: any = "foo";
//   // Log('  >>>>>>> ', where)
//   expect(where).toEqual(assertion);
// });

// /* TESTER_CONSOLE ************************************* */

// async function tester_() {
//   const res = await sut(inputSut);
//   res.then((d) => Log(d));
//   // res.then(d => Log(d))
// }
// tester_();

// /*
//  * PARA RODAR ONLY SÓ ESTE TEST ```deno test <caminhoDesteArquivo>```
//  */

// export default 1;
