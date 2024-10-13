pipeline {
    agent { label 'agent1' }
    options {
        skipDefaultCheckout()
    }
    stages {
        stage('Build frontend') {
            cleanWs()
            checkout scm
            steps {
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
