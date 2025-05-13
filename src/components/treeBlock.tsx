import { useEffect, useState } from "react";
import TreeNode from "./treeNode";

interface TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

interface TreeBlockProps {
  root: TreeNode;
}

export default function TreeBlock({ root }: TreeBlockProps) {
  const [depth, setDepth] = useState(0);
  useEffect(() => {
    if (root) {
      const calculateDepth = (node : TreeNode) : number =>{
        if(!node) return 0;
        let res  = 0;
        const queue : TreeNode[] = [];
        queue.push(node);
        while(queue.length > 0){
          const levelSize = queue.length;
          res = res + 1;
          for(let i = 0; i < levelSize; i++){
              const currentNode = queue.shift()!;
              if(currentNode.left) queue.push(currentNode.left);
              if(currentNode.left) queue.push(currentNode.left);
          }
        }
        return res;
      }
      setDepth(calculateDepth(root));
    }
  }, [root]);

  
  const vs = 100 / (depth + 1);

  const verticalSpacing = 100 / (depth + 1);
  const horizontalSpacing = 50;
  return (
    <>
      <div className="tree-container">
        <svg className="tree-wrapper">
          <TreeNode node={root} cx={`${horizontalSpacing}%`} cy={`${vs}%`} offset={0} depth={depth} vs={vs} />
        </svg>
      </div>
    </>
  );
}
