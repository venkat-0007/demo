pipeline {
    agent any
    stages {
        stage('Docker build') {
            steps {
                sh 'docker build -t hello-world:latest .'
            }
        }
    }
}