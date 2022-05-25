pipeline{
    agent any
    tools {
    'org.jenkinsci.plugins.docker.commons.tools.DockerTool' 'myDocker'
  }
    stages{
        stage('build'){
            steps{
                sh 'docker build -t venkatrobin/calc_v1:cv1.0 .'
            }
        }
        stage('tag'){
            steps{
                sh 'docker push venkatrobin/calc_v1:cv1.0'
            }
        }
    }
}
