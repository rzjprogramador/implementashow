// deno-lint-ignore-file no-explicit-any no-unused-vars
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import { dois } from './dois.ts';

const sut = dois;

Deno.test({
  name: "TEST DO 2",
  only: false,
  fn() {
    expect(sut).toBe("dois module");
  },
});

export default 1;
