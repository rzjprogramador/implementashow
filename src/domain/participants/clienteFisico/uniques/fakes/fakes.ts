import { IClienteFisicoArgs } from "../../mod.ts";

// -- Para uso nos tests da entidade e no seed --
type FakeArgsClienteFisico = {
  OK: {
    one: IClienteFisicoArgs,
    two: IClienteFisicoArgs
  },
  FAIL: {
    one: IClienteFisicoArgs,
    two: IClienteFisicoArgs
  },
}

const fakesArgsClienteFisico: FakeArgsClienteFisico = {
  OK: {
    one: {
      primeiroNome: "onename",
      sobrenome: "one sobrenome",
      email: "one.email@gmail.com",
      dataNascimento: {
        dia: 1,
        mes: 1,
        ano: 1970,
      },
      tipoUser: "Fisico",
      endereco: {
        cep: "08070140",
        longadouro: "one rua 1",
        numero: "1",
        complemento: "any complemento",
        cidade: {
          nome: "Sao Paulo",
          uf: "SP",
        },
      },
    },// one-Ok

    two: {
      primeiroNome: "twoname",
      sobrenome: "two sobrenome",
      email: "two.email@gmail.com",
      dataNascimento: {
        dia: 1,
        mes: 1,
        ano: 1977,
      },
      tipoUser: "Fisico",
      endereco: {
        cep: "08070140",
        longadouro: "any rua one",
        numero: "1",
        complemento: "any complemento",
        cidade: {
          nome: "Sao Paulo",
          uf: "SP",
        },
      },
    }, // two-OK
  },// OK

  FAIL: {
    one: {
      primeiroNome: "o",
      sobrenome: "FAIL.one sobrenome",
      email: "one.email@gmail.com",
      dataNascimento: {
        dia: 22,
        mes: 1,
        ano: 1977,
      },
      tipoUser: "Fisico",
      endereco: {
        cep: "08070140",
        longadouro: "any rua one",
        numero: "1",
        complemento: "any complemento",
        cidade: {
          nome: "Sao Paulo",
          uf: "SP",
        },
      },
    }, // one-fail

    two: {
      primeiroNome: "aaaaaaaaaabbbbbbbbbb21",
      sobrenome: "any sobrenome two",
      email: "any_two-email@gmail.com",
      dataNascimento: {
        dia: 1,
        mes: 1,
        ano: 1970,
      },
      tipoUser: "Fisico",
      endereco: {
        cep: "08070140",
        longadouro: "any rua two",
        numero: "1",
        complemento: "any complemento",
        cidade: {
          nome: "Sao Paulo",
          uf: "SP",
        },
      },
    }, // two-FAIL
  }// FAIL
}

/* -- Para uso no Seed -- */
type IFakerIDClienteFisico = { one: string; two: string };

const fakerIDClienteFisico: IFakerIDClienteFisico = {
  one: "1",
  two: "2",
};

// -- Disponibilizar --
export {
  fakerIDClienteFisico,
  fakesArgsClienteFisico,
};

export type { IFakerIDClienteFisico };
