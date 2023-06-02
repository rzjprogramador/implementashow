// deno-lint-ignore-file no-explicit-any no-unused-vars
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

// import { tres } from "@ttt";
import { tres } from "./tres.ts";

const sut = tres;

Deno.test({
  name: "TEST DO 3",
  only: false,
  fn() {
    expect(sut).toBe("tres module");
  },
});

export default 1;

// 
