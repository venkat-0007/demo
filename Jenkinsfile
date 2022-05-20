pipeline {
    agent any
    stages {
        stage('Docker build') {
            steps {
                withDocker(docker : 'myDocker'){
                    sh 'docker --version'
                }
            }
        }
    }
}