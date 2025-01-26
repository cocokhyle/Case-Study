import BoxSymbol from "../symbols/BoxSymbol";
import DotSymbol from "../symbols/DotSymbol";
import HollowDotSymbol from "../symbols/HollowDotSymbol";
import Title from "../symbols/Title";
import CodeBox from "../UI's/code_box";

const content = [
  {
    type: "title",
    margin: "",
    content: "1. Installing Jenkins in a Kubernetes Cluster  ",
  },
  {
    type: "dot",
    margin: "ml-5",
    content: "Create a namespace:",
  },
  {
    type: "command",
    margin: "ml-5",
    content: "$ kubectl create namespace jenkins ",
  },
  {
    type: "dot",
    margin: "ml-5",
    content: "Create a Service account:",
  },
  {
    type: "command",
    margin: "ml-5",
    content: "$ vi jenkins-serviceaccount.yaml",
  },
  {
    type: "dot",
    margin: "ml-5",
    content: "Copy and paste the following:",
  },
  {
    type: "yml",
    margin: "ml-5",
    content: `apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: jenkins-admin
rules:
  - apiGroups: [""]
    resources: ["*"]
    verbs: ["*"]
---
apiVersion: v1
kind: ServiceAccount
metadata:
  name: jenkins-admin
  namespace: jenkins
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: jenkins-admin
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: jenkins-admin
subjects:
  - kind: ServiceAccount
    name: jenkins-admin
    namespace: jenkins`,
  },
  {
    type: "dot",
    margin: "ml-5",
    content: "Then apply the service account:",
  },
  {
    type: "command",
    margin: "ml-5",
    content: "$ kubectl apply -f jenkins-serviceaccount.yaml",
  },
  {
    type: "dot",
    margin: "ml-5",
    content: "Create PVC for Persistent Jenkins Data:",
  },
  {
    type: "command",
    margin: "ml-5",
    content: "$ vi jenkins-volumes.yaml ",
  },
  {
    type: "dot",
    margin: "ml-5",
    content: "Copy and paste the following:",
  },
  {
    type: "yml",
    margin: "ml-5",
    content: `apiVersion: v1 
kind: PersistentVolumeClaim 
metadata: 
  name: jenkins-pvc 
  namespace: jenkins 
spec: 
  storageClassName: linode-block-storage-retain 
  accessModes: 
    - ReadWriteOnce 
  resources: 
    requests: 
      storage: 10Gi `,
  },
  {
    type: "dot",
    margin: "ml-5",
    content: "Then apply the PVC:",
  },
  {
    type: "command",
    margin: "ml-5",
    content: "$ kubectl apply -f jenkins-volumes.yaml ",
  },
  {
    type: "dot",
    margin: "ml-5",
    content: "Create Deployment:",
  },
  {
    type: "command",
    margin: "ml-5",
    content: "$ vi jenkins-deployment.yaml",
  },
  {
    type: "dot",
    margin: "ml-5",
    content: "Copy and paste the following:",
  },
  {
    type: "yml",
    margin: "ml-5",
    content: `apiVersion: apps/v1 
kind: Deployment 
metadata: 
  name: jenkins 
  namespace: jenkins 
spec: 
  replicas: 1 
  selector: 
    matchLabels: 
      app: jenkins-server 
  template: 
    metadata: 
      labels: 
        app: jenkins-server 
    spec: 
      securityContext: 
            fsGroup: 1000 
            runAsUser: 1000 
      serviceAccountName: jenkins-admin 
      containers: 
        - name: jenkins 
          image: jenkins/jenkins:lts 
          resources: 
            limits: 
              memory: "2Gi" 
              cpu: "1000m" 
            requests: 
              memory: "500Mi" 
              cpu: "500m" 
          ports: 
            - name: httpport 
              containerPort: 8080 
            - name: jnlpport 
              containerPort: 50000 
          livenessProbe: 
            httpGet: 
              path: "/login" 
              port: 8080 
            initialDelaySeconds: 90 
            periodSeconds: 10 
            timeoutSeconds: 5 
            failureThreshold: 5 
          readinessProbe: 
            httpGet: 
              path: "/login" 
              port: 8080 
            initialDelaySeconds: 60 
            periodSeconds: 10 
            timeoutSeconds: 5 
            failureThreshold: 3 
          volumeMounts: 
            - name: jenkins-data 
              mountPath: /var/jenkins_home 
      volumes: 
        - name: jenkins-data 
          persistentVolumeClaim: 
              claimName: jenkins-pvc `,
  },
  {
    type: "dot",
    margin: "ml-5",
    content: "Then apply the  deployment:",
  },
  {
    type: "command",
    margin: "ml-5",
    content: "$ kubectl apply -f jenkins-deployment.yaml ",
  },
  {
    type: "dot",
    margin: "ml-5",
    content: "Create a service to expose Jenkins:",
  },
  {
    type: "command",
    margin: "ml-5",
    content: "$ vi jenkins-service.yaml ",
  },
  {
    type: "dot",
    margin: "ml-5",
    content: "Copy and paste the following:",
  },
  {
    type: "yml",
    margin: "ml-5",
    content: `apiVersion: v1 
kind: Service 
metadata: 
  name: jenkins-service 
  namespace: jenkins 
  annotations: 
      prometheus.io/scrape: 'true' 
      prometheus.io/path:   / 
      prometheus.io/port:   '8080' 
spec: 
  selector: 
    app: jenkins-server 
  type: NodePort 
  ports: 
    - port: 8080 
      targetPort: 8080 
      nodePort: 30000 `,
  },
  {
    type: "dot",
    margin: "ml-5",
    content: "Then apply the  service:",
  },

  {
    type: "command",
    margin: "ml-5",
    content: "$ kubectl apply -f jenkins-service.yaml ",
  },
  {
    type: "dot",
    margin: "ml-5",
    content: "To Access the Jenkins UI ",
  },
  {
    type: "hollow_dot",
    margin: "ml-10",
    content: "To view the initial password ",
  },
  {
    type: "command",
    margin: "ml-5",
    content: `$ kubectl get pods -n jenkins 
$ kubectl logs <pod-name> -n jenkins `,
  },
  {
    type: "hollow_dot",
    margin: "ml-10",
    content: "To view the IP Address  ",
  },
  {
    type: "command",
    margin: "ml-5",
    content: "$ kubectl get nodes -o wide ",
  },
  {
    type: "hollow_dot",
    margin: "ml-10",
    content: "To access via browser ",
  },
  {
    type: "link",
    margin: "ml-5",
    content: "<node-IP-Address>:30000 ",
  },
  {
    type: "title",
    margin: "",
    content: "2. Set up for Auto-Build per Commit in Jenkins ",
  },
  {
    type: "dot",
    margin: "ml-5",
    content: "Creating Webhook",
  },
  {
    type: "hollow_dot",
    margin: "ml-10",
    content: "Go to Repository Settings > Webhooks",
  },
  {
    type: "box",
    margin: "ml-16",
    content: "<Jenkins URL>/github-webhook/ ",
  },
];

const sampleText =
  "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: jenkins\n  namespace: jenkins";

export default function DeployingJenkins() {
  return (
    <div className="flex flex-col gap-5 px-10">
      {content.map((item, index) => (
        <div key={index}>
          {item.type === "title" && <Title title={item.content} />}
          {item.type === "dot" && (
            <div className={item.margin}>
              <DotSymbol title={item.content} />
            </div>
          )}
          {item.type === "hollow_dot" && (
            <div className={item.margin}>
              <HollowDotSymbol title={item.content} />
            </div>
          )}
          {item.type === "box" && (
            <div className={item.margin}>
              <BoxSymbol title={item.content} />
            </div>
          )}

          {item.type === "command" && (
            <div className={item.margin}>
              <CodeBox content={item.content} title={item.type} />
            </div>
          )}
          {item.type === "link" && (
            <div className={item.margin}>
              <CodeBox content={item.content} title={item.type} />
            </div>
          )}
          {item.type === "yml" && (
            <div className={item.margin}>
              <CodeBox content={item.content} title={item.type} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
