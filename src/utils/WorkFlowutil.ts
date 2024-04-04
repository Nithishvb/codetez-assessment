export const convertToNodes = (data: any) => {
    let nodes: any = [];
    data.forEach((e: any,i: number) => {
        nodes.push(
            {
                id: JSON.stringify(i+1),
                type: i === 0 ? "input" : "default",
                data: { label: e.nodeName },
                position: { x: 100, y: 100 + i * 100 },
            }
        )
    })
    return nodes;
};

export const convertToEdges = (data: any) => {
    let edges: any = [];
    data.forEach((e: any,i: number) => {
        edges.push(
            {
                id: `e${i+1}`,
                source: JSON.stringify(e.id),
                target: e.nodePointer,
                data: {
                    startLabel: "start edge label",
                    endLabel: "end edge label",
                },
                animated: true,
            },
        )
    })
    return edges;
}
