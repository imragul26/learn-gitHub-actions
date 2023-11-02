FROM openjdk:11
VOLUME /tmp
EXPOSE 8080
ADD alearn-github-actions.jar
ENTRYPOINT ["java","-jar","/learn-github-actions.jar"]