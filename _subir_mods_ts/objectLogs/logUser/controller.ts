import { logUserRepositoryProduction } from "../../../src/frameworks/repository/log_user/repository.ts";
import { logUserRepositoryMock } from "./main.test.ts";

export const repositoryInUselogUser = {
  production: logUserRepositoryProduction,
  mock: logUserRepositoryMock,
}