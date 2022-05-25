
pipeline {
    agent {
        dockerfile true
    }
    tools {
    'org.jenkinsci.plugins.docker.commons.tools.DockerTool' 'myDocker'
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
