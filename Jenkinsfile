pipeline{
    agent {
        dockerfile true
    }
    tools {
    'org.jenkinsci.plugins.docker.commons.tools.DockerTool' 'myDocker'
  }
    stages{
        stage('helo'){
            steps{
                sh 'cat Dockerfile'
            }
        }
    }
}
