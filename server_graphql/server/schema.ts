import { resolversRoot } from "../root_routes/root_resolvers.ts";
import { typeDefsRoot } from "../root_routes/root_typedefs.ts";

const typeDefs = typeDefsRoot;
const resolvers = resolversRoot;

export { resolvers, typeDefs };
