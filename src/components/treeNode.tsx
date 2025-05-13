interface TreeNodeType {
  value: number;
  left: TreeNodeType | null;
  right: TreeNodeType | null;
}

interface TreeNodeProps {
  node: TreeNodeType;
  cx: string;
  cy: string;
  offset: number;
  depth: number;
  vs: number;
}

export default function TreeNode({
  node,
  cx,
  cy,
  offset,
  depth,
  vs,
}: TreeNodeProps) {
  const r = 20;
  vs = vs + vs;
  const horizontalSpacing = 50;
  return (
    <>
      <circle cx={cx} cy={vs} r={r} fill="red" />
      <text
        x={cx}
        y={vs}
        fill="white"
        fontSize="16"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {node.value}
      </text>

      {node.left ? (
        <TreeNode
          node={node.left}
          cx={`${horizontalSpacing}%`}
          cy={`${vs}%`}
          offset={0}
          depth={depth}
          vs={vs}
        />
      ) : null}

      {node.right ? (
        <TreeNode
          node={node.right}
          cx={`${horizontalSpacing}%`}
          cy={`${vs}%`}
          offset={0}
          depth={depth}
          vs={vs}
        />
      ) : null}
    </>
  );
}
