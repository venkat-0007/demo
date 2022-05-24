pipeline {
    agent any   
    stages {
        stage('pull') {
            steps {
                sh 'docker pull venkatrobin/flask-demo:v1'
            }
        }
        stage('showcontainers'){
            steps{
                sh 'docker ps'
            }
        }
    }
}
