import { logUserRepositoryProduction } from "../../../src/frameworks/repository/log_user/repository.ts";
import { repositoryLogUserMock } from "./main.test.ts";

export const repositoryInUselogUser = {
  production: logUserRepositoryProduction,
  mock: repositoryLogUserMock,
}