import SubTitle from "../symbols/SubTitle";
import BoxSymbol from "../symbols/BoxSymbol";
import DashSymbol from "../symbols/DashSymbol";
import DotSymbol from "../symbols/DotSymbol";
import HollowBoxSymbol from "../symbols/HollowBox";
import HollowDotSymbol from "../symbols/HollowDotSymbol";
import URLs from "../symbols/links";
import Title from "../title";
import CodeBox from "../UI's/code_box";

const content = [
  { type: "title", margin: "", content: "No Dynamic Provisioning for Splunk" },
  { type: "dot", margin: "ml-5", content: "After installing Splunk operator" },
  {
    type: "hollow_dot",
    margin: "ml-10",
    content:
      "Creating a Persistent Volume for unclaimed Persistent Volume Claim",
  },
  {
    type: "command",
    margin: "ml-10",
    content: "$ vi splunk-pv.yaml",
  },
  {
    type: "hollow_dot",
    margin: "ml-10",
    content: "Copy and Paste the below configuration:",
  },
  {
    type: "yml",
    margin: "ml-10",
    content: `apiVersion: v1  
kind: PersistentVolume  
metadata:  
  name: splunk-operator-app-download-pv  
  labels:  
    name: splunk-operator  
spec:  
  capacity:  
    storage: 10Gi  
  accessModes:  
  - ReadWriteOnce  
  persistentVolumeReclaimPolicy: Retain  
  storageClassName: “”  
  volumeMode: Filesystem  
  hostPath:  
    path: /mnt/data/splunk-operator-app-download `,
  },
  {
    type: "hollow_dot",
    margin: "ml-10",
    content: "Create a directory for the hostPath",
  },
  {
    type: "command",
    margin: "ml-10",
    content: `$ sudo mkdir -p /mnt/data/splunk-operator-app-download   
$ sudo chmod -R 777 /mnt/data/splunk-operator-app-download `,
  },
  {
    type: "hollow_dot",
    margin: "ml-10",
    content: "Apply the Persistent Volume configuration",
  },
  {
    type: "command",
    margin: "ml-10",
    content: `$ kubectl apply -f splunk-pv.yaml `,
  },
  {
    type: "dot",
    margin: "ml-5",
    content: `After Creating Splunk Standalone  `,
  },
  {
    type: "hollow_dot",
    margin: "ml-10",
    content: `Creating a PVs for Unclaimed PVCs (ETC) `,
  },
  {
    type: "command",
    margin: "ml-10",
    content: `$ vi splunk-pv-etc.yaml `,
  },
  {
    type: "hollow_dot",
    margin: "ml-10",
    content: `Copy and Paste the following configuration `,
  },
  {
    type: "yml",
    margin: "ml-10",
    content: `apiVersion: v1  
kind: PersistentVolume  
metadata:  
  name: pv-etc-splunk-s1-standalone-0  
  labels:  
    app.kubernetes.io/component: standalone  
    app.kubernetes.io/instance: splunk-s1-standalone  
    app.kubernetes.io/managed-by: splunk-operator  
    app.kubernetes.io/name: standalone  
    app.kubernetes.io/part-of: splunk-s1-standalone  
spec:  
  capacity:  
    storage: 10Gi  
  accessModes:  
    - ReadWriteOnce  
  persistentVolumeReclaimPolicy: Retain  
  storageClassName: ""  
  volumeMode: Filesystem  
  hostPath:  
    path: /mnt/data/splunk/etc-splunk-s1-standalone-0  `,
  },
  {
    type: "hollow_dot",
    margin: "ml-10",
    content: "Create a directory for the hostPath",
  },
  {
    type: "command",
    margin: "ml-10",
    content: `$ sudo mkdir -p /mnt/data/splunk/etc-splunk-s1-standalone-0  
$ sudo chmod -R 777 /mnt/data/splunk/etc-splunk-s1-standalone-0 `,
  },
  {
    type: "hollow_dot",
    margin: "ml-10",
    content: "Apply the Persistent Volume configuration",
  },
  {
    type: "command",
    margin: "ml-10",
    content: `$ kubectl apply -f splunk-pv-etc.yaml `,
  },
  {
    type: "hollow_dot",
    margin: "ml-10",
    content: `Creating a PVs for Unclaimed PVCs (VAR)  `,
  },
  {
    type: "command",
    margin: "ml-10",
    content: `$ vi splunk-pv-var.yaml  `,
  },
  {
    type: "hollow_dot",
    margin: "ml-10",
    content: `Copy and Paste the following configuration `,
  },
  {
    type: "yml",
    margin: "ml-10",
    content: `apiVersion: v1  
kind: PersistentVolume  
metadata:  
  name: pv-var-splunk-s1-standalone-0  
  labels:  
    app.kubernetes.io/component: standalone  
    app.kubernetes.io/instance: splunk-s1-standalone 
    app.kubernetes.io/managed-by: splunk-operator  
    app.kubernetes.io/name: standalone  
    app.kubernetes.io/part-of: splunk-s1-standalone  
spec:  
  capacity:  
    storage: 100Gi  
  accessModes:  
    - ReadWriteOnce  
  persistentVolumeReclaimPolicy: Retain  
  storageClassName: ""  
  volumeMode: Filesystem  
  hostPath:  
    path: /mnt/data/splunk/var-splunk-s1-standalone-0 `,
  },
  {
    type: "hollow_dot",
    margin: "ml-10",
    content: "Create a directory for the hostPath",
  },
  {
    type: "command",
    margin: "ml-10",
    content: `$ sudo mkdir -p /mnt/data/splunk/var-splunk-s1-standalone-0  
$ sudo chmod -R 777 /mnt/data/splunk/var-splunk-s1-standalone-0 `,
  },
  {
    type: "hollow_dot",
    margin: "ml-10",
    content: "Apply the Persistent Volume configuration",
  },
  {
    type: "command",
    margin: "ml-10",
    content: `$ kubectl apply -f splunk-pv-var.yaml `,
  },
];

export default function NoDynaminProvisioning() {
  return (
    <div className="flex flex-col gap-5 px-10 ">
      {content.map((item, index) => (
        <div key={index}>
          {item.type === "title" && <Title title={item.content} />}
          {item.type === "sub_title" && <SubTitle title={item.content} />}
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
          {item.type === "hollow_box" && (
            <div className={item.margin}>
              <HollowBoxSymbol title={item.content} />
            </div>
          )}
          {item.type === "dash" && (
            <div className={item.margin}>
              <DashSymbol title={item.content} />
            </div>
          )}
          {item.type === "url" && (
            <div className={item.margin}>
              <URLs title={item.content} />
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
