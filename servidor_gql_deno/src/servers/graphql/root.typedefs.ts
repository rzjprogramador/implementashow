import { gql } from "https://deno.land/x/graphql_tag@0.1.0/mod.ts";

const typeDefsRoot = gql`
  type Query {
    resposta1: String
  }
`;

export { typeDefsRoot };
