import { serverGraphql } from "./server_graphql/server/_server.graphql.ts";

const main = async () => {
  const startServerGraphql = await serverGraphql();
  return startServerGraphql;
};

main();
