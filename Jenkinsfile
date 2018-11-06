pipeline {
    agent { docker { image 'node:6.3' } }
     environment {
        DISABLE_AUTH = 'true'
        DB_ENGINE    = 'sqlite'
    }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
        stage('test') {
            steps {
                sh './check_version.sh'
            }
        }
        stage('Human Approval') {
            steps {
                input "Can the deployment be started ?"
            }
        }
    }
    post {
        always {
            echo 'This will always run'
            mail to: 'vinay.thallam@jifflenow.com',
             subject: "Finished Pipeline: ${currentBuild.fullDisplayName}",
             body: "Hurray !!! Success"
        }
        success {
            echo 'This will run only if successful'
        }
        failure {
            echo 'This will run only if failed'
        }
        unstable {
            echo 'This will run only if the run was marked as unstable'
        }
        changed {
            echo 'This will run only if the state of the Pipeline has changed'
            echo 'For example, if the Pipeline was previously failing but is now successful'
        }
    }
}
