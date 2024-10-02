FROM openjdk:21-slim
COPY backend/target/*.jar /app.jar
CMD ["java","-jar","/app.jar"]