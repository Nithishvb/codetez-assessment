export const convertToNodes = (data: any) => {
    let nodes: any = [];
    data?.data.forEach((e: any,i: number) => {
        nodes.push(
            {
                id: JSON.stringify(i+1),
                type: i === 0 ? "input" : "default",
                data: { label: e.nodeName || e.name},
                position: { x: 100, y: 100 + i * 100 },
            }
        )
    })
    return nodes;
};

export const convertToEdges = (data: any) => {
    let edges: any = [];
    data?.data.forEach((e: any,i: number) => {
        edges.push(
            {
                id: `e${i+1}`,
                source: JSON.stringify(i+1),
                target: JSON.stringify(i+2),
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

export function extractDate(inputTime: string): string {
    // Parse the input string as a Date object
    const dateObject = new Date(inputTime);

    // Extract the date components
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const day = String(dateObject.getDate()).padStart(2, '0');

    // Assemble the date string in the format YYYY-MM-DD
    const result = `${year}-${month}-${day}`;

    return result;
}

