
pipeline {
    tools {
    'org.jenkinsci.plugins.docker.commons.tools.DockerTool' 'myDocker'
  }
    stages {
        stage ('Build') {
        agent {
            dockerfile {
            filename 'Dockerfile'
        }
        stage('showcontainers'){
            steps{
                sh 'docker ps'
            }
        }
    }
}
}
