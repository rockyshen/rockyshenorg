// Jenkins流水线文件

pipeline {
    agent any

    stages {
    // 由于已经在gitee的仓库中了，相当于已经拉取到代码了！
        stage('构建') {
            steps {
                withDockerContainer('node') {
                    // some block
                    sh 'node -v'
                    sh 'npm config set registry https://registry.npmmirror.com'
                    sh 'npm install'
                    sh 'npm run docs:build'
                    sh 'pwd'
                }
            }
        }

        // 每次构建完dist,生成一个压缩包，可以回溯历史版本
        stage('制品'){
            steps {
                // 默认路径是：/var/jenkins_home/workspace/你的项目名
                // 切换到这个目录，这里应该是docker中jenkins容器中的路径，而不是阿里云的路径，因为jenkins是在docker里运行
                dir('/var/jenkins_home/workspace/rockyshenorg/docs/.vitepress/dist') {
                    // some block
                    sh 'ls'
                    sh 'pwd'
//                     sh 'tar -zcvf rockyshenorg.tar.gz *'
//                     // 让jenkins保存制品（这个压缩包），在Jenkins网页/制品上出现
//                     archiveArtifacts artifacts: 'rockyshenorg.tar.gz',
//                                      allowEmptyArchive: true,
//                                      fingerprint: true,
//                                      onlyIfSuccessful: true
//                        sh 'ls -al'
                }
            }
        }

        stage('部署'){
             steps {
                // 此时还是在docker的jenkins容器内部
                // /var/jenkins_home/workspace/rockyshenorg
                sh 'pwd'
                sh 'ls'
//                 sh 'tar -zxvf /var/lib/docker/volumes/jenkins-data/_data/workspace/rockyshenorg/docs/.vitepress/dist/rockyshenorg.tar.gz -C /www/wwwroot/rockyshenorg/test_jenkins/'
             }
        }
    }
}
