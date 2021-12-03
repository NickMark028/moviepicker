const e = () => {
    let prevId = "1";
    window.onload = function () {
        document.getElementById("screen-next-btn").disabled = true;
    };

    function timeFunction() {
        document.getElementById("screen-next-btn").disabled = false;
    }

    function myFunction(id) {
        (document.getElementById(prevId).style.background =
            "rgb(243, 235, 235)"),
            (document.getElementById(id).style.background = "#df0e62"),
            (prevId = id);
    }
};
export default e;
