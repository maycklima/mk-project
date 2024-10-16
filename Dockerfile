FROM openjdk:21-jdk
FROM maven:3.9.4-eclipse-temurin-21 AS build

RUN mkdir /app
WORKDIR /app

COPY . .

RUN mvn clean install

COPY COPY --from=build /app/core/target/*.jar /app/app.jar
CMD ["java","-jar","/app/app.jar"]
