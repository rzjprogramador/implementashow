// // deno-lint-ignore-file no-explicit-any
// import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

// import { Log } from "@replicasRemote";
// import { caseCreateClienteFisico, ArgsClienteFisico } from "@clienteFisico";

// const sut = caseCreateClienteFisico

// const inputFAIL: ArgsClienteFisico = {
//   primeiroNome: "f",
//   sobrenome: "one sobrenome",
//   email: "one.email@gmail.com",
//   dataNascimento: {
//     dia: 1,
//     mes: 1,
//     ano: 1970,
//   },
//   tipoUser: "Fisico",
//   endereco: {
//     cep: "08070140",
//     longadouro: "one rua 1",
//     numero: "1",
//     complemento: "any complemento",
//     cidade: {
//       nome: "Sao Paulo",
//       uf: "SP",
//     },
//   },
// }

// Deno.test({
//   name: "deve resolver em novo Erro ao receber fora do setado o campo primeiroNome",
//   only: false,
//   async fn() {
//     async function tester() {
//       try {
//         return await sut(inputFAIL)
//       }
//       catch (err: any) {
//         return await err.message
//       }
//     }
//     expect(await tester()).toEqual('Ops... as letras não podem ser menor que 2')
//   },

// });


// export default 1;
