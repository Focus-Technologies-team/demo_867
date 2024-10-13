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
                        # Check if Node.js is already installed
                        if ! command -v node &> /dev/null; then
                            echo "Node.js not found. Installing..."
                            # Install Node.js (choose a method that suits your environment)
                            curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
                            apt-get install -y nodejs
                        else
                            echo "Node.js is already installed."
                        fi

                        # Check if npm is installed
                        if ! command -v npm &> /dev/null; then
                            echo "npm not found. Installing..."
                            apt-get install -y npm
                        else
                            echo "npm is already installed."
                        fi
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
                    npm --version || echo "NPM not found"
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
