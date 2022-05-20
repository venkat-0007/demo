pipeline {
    agent any
    stages {
        stage('Docker') {
            def dockerHome = tool 'Docker'
            env.PATH = "${dockerHome}/bin:${env.PATH}"
            steps {
                sh 'docker --version'
            }
        }
    }
}