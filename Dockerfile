FROM openjdk:21-slim
RUN mkdir /app
WORKDIR /app
COPY ui/target/*.jar /app/app.jar
CMD ["java","-jar","/app/app.jar"]