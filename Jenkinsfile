pipeline {

    environment {
        TARGET_IMAGE_NAME = 'nomImageDocker'
        REGISTRY = "L'id d'identification du credentials concerné"
        BUILD_ENV_IMAGE = "Image docker pour l'environnement à la build. Exemple : node:1.15.2 pour build un server node"
        REGISTRY_LINK = 'lien du git de destination'
    }

    agent {
        docker { image BUILD_ENV_IMAGE }
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
                dockerImage = docker.build(TARGET_IMAGE_NAME)
            }
        }
        stage('DOCKER-PUSH') {
            steps {
                docker.withCredentials(''+REGISTRY_LINK, ''+REGISTRY);
                docker.push(''+${BUILD_NUMBER})
                docker.push('latest');
            }
        }
    }
}