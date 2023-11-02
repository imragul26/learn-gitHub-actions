FROM openjdk:11
EXPOSE 8080
ADD target/learn-github-actions.jar learn-github-actions.jar
ENTRYPOINT ["java","-jar","/learn-github-actions.jar"]
