# Prometheus - AlertManager - Grafana

This folder contains additional instructions to deploy and access the web UI of Prometheus, AlertManager, and Grafana.

## Pre-Requisites

- **Helm** : follow these instruction (using script) - [Install Helm](https://helm.sh/docs/intro/install/)

## Additional Instruction
### Change Service to NodePort
```
$ kubectl edit service -n monitoring <service-name>	 

# Service Name: prometheus-operator-kube-p-prometheus 
type: NodePort 
nodePort: 32090

# Service Name: prometheus-operator-kube-p-alertmanager
type: NodePort 
nodePort: 32091

# Service Name: prometheus-operator-grafana
type: NodePort 
nodePort: 32092
```

### Service Monitors
- apply the manifest files under this folder. These gather metrics from the additional instances across the cluster, such as Jenkins, Splunk, and Web Application.
```
$ kubectl apply -f <service-monitor.yaml>
```
