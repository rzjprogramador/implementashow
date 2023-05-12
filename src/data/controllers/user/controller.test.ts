// deno-lint-ignore-file no-explicit-any no-unused-vars
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { createUser } from "../../../domain/entitys/user/useCases/user.ts";
import { UserArgs } from "../../contracts/user.ts";
import { userArgsFake } from "../../fakes/user/fake.ts";

function Log(...data: any[]): void {
  console.log(data);
}

type MakeSutTypes = (
  d: any,
) => { sut: any };

const makeSut: MakeSutTypes = (u: UserArgs) => {
  return {
    sut: createUser(u),
  };
};

Deno.test("[ Fail >> ... ] deve retornar ...", () => {
  const input = userArgsFake;
  const { sut } = makeSut(input);
  const resultExpected = userArgsFake;
  const actual = sut;
  // Log("LOG {{ SUT }} >>>  ", sut);

  expect(actual).toEqual(resultExpected);
});

/* TESTER_CONSOLE ************************************* */

function showUserCreate() {
  const { sut } = makeSut(userArgsFake);
  console.log(sut);
}
showUserCreate();

export default 1;
