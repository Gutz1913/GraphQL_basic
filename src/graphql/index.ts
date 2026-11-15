import fs from 'fs';
import path from 'path';
import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';

// Leemos el archivo .graphql de forma nativa y segura como texto plano
const typeDefs = fs.readFileSync(
  path.join(__dirname, 'schemas', 'schema.graphql'),
  'utf-8'
);

// Creamos y exportamos el esquema ejecutable
export const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers: {}, // Los resolvers los agregaremos en la siguiente clase
});