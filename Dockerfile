FROM openjdk:11
VOLUME /tmp
EXPOSE 8080
ARG JAR_FILE=target/learn-github-actions.jar
ADD ${JAR_FILE} alearn-github-actions.jar
ENTRYPOINT ["java","-jar","/learn-github-actions.jar"]