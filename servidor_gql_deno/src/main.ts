import { serverGraphql } from "./servers/graphql/_server.graphql.ts";

const main = async () => {
  const startServerGraphql = await serverGraphql();
  return startServerGraphql;
};

main();
