# Usar a imagem Maven com OpenJDK 21 para o processo de build
FROM maven:3.9.4-eclipse-temurin-21 AS build

# Cria o diretório de trabalho para o build
WORKDIR /app

# Copia todo o código-fonte para o diretório de trabalho
COPY . .

# Executa o Maven para compilar o projeto e gerar o arquivo .jar
RUN mvn clean install

COPY --from=build /app/core/target/*.jar /app/app.jar
CMD ["java","-jar","/app/app.jar"]
