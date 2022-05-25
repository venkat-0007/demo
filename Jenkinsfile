
pipeline {
    tools {
    'org.jenkinsci.plugins.docker.commons.tools.DockerTool' 'myDocker'
  }
    agent {
        dockerfile true
    }
    stages {
        stage('run') {
            steps {
                sh 'cat Dockerfile'
            }
        }
        stage('showcontainers'){
            steps{
                sh 'docker ps'
            }
        }
    }
}
