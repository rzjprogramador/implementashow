import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";
import { setSystem } from '@globalEntitys'
import { setsClienteFisico } from "./sets.ts";


const sut = setsClienteFisico

Deno.test("deve retornar os valores definidos no sets.", () => {
  const two = setSystem.Numbers.two

  expect(sut.objectValues.firstname.setMin).toEqual(two);
  expect(sut?.objectValues?.firstname?.feedback?.(two)).toEqual(`Ops... as letras não podem ser menor que ${two}`);
});

export default 1;