pipeline {

    environment {
        TARGET_IMAGE_NAME = 'nomImageDocker'
        REGISTRY = "L'id d'identification du credentials concerné"
        REGISTRY_LINK = 'lien du git de destination'
    }

    agent any

    stages {
        stage('BUILD') {
            agent {
                docker { image "image docker pour fournir les éléments" }
            }
            steps {
                //Mettre ici l'ordre de build genre npm build.
            }
            steps {
                //TODO METTRE ICI Le lancement des tests (npm test par exemple)
            }
        }
        stage('DOCKER-BUILD') {
            steps {
                script {
                    dockerImage = docker.build("${TARGET_IMAGE_NAME}")
                }
            }
        }
        stage('DOCKER-PUSH') {
            steps {
                script {
                    docker.withCredentials(''+env.REGISTRY_LINK, ''+env.REGISTRY);
                    dockerImage.push(''+${BUILD_NUMBER})
                    dockerImage.push('latest');
                }
            }
        }
    }
}