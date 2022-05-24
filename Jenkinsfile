pipeline {
    agent any
    tools {
    'org.jenkinsci.plugins.docker.commons.tools.DockerTool' 'myDocker'
  }
    stages {
        stage('pull') {
            steps {
                sh 'docker pull venkatrobin/flask-demo:v1'
            }
        }
        stage('showcontainers'){
            steps{
                sh 'docker ps'
            }
        }
    }
}
