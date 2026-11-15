import express from "express";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import { schema } from "./graphql";

async function startServer() {
  const app = express();

  // 1. Instanciamos Apollo Server con nuestro esquema
  const server = new ApolloServer({
    schema,
    introspection: true, // Mantiene la introspección activa tal como lo hace el profe
  });

  // 2. Iniciamos el servidor de Apollo
  await server.start();

  // 3. Configuramos los middlewares de Express y la ruta /graphql
  app.use(
    "/graphql",
    cors<cors.CorsRequest>(),
    express.json(),
    expressMiddleware(server)
  );

  // 4. Levantamos el servidor Express en el puerto 4000
  app.listen(4000, () => {
    console.log(`🚀 Server ready at http://localhost:4000/graphql`);
  });
}

// Ejecutamos la función de arranque
startServer();