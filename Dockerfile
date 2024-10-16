FROM openjdk:21-jdk
FROM maven:3.9.4-eclipse-temurin-21 AS build

RUN mkdir /app
WORKDIR /app

COPY . .

RUN mvn clean install

COPY core-0.0.1-SNAPSHOT.jar /app/app.jar
CMD ["java","-jar","/app/app.jar"]
