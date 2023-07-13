import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { CreateClienteFisicoCasePipeArgs } from "./create.usecase.ts";

const sut = await CreateClienteFisicoCasePipeArgs

const clientefisicoFakeOk = {
  primeiroNome: 'Jon',
  sobrenome: 'Doe',
  anoNascimento: 1970,
}

Deno.test({
  name: "[ FAIL ] deve retornar mensagem de erro se o campo primeiroNome for passado com menos de 2 letras.",
  only: false,
  async fn() {
    const inputTarget = { ...clientefisicoFakeOk, primeiroNome: 'J' }

    const getError = async () => {
      try {
        return await sut(inputTarget)
      }
      catch (err: any) {
        return err.message
      }
    }

    expect(await getError()).toBe('Ops... as letras não podem ser menor que 2');
  },

});


export default 1;