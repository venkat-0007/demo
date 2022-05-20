pipeline {
    agent any
    stages {
        stage('Initialize'){
        def dockerHome = tool 'Docker'
        env.PATH = "${dockerHome}/bin:${env.PATH}"
    }
        stage('Docker') {
            steps {
                sh 'docker --version'
            }
        }
    }
}