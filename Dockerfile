FROM openjdk:21-jdk
RUN mkdir /app
WORKDIR /app
COPY core/target/*.jar /app/app.jar
CMD ["java","-jar","/app/app.jar"]