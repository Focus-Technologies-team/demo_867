pipeline {
    agent { label 'agent1' }
    options {
        skipDefaultCheckout()
    }
    stages {
        stage('Install Node.js and npm') {
            steps {
                script {
                    sh '''
                        #!/bin/bash
                        # Update package index
                        apt-get update

                        # Install Node.js and npm
                        apt-get install -y nodejs npm
                    '''
                }
            }
        }
        stage('Build frontend') {
            steps {
                cleanWs()
                checkout scm
                script {
                    sh '''
                        #!/bin/bash
                        # Update package index
                        apt-get update

                        # Install required dependencies
                        apt-get install -y apt-transport-https curl gnupg

                        # Install NodeSource Node.js repository
                        curl -fsSL https://deb.nodesource.com/setup_20.x | bash -

                        # Install Node.js and npm
                        apt-get install -y nodejs

                        # Verify installation
                        node --version
                        npm --version
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
        always {
            cleanWs(cleanWhenNotBuilt: false, deleteDirs: true, notFailBuild: true)
            echo 'Pipeline finished.'
        }
    }
}
