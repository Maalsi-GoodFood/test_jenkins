pipeline {
    agent {
        docker { image 'nodejs:lastest' }
    }
    stages {
        stage('Build') {
            steps {
                sh node ./script.js
            }
        }
    }
}