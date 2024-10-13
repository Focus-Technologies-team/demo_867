pipeline {
    agent { label 'agent1' }
    // options {
    //     skipDefaultCheckout()
    // }
    stages {
        stage('Build frontend') {
            steps {
                // cleanWs()
                // checkout scm
                script {
                    sh '''
                    #!/bin/bash
                    export NVM_DIR="$HOME/.nvm"
                    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
                    npm --version  # Check npm version
                '''
                // sh 'npm install'
                // sh 'npm run build'
                // // Check if 'dist' exists and copy files
                // sh '''
                // if [ -d "dist" ]; then
                //     cp -r dist/* /var/www/focustechnologies
                // else
                //     echo "Build failed: dist directory not found"
                //     exit 1
                // fi
                // '''
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
    // always {
    //     cleanWs(cleanWhenNotBuilt: false, deleteDirs: true, notFailBuild: true)
    //     echo 'Pipeline finished.'
    // }
    }
}
