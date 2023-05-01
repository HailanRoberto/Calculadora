const calculate = () => {
    let tela = document.querySelector(".tela");
    let buttons = document.querySelectorAll(".btn");
    let clear = document.querySelector(".clear");
    let igual = document.querySelector(".igualdade");

    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            let value = e.target.dataset.num;
            tela.value += value;
        });
    });

    igual.addEventListener("click", () => {
        let answer = eval(tela.value);
        tela.value = answer;
    });

    clear.addEventListener("click", () => {
        tela.value = "";
    });
};

calculate();