pipeline {
    agent any
    tools {
    'org.jenkinsci.plugins.docker.commons.tools.DockerTool' 'myDocker'
  }
    stages {
        stage('sample') {
            steps {
                sh 'docker run hello-world'
            }
        }
    }
}
