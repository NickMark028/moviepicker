import { ReactDOM } from "react";
export const myFunction = (id) => {
    let prevId = "1";
    document.getElementById(prevId).style.background = "rgb(243, 235, 235)";
    //     (document.getElementById(id).style.background = "#df0e62"),
    //     (prevId = id);
};
export const timeFunction = () => {
    document.getElementById("screen-next-btn").disabled = false;
};
