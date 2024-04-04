export const shapes: any = {
    '1': {
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        backgroundColor: "lightblue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "darkblue",
    },
    '2': {
        width: "200px",
        height: "100px",
        backgroundColor: "lightblue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "darkblue",
    },
    '3': {
        width: "0",
        height: "0",
        borderBottom: "150px solid lightblue",
        borderLeft: "50px solid transparent",
        borderRight: "50px solid transparent",
        position: "relative" as "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "darkblue",
    },
    '4': {
        width: "100px",
        height: "55px",
        backgroundColor: "lightblue",
        position: "relative" as "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        color: "darkblue",
    },
    '5': {
        width: "100px",
        height: "100px",
        backgroundColor: "lightblue",
        clipPath:
          "polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "darkblue",
    }
};

export const getRandoomShapes = () => {
    let randomNumber = Math.floor(Math.random() * 5) + 1;
    return shapes[randomNumber];
}