pipeline {
    agent {
        docker { image 'nodejscn/node:lastest' }
    }
    stages {
        stage('Build') {
            steps {
                sh 'node ./script.js'
            }
        }
    }
}