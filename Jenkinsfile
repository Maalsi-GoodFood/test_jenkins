pipeline {

    environment {
        TARGET_IMAGE_NAME = 'nomImageDocker'
        REGISTRY = "L'id d'identification du credentials concerné"
        REGISTRY_LINK = 'lien du git de destination'
    }

    agent none

    stages {
        stage('TESTS') {
            agent {
                docker { image "image docker pour fournir les éléments" }
            }
            steps {
                //Mettre ici l'ordre de build genre npm build.
                //Mettre ici l'ordre de run
                //Mettre ici l'ordre de test
            }
        }
        stage('DOCKER-BUILD') {
            agent any
            steps {
                script {
                    dockerImage = docker.build(TARGET_IMAGE_NAME)
                }
            }
        }
        stage('DOCKER-PUSH') {
            agent any
            steps {
                script {
                    docker.withCredentials(''+REGISTRY_LINK, ''+REGISTRY);
                    dockerImage.push(''+${BUILD_NUMBER})
                    dockerImage.push('latest');
                }
            }
        }
    }
}