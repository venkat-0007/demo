pipeline { 
    agent any
    stages {
        stage('Build') { 
            steps { 
                sh 'python hlo.py'
                echo "python execution" 
            }
        }
    }
}