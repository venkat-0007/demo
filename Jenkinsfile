pipeline{
    agent any
    tools {
    'org.jenkinsci.plugins.docker.commons.tools.DockerTool' 'myDocker'
  }
    environment{
        DOCKERHUB_CREDENTIALS=credentials('docker-jenkins-token')
    }
    stages{
        stage('build'){
            steps{
                sh 'docker build -t venkatrobin/calc_v1:cv1.0 .'
            }
        }
        stage('docker_login_push'){
            steps{
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR -p $DOCKERHUB_CREDENTIALS_PSW'
                sh 'docker push venkatrobin/calc_v1:cv1.0'
                }
            }
        stage('display_image'){
            steps{
            sh 'docker images'
            }
        }
      }
}

