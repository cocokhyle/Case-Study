import URLs from "../symbols/links";
import MediumText from "../medium_text";
import MedTitle from "../medium_title";
import SubTitle from "../sub_title";
import Title from "../title";

const data = [
  {
    title: "1. Install Virtualbox",
    contents: [
      { type: "text", content: "Download Link:" },
      { type: "url", content: "https://www.virtualbox.org/wiki/Downloads" },
      { type: "text", content: "Instruction: Follow Instruction" },
    ],
  },
  {
    title: "2. Install Vagrant",
    contents: [
      { type: "text", content: "Download Link:" },
      {
        type: "url",
        content: "https://developer.hashicorp.com/vagrant/install",
      },
      { type: "text", content: "Install via BREW or PACKAGED" },
    ],
  },
  {
    title: "3. Setup Virtual Machines",
    contents: [
      { type: "text", content: "Download the Folder:" },
      {
        type: "url",
        content:
          "https://opswerks-my.sharepoint.com/:u:/r/personal/vince_villasor_academy_opswerks_com/Documents/LegalLoggers/kubeadm-clusters.zip?csf=1&web=1&e=v6etOX",
      },
      { type: "text", content: "Execute the following:" },
      { type: "command", content: "cd ~/kubeadm-clusters/virtualbox " },
      { type: "command", content: "vagrant status" },
      { type: "command", content: "vagrant up" },
      { type: "text", content: "To access each node, execute the following:" },
      { type: "command", content: "vagrant ssh controlplane " },
      { type: "command", content: "vagrant ssh node01" },
      { type: "command", content: "vagrant ssh node02" },
    ],
  },
  {
    title: "4. Setting up the Kubernetes Cluster",
    contents: [
      { type: "text", content: "Install kubeadm, go to the link below:" },
      {
        type: "url",
        content:
          "https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/ ",
      },
      {
        type: "text",
        content:
          "Look for Red Hat-based distributions and follow the instructions",
      },
      {
        type: "text",
        content: "Install Containerd",
      },
      {
        type: "url",
        content: "https://docs.docker.com/engine/install/centos/ ",
      },
      {
        type: "text",
        content:
          "Follow Instruction using RPM repository, then simply execute the following:",
      },
      {
        type: "command",
        content:
          "containerd config default | sed 's/SystemdCgroup = false/SystemdCgroup = true/' | sudo tee /etc/containerd/config.toml ",
      },
      {
        type: "command",
        content: "systemctl restart containerd",
      },
      {
        type: "text",
        content: "Initialize Cluster",
      },
      {
        type: "command",
        content: "sudo swapoff -a",
      },
      {
        type: "command",
        content: "sudo sed -i '/ swap / s/^/#/' /etc/fstab",
      },
      {
        type: "command",
        content:
          'echo "net.ipv4.ip_forward = 1" | sudo tee -a /etc/sysctl.conf',
      },
      {
        type: "command",
        content: "sudo sysctl -p ",
      },
      {
        type: "text",
        content: "Execute the following on the controllplane node",
      },
      {
        type: "command",
        content:
          "sudo kubeadm init --apiserver-advertise-address <IP ADDRESS> --pod-network-cidr “10.244.0.0/16” --upload-certs ",
      },
      {
        type: "text",
        content:
          "Change the <IP ADDRESS> with the IP address associated with your machine",
      },
      {
        type: "text",
        content:
          "After executing the command above, copy the given command and execute it to the other worker nodes, for example:",
      },
      {
        type: "command",
        content:
          "kubeadm join <control-plane-host>:<control-plane-port> --token <token> --discovery-token-ca-cert-hash sha256:<hash>",
      },
      {
        type: "text",
        content:
          "To enable worker nodes to use kubectl command, simple follow the instruction below:",
      },
      {
        type: "text",
        content: "In node01 and node02:",
      },
      {
        type: "command",
        content: "mkdir -p ~/.kube/ ",
      },
      {
        type: "text",
        content: "In controlplane node:",
      },
      {
        type: "command",
        content: "sudo chmod 644 /etc/kubernetes/admin.conf  ",
      },
      {
        type: "command",
        content:
          "sudo cp /etc/kubernetes/admin.conf /home/vagrant/admin.conf  ",
      },
      {
        type: "command",
        content: "sudo chown vagrant:vagrant /home/vagrant/admin.conf ",
      },
      {
        type: "command",
        content: "scp /home/vagrant/admin.conf vagrant@node01:~/.kube/ ",
      },
      {
        type: "command",
        content: "scp /home/vagrant/admin.conf vagrant@node02:~/.kube/ ",
      },
      {
        type: "command",
        content: "rm admin.conf ",
      },
      {
        type: "text",
        content: "Going back to node01 and node02:",
      },
      {
        type: "command",
        content: "cd ~/.kube/ ",
      },
      {
        type: "command",
        content: "mv admin.conf config ",
      },
      {
        type: "text",
        content: "Adding Flannel as Network Addon:",
      },
      {
        type: "text",
        content: "Go to the link below for more information:",
      },
      {
        type: "url",
        content:
          "https://kubernetes.io/docs/concepts/cluster-administration/addons/",
      },
      {
        type: "text",
        content: "Flannel’s Documentation Link:",
      },
      {
        type: "url",
        content:
          "https://github.com/flannel-io/flannel#deploying-flannel-manually ",
      },
      {
        type: "text",
        content: "To setup flannel in the cluster, execute the following:",
      },
      {
        type: "command",
        content:
          "kubectl apply -f https://github.com/flannel-io/flannel/releases/latest/download/kube-flannel.yml ",
      },
    ],
  },
  {
    title: "5. Additional Commands ",
    contents: [
      { type: "text", content: "Execute the following on all nodes" },
      { type: "command", content: "lsmod | grep br_netfilter " },
      { type: "command", content: "sudo modprobe br_netfilter" },
      {
        type: "command",
        content:
          'echo "br_netfilter" | sudo tee /etc/modules-load.d/br_netfilter.conf ',
      },
      {
        type: "text_field",
        content:
          "sudo tee /etc/sysctl.d/99-kubernetes-cri.conf <<EOF\nnet.bridge.bridge-nf-call-iptables = 1\nnet.bridge.bridge-nf-call-ip6tables = 1\nEOF ",
      },
      {
        type: "command",
        content: "sudo sysctl --system ",
      },
      {
        type: "command",
        content:
          "kubectl rollout restart daemonset kube-flannel-ds -n kube-flannel ",
      },
    ],
  },
  {
    title: "5.1. Pre-requisite Installation and Commands for each node  ",
    contents: [
      { type: "command", content: "grep docker /etc/group " },
      { type: "command", content: "sudo usermod -aG docker $USER " },
      { type: "command", content: "newgrp docker " },
      { type: "text", content: "Pre-requisites for Jenkins" },
      { type: "command", content: "sudo yum install java-17-openjdk -y" },
      { type: "command", content: "sudo yum install git -y " },
    ],
  },
  {
    title: "Other Commands",
    contents: [
      { type: "text", content: "To reset the cluster:" },
      { type: "command", content: "sudo kubeadmn reset -f " },
      { type: "text", content: "To check logs" },
      { type: "command", content: "kubectl logs <pod-name> -n kube-flannel " },
    ],
  },
  {
    title: "Deploying Jenkins and Webapp via Jenkins ",
    contents: [
      {
        type: "title",
        content: "1. Installing Jenkins in a Kubernetes Cluster  ",
      },
      {
        type: "text",
        content: "Create a namespace",
      },
      {
        type: "command",
        content: "kubectl create namespace jenkins ",
      },
      {
        type: "text",
        content: "Create PV and PVC for Persistent Jenkins ",
      },
      {
        type: "command",
        content: "vi jenkins-pvc.yaml ",
      },
      {
        type: "text",
        content: "Paste the following inside the yaml file",
      },
      {
        type: "text_field",
        content:
          "apiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: jenkins-pv\nspec:\n capacity:\n   storage: 10Gi\n accessModes:\n    - ReadWriteOnce\n hostPath:\n   path: /data/jenkins\n---\napiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: jenkins-pvc\n namespace: jenkins\nspec:\n accessModes:\n    - ReadWriteOnce\n resources:\n    requests:\n     storage: 10Gi",
      },
      {
        type: "text",
        content: "Apply the yaml file:",
      },
      {
        type: "command",
        content: "kubectl apply -f jenkins-pvc.yaml",
      },
      {
        type: "text",
        content: "Create ConfigMap for DNS",
      },
      {
        type: "command",
        content: "vi jenkins-dnsconfig.yaml ",
      },
      {
        type: "text_field",
        content:
          "apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: jenkins-dns-config\n  namespace: jenkins\ndata:\n resolv.conf: |\n    nameserver 8.8.8.8\n    nameserver 8.8.4.4 ",
      },
      {
        type: "text",
        content: "Apply the yaml file:",
      },
      {
        type: "command",
        content: "kubectl apply -f jenkins-dnsconfig.yaml ",
      },
      {
        type: "text",
        content: "Additional Commands for PVC",
      },
      {
        type: "command",
        content: "sudo mkdir -p /data/jenkins ",
      },
      {
        type: "command",
        content: "sudo chown -R 1000:1000 /data/jenkins",
      },
      {
        type: "command",
        content: "sudo chmod -R 755 /data/jenkins ",
      },
      {
        type: "text",
        content: "Create Deployment and Service file",
      },
      {
        type: "command",
        content: "vi jenkins-deployservice.yaml ",
      },
      {
        type: "text_field",
        content:
          "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: jenkins\n  namespace: jenkins\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: jenkins\n  template:\n    metadata:\n      labels:\n        app: jenkins\n    spec:\n      affinity:\n        nodeAffinity:\n          requiredDuringSchedulingIgnoredDuringExecution:\n            nodeSelectorTerms:\n            - matchExpressions:\n              - key: kubernetes.io/hostname\n                operator: In\n                values:\n                - node01\n      containers:\n      - name: jenkins\n        image: jenkins/jenkins:lts\n        ports:\n          - name: http-port\n            containerPort: 8080\n          - name: jnlp-port\n            containerPort: 50000\n        volumeMounts:\n          - name: jenkins-vol\n            mountPath: /var/jenkins_home\n          - name: dns-config\n            mountPath: /etc/resolv.conf\n            subPath: resolv.conf\n      volumes:\n        - name: jenkins-vol\n          persistentVolumeClaim:\n            claimName: jenkins-pvc\n        - name: dns-config\n          configMap:\n            name: jenkins-dns-config\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: jenkins\n  namespace: jenkins\nspec:\n  type: NodePort\n  ports:\n    - port: 8080\n      targetPort: 8080\n      nodePort: 30000\n  selector:\n    app: jenkins\n---\napiVersion: v1\nkind: Service\nmetadata:  name: jenkins-jnlp\n  namespace: jenkins\nspec:\n  type: ClusterIP\n  ports:\n    - port: 50000\n      targetPort: 50000\n  selector:\n    app: jenkins ",
      },
      {
        type: "command",
        content: "kubectl apply -f jenkins-deployservice.yaml ",
      },
      {
        type: "text",
        content: "Note: If Jenkins Pod is NOT running, repeat these commands",
      },
      {
        type: "command",
        content: "sudo mkdir -p /data/jenkins",
      },
      {
        type: "command",
        content: "udo chown -R 1000:1000 /data/jenkins ",
      },
      {
        type: "command",
        content: "sudo chmod -R 755 /data/jenkins ",
      },
      {
        type: "command",
        content: "kubectl rollout restart deployment jenkins -n jenkins",
      },
      {
        type: "text",
        content: "Accessing the Jenkins UI",
      },
      {
        type: "text",
        content: "To know the initial password:",
      },
      {
        type: "command",
        content: "kubectl get pods -n jenkins ",
      },
      {
        type: "command",
        content: "kubectl logs <pod-name> -n jenkins ",
      },
      {
        type: "text",
        content: "To know the IP Address:",
      },
      {
        type: "command",
        content: "kubectl get nodes -o wide",
      },
      {
        type: "text",
        content: "Access via browser:",
      },
      {
        type: "command",
        content: "<Node IP Address>:30000",
      },
    ],
  },
];

export default function SetupInstructions() {
  return (
    <div>
      <Title title="Install and Setup Tools" />
      <div className="p-10">
        <div className="space-y-5">
          {data.map((item, index) => (
            <div key={index}>
              <Title title={item.title} />
              <div>
                {item.contents.map((content, index) => (
                  <div key={index} className="p-2 pl-10">
                    {content.type === "text" ? (
                      <MedTitle title={content.content} />
                    ) : content.type === "url" ? (
                      <URLs title={content.content} />
                    ) : content.type === "command" ? (
                      <div
                        className="pl-16"
                        onClick={() =>
                          navigator.clipboard.writeText(content.content)
                        }
                        title="Click to copy"
                      >
                        <MedTitle title={content.content} />
                      </div>
                    ) : content.type === "text_field" ? (
                      <div className="p-5 border-[1px] border-gray-500 w-fit rounded-lg">
                        {content.content
                          .split("\n")
                          .map((line: string, index: number) => (
                            <div key={index} className=" whitespace-pre-wrap ">
                              {line}
                            </div>
                          ))}
                      </div>
                    ) : content.type === "title" ? (
                      <div className="-ml-10">
                        <MediumText title={content.content} />
                      </div>
                    ) : (
                      <span>{content.content}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
