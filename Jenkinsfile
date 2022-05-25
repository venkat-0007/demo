pipeline{
    agent any
    tools {
    'org.jenkinsci.plugins.docker.commons.tools.DockerTool' 'myDocker'
  }
    stages{
        stage('helo'){
            steps{
                sh 'docker build -t calc_v1 .'
            }
        }
}
}
