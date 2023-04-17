import { gql } from "https://deno.land/x/graphql_tag@0.1.0/mod.ts";

const typeDefsRoot = gql`
  type TypeObj1Model {
  texto: String
  numero: Int
}

  type Query {
    respostaTypePrimitivo1: String
    respostaTypeObj1: TypeObj1Model
  }
`;

export { typeDefsRoot };
