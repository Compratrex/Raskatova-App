import React from "react";

const TreeNode = ({ node, toggleNode }) => {
    return (
        <div className="tree-node">
            {/* Карточка узла */}
            {node.url ? (
                // Конечный узел отображается как ссылка
                <a
                    href={node.url}
                    className="node-card solution-node"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {node.text}
                </a>
            ) : (
                // Обычный узел с раскрытием
                <div
                    className={`node-card ${node.isExpanded ? "expanded" : ""}`}
                    onClick={() => toggleNode(node.id)}
                >
                    {node.text}
                </div>
            )}

            {/* Дочерние узлы */}
            {node.isExpanded && node.children.length > 0 && (
                <div className="children">
                    {node.children.map((child) => (
                        <TreeNode key={child.id} node={child} toggleNode={toggleNode} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default TreeNode;
