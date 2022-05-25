pipeline{
    agent any
    environment {
        DOCKERHUB_CREDENTIALS=('docker-login')
    }
    tools {
    'org.jenkinsci.plugins.docker.commons.tools.DockerTool' 'myDocker'
  }
    stages{
        stage('build'){
            steps{
                sh 'docker build -t venkatrobin/calc_v1:cv1.0 .'
            }
        }
        stage('docker_login'){
            steps{
                sh 'docker login -u $DOCKER_USER -p $DOCKER_PASSWORD'
            }
        }
    }
}
