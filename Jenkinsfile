pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/your-repo/your-project.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Smoke Tests') {
            steps {
                sh 'npm run test:cucumber:smoke'
            }
        }

        stage('Run Regression Tests') {
            steps {
                sh 'npm run test:cucumber:regression'
            }
        }

        stage('Generate Report') {
            steps {
                sh 'npm run report'
                publishHTML(target: [
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: '.',
                    reportFiles: 'cucumber-report.html',
                    reportName: 'Cucumber Report'
                ])
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'cucumber-report.html', allowEmptyArchive: true
        }
    }
}