pipeline {

    environment {
        TARGETIMAGENAME = 'nomImageDocker'
        REGISTRY = 'METTRE LA REGISTRY ICI AVEC LE CREDENTIALS pour le repo de registry'
        BUILDENVIMAGE = 'node:latest'
    }

    agent {
        docker { image BUILDENVIMAGE }
    }
    stages {
        stage('BUILD') {
            steps {
                //Mettre ici l'ordre de build genre npm build.
            }
        }
        stage('TESTS') {
            steps {
                //TODO METTRE ICI Le lancement des tests (npm test par exemple)
            }
        }
        stage('DOCKER-BUILD') {
            steps {
                dockerImage = docker.build(IMAGENAME)
            }
        }
        stage('DOCKER-PUSH') {
            steps {
                docker.withCredentials(''+REGISTRY);
                docker.push(''+$BUILDVERSIONID)
                docker.push('latest');
            }
        }
    }
}