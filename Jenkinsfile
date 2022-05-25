pipeline{
    agent any
    tools {
    'org.jenkinsci.plugins.docker.commons.tools.DockerTool' 'myDocker'
  }
    stages{
        agent {
            dockerfile true
        stage('helo'){
            steps{
                sh 'cat Dockerfile'
            }
        }
    }
}
}
