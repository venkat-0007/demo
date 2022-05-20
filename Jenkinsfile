pipeline { 
    agent any
    stages {
        stage('Build') { 
            steps { 
                sh 'python3 hlo.py'
                echo "python execution" 
            }
        }
    }
}