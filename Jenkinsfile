pipeline { 
    agent any 
    stages {
        stage('Build') { 
            steps { 
                sh 'docker --version'
                echo "docker version display stage" 
            }
        }
        stage('Test'){
            steps {
                echo "test stage" 
            }
        }
        stage('Deploy') {
            steps {
                echo "deploy stage"
            }
        }
    }
}