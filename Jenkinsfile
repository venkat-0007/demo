pipeline{
    tools {
    'org.jenkinsci.plugins.docker.commons.tools.DockerTool' 'myDocker'
  }
   agent {
      dockerfile true
    stages{
        stage('helo'){
            steps{
                sh 'cat Dockerfile'
            }
        }
    }
}
}
