FROM openjdk:11
EXPOSE 8080
WORKDIR target/learn-github-actions.jar
ENTRYPOINT ["java","-jar","/learn-github-actions.jar"]
