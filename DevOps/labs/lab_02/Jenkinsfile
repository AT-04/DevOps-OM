pipeline {
    agent any
    
    stages {
        stage('Commit') {
            steps {
                git 'https://github.com/OvidioMiranda/tz-rest-api'
                sh './gradlew clean assemble'
            }
        }
        stage('Test') {
            steps {
                sh './gradlew clean check'
            }
        }
        stage('Package') {
            steps {
                sh './gradlew clean shadowJar'
            }
        }
    }
}
