
pipeline {
    agent any 
    tools {
    'org.jenkinsci.plugins.docker.commons.tools.DockerTool' 'myDocker'
  }
    stages {
        stage('run') {
            steps {
                sh 'docker run hello-world:latest'
            }
        }
        stage('showcontainers'){
            steps{
                sh 'docker ps'
            }
        }
    }
}
