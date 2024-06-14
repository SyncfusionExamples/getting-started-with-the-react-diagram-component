
import './App.css';
import {ConnectorModel, DiagramComponent, NodeModel} from "@syncfusion/ej2-react-diagrams";
function App() {

  const nodes : NodeModel[] = [
    {
      id:"node1",
      offsetY:50,
      shape:{
        shape:"Terminator",
        type:"Flow"
      },
      annotations:[{content:"Start"}]
    },
    {
      id:"node2",
      offsetY:140,
      shape:{
        shape:"Process",
        type:"Flow"
      },
      annotations:[{content:"var i=0;"}]
    },
    {
      id:"node3",
      offsetY:210,
      shape:{
        shape:"Decision",
        type:"Flow"
      },
      annotations:[{content:"var i<10 ?"}]
    },
    {
      id:"node4",
      offsetY:300,
      shape:{
        shape:"PreDefinedProcess",
        type:"Flow"
      },
      annotations:[{content:"Print(Syncfusion)"}]
    },
    {
      id:"node5",
      offsetY:410,
      shape:{
        shape:"Process",
        type:"Flow"
      },
      annotations:[{content:"i ++ ;"}]
    },
    {
      id:"node6",
      offsetY:500,
      shape:{
        shape:"Terminator",
        type:"Flow"
      },
      annotations:[{content:"End"}]
    },
  ]
  const connectors : ConnectorModel[] = [
    {
      id:"connector1",
      sourceID:"node1",
      targetID:"node2"
    },
    {
      id:"connector2",
      sourceID:"node2",
      targetID:"node3"
    },
    {
      id:"connector3",
      sourceID:"node3",
      targetID:"node4",
      annotations:[{content:"Yes", margin:{right:10}}]
    },
    {
      id:"connector4",
      sourceID:"node4",
      targetID:"node5"
    },
    {
      id:"connector5",
      sourceID:"node3",
      targetID:"node6",
      type:"Orthogonal",
      segments:[
        {direction:"Right", length:50},
        {direction:"Bottom", length:300},
      ],
      annotations:[{content:"No",margin:{left:15}}]
    },
    {
      id:"connector6",
      sourceID:"node5",
      targetID:"node3",
      type:"Orthogonal",
      segments:[
        {direction:"Left", length:50},
        {direction:"Top", length:200},
      ]
    }
  ]
  const defaultNodeValues = (defaultNode : NodeModel) =>{
    defaultNode.width = 140;
    defaultNode.height = 50;
    defaultNode.offsetX = 300;
    return defaultNode;
  }
  return (
      <DiagramComponent 
        height={"750px"}
        width={"100%"}
        nodes = {nodes}
        getNodeDefaults={defaultNodeValues}
        connectors={connectors}
      />
  );
}

export default App;
