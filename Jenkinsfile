pipeline {
    agent any
    tools {
    'org.jenkinsci.plugins.docker.commons.tools.DockerTool' 'myDocker'
  }
    stages {
        stage('pull') {
            steps {
                sh 'docker pull venkatrobin/flask-demo:v1'
            }
        }
        stage('run'){
            steps{
                sh 'docker run -p 8082:5000 -d --name calc_v1 venkatrobin/flask-demo:v1'
            }
        }
    }
}
