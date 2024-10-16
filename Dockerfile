FROM openjdk:21-jdk
RUN mkdir /app
WORKDIR /app
RUN mvn clean install
COPY core/target/*.jar /app/app.jar
CMD ["java","-jar","/app/app.jar"]