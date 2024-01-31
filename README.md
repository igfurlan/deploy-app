# deploy-app
Repo to automate the CI-CD process using Drone-CI and Argo-CD

This repo has 3 Argo applications as of now. 
1. application.yml - References the folder application-helm which has the application itself
2. drone-application.yml - References the folder drone-helm which has 3 helm charts (drone, drone-runner-kube and drone-kubernetes-secrets)
3. loki-application.yml - References the folder loki-stack which is the stack of Grafana, Loki, Prometheus and so on. 