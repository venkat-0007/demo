pipeline { 
    agent {
        dockerfile true
    }
    stages {
        stage('Build') { 
            steps { 
                sh 'docker --version'
                echo "docker version display stage" 
            }
        }
    }
}