# Usar a imagem Maven com OpenJDK 21 para o processo de build
FROM maven:3.9.4-eclipse-temurin-21 AS build

# Cria o diretório de trabalho para o build
WORKDIR /app

# Copia todo o código-fonte para o diretório de trabalho
COPY . .

# Executa o Maven para compilar o projeto e gerar o arquivo .jar
RUN mvn clean install

# Usar uma imagem leve do OpenJDK 21 para rodar a aplicação
FROM openjdk:21-jdk

# Define o diretório de trabalho para a execução da aplicação
WORKDIR /app

# Copia o .jar gerado da fase de build
COPY --from=build /app/core/target/*.jar /app/app.jar

# Expor a porta 8080
EXPOSE 8080

# Comando para rodar a aplicação
CMD ["java", "-jar", "/app/app.jar"]