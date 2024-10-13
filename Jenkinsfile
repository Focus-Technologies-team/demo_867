pipeline {
    agent { label 'agent1' }
    options {
        skipDefaultCheckout()
    }
    stages {
        stage('Build frontend') {
            steps {
                cleanWs()
                checkout scm
                script {
                    sh 'npm install'
                    sh 'npm run build'
                    sh 'cd dist'
                    sh 'cp -r * /home/focustechnologies/htdocs/focustechnologies.org'
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!!'
        }
        failure {
            echo 'Pipeline failed.'
        }
        always {
            cleanWs(cleanWhenNotBuilt: false, deleteDirs: true, notFailBuild: true)
            echo 'Pipeline finished.'
        }
    }
}
