pipeline {
    agent {  
        label 'node01'  
    } 
    environment {
        IMAGE_NAME = 'vincekazerr/webapp' 
        KUBECONFIG = credentials('kubeconfig-creds')
    }
    stages {
        stage('Code Checkout') {
            steps {
                script {
                    echo "Cloning Repository or Pulling Latest Changes"
                }
                withCredentials([usernamePassword(credentialsId: 'github-creds', usernameVariable: 'GITHUB_USER', passwordVariable: 'GITHUB_TOKEN')]) {
                    sh '''
                    if [ ! -d "$HOME/legalloggers_project" ]; then
                        echo "Directory does not exist, cloning repository"
                        git clone https://$GITHUB_USER:$GITHUB_TOKEN@github.com/binskzir/legalloggers_project.git $HOME/legalloggers_project
                    else
                        echo "Pulling Latest Changes"
                        cd $HOME/legalloggers_project
                        git pull origin main
                    fi
                    '''
                }
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    echo "Building Docker Image"
                    image = docker.build("${IMAGE_NAME}:${env.BUILD_NUMBER}")
                }
            }
        }
    
        stage('Unit Test') {
              steps {
                  script {
                     def appContainer = docker.image("${IMAGE_NAME}:${env.BUILD_NUMBER}").run('-d -p 1234:3000')
                     sleep(5)
                     try {
                            timeout(time: 30, unit: 'SECONDS') {
                                waitUntil {
                                    script {
                                        def response = sh(script: 'curl -s -o /dev/null -w "%{http_code}" http://localhost:1234/health', returnStdout: true).trim()
                                        echo "Health check response: ${response}"
                                        return response == '200'
                                        }
                                    }
                                }
                             echo "Health check passed"
                         } catch (Exception e) {
                             error "Health check failed: ${e.message}"
                         } finally {
                             appContainer.stop()
                         }
                  }
              }
         }
        
        stage('Push Docker Image') {
            steps {
                script {
                    echo "Pushing Docker Image to Registry"
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub-creds') {
                        image.push("${env.BUILD_NUMBER}")
                        image.push("latest")
                    }
                }
            }
        }
        stage('Deploy to K8s') {
           steps {
                withCredentials([file(credentialsId: 'kubeconfig-creds', variable: 'KUBECONFIG')]) {
                    sh 'kubectl apply -f webapp-deployment-service.yaml -n webapp'
                }
            }
        }
        stage('Restart Deployment (After First Deploy)') {
            when {
                expression {
                    // Check if it's the first deployment (can be customized)
                    def isFirstDeployment = sh(script: 'kubectl get deployments -n webapp | grep webapp-deployment || true', returnStatus: true) != 0
                    return !isFirstDeployment
                }
            }
            steps {
                script {
                    echo "Restarting the deployment after the first deploy"
                    sh 'kubectl rollout restart deployment webapp-deployment -n webapp'
                }
            }
        }
    }
}
