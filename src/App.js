import React, { useState } from "react";
import { decisionTree } from "./data";
import TreeNode from "./TreeNode"; // Компонент узла дерева
import "./styles.css"; // Стили

const App = () => {
    const [tree, setTree] = useState(decisionTree);

    const toggleNode = (id) => {
        const updateTree = (node) => {
            if (node.id === id) {
                node.isExpanded = !node.isExpanded;
            }
            if (node.children) {
                node.children = node.children.map(updateTree);
            }
            return node;
        };
        setTree(updateTree({ ...tree }));
    };

    return (
        <div className="tree-container">
            <h1>Дерево решений</h1>
            <TreeNode node={tree} toggleNode={toggleNode} />
        </div>
    );
};

export default App;
