// import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

// import { controllerCreateClienteFisico } from "./controller.ts";
// import { fakerListClienteFisicoArgsOK } from "@clienteFisico";
// import { mkeLog } from "@externals";

// const sut = controllerCreateClienteFisico;
// const inputOK = fakerListClienteFisicoArgsOK[0];

// Deno.test("deve retornar a criacao OK do model user_fisico com todas as propriedades.", async () => {
//   const input = inputOK;
//   const actual = await sut(input);

//   expect(actual.statusCode).toBe(200);
//   expect(actual.data).toHaveProperty("ID");
//   expect(actual.data).toHaveProperty("primeiroNome");
//   expect(actual.data).toHaveProperty("sobrenome");
//   expect(actual.data).toHaveProperty("email");
//   expect(actual.data).toHaveProperty("dataNascimento");
//   expect(actual.data).toHaveProperty("tipoUser");
//   expect(actual.data).toHaveProperty("tipoUser");
//   expect(actual.data).toHaveProperty("endereco");
// });

// mkeLog("ola");

// /* TESTER_CONSOLE ************************************* */

// // function show_controllerCreateClienteFisico() {
// //   sut(inputOK)
// //     .then((d) => mkeLog(d))
// //     .catch((err) => mkeLog(err.message));
// // }
// // show_controllerCreateClienteFisico();

// export default 1;
