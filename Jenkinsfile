pipeline{
    agent any
    tools {
    'org.jenkinsci.plugins.docker.commons.tools.DockerTool' 'myDocker'
  }
    stages{
        stage('build'){
            steps{
                sh 'docker build -t calc_v1 .'
            }
        }
        stage('push'){
            steps{
                sh 'docker push venkatrobin/calc_v1:1.0'
            }
        }
    }
}
