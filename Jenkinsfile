pipeline {
    agent {
        docker { image 'centos/nodejs-6-centos7:latest' }
    }
    stages {
        stage('Build') {
            steps {
                sh 'node ./script.js'
            }
        }
    }
}