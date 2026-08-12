/* PAGE 1 → PAGE 2 */

document.getElementById("cake").onclick = function () {

    document.getElementById("page1")
        .classList.add("hidden");

    document.getElementById("page2")
        .classList.remove("hidden");

};


/* PAGE 2 → PAGE 3 */

document.getElementById("birthdayButton").onclick = function () {

    const birthday =
        document.getElementById("birthday").value;

    const error =
        document.getElementById("error");


    /* Shalini's birthday = 07-12-2004 */

    if (birthday === "2004-12-07") {

        error.textContent = "";

        document.getElementById("page2")
            .classList.add("hidden");

        document.getElementById("page3")
            .classList.remove("hidden");

    }

    else {

        error.textContent =
            "Please enter the correct birthday ❤️";

    }

};


/* PAGE 3 → PAGE 4 */

document.getElementById("page3Button").onclick = function () {

    document.getElementById("page3")
        .classList.add("hidden");

    document.getElementById("page4")
        .classList.remove("hidden");

};


/* PAGE 4 → PAGE 5 */

document.getElementById("gift").onclick = function () {

    document.getElementById("page4")
        .classList.add("hidden");

    document.getElementById("page5")
        .classList.remove("hidden");

};


/* PAGE 5 → PAGE 6 */

document.getElementById("page5Button").onclick = function () {

    document.getElementById("page5")
        .classList.add("hidden");

    document.getElementById("page6")
        .classList.remove("hidden");

};