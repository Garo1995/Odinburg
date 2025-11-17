document.addEventListener("DOMContentLoaded", () => {

    const priceRange     = document.getElementById("price-range");
    const priceDisplay   = document.getElementById("price-display");

    const termRange      = document.getElementById("term-range");
    const termDisplay    = document.getElementById("term-display");

    const depositRange   = document.getElementById("deposit-range");
    const depositDisplay = document.getElementById("deposit-display");
    const depositPercent = document.getElementById("deposit-percent");

    const percentBtns    = document.querySelectorAll("#preset-percent li");

    // формат суммы
    const fm = (n) => Number(n).toLocaleString("ru-RU") + " ₽";

    // универсальная окраска range
    function paintRange(range) {
        const min = +range.min;
        const max = +range.max;
        const val = +range.value;

        const p = ((val - min) * 100) / (max - min);

        range.style.background = `
            linear-gradient(
                to right,
                #B5D900 0%,
                #B5D900 ${p}%,
                #DCDCDC ${p}%,
                #DCDCDC 100%
            )
        `;
    }

    // обновление стоимости
    function updatePrice() {
        priceDisplay.textContent = fm(priceRange.value);
        updateDeposit(); // обновляем взнос, если меняем цену
    }

    // обновление срока
    function updateTerm() {
        termDisplay.textContent = termRange.value + " лет";
    }

    // обновление взноса
    function updateDeposit() {
        const price   = +priceRange.value;
        const percent = +depositRange.value;
        const sum     = Math.round(price * percent / 100);

        depositDisplay.textContent = fm(sum);
        depositPercent.textContent = percent + "%";

        // подсветка активной кнопки
        percentBtns.forEach(btn =>
            btn.classList.toggle("calc-percent-act", btn.dataset.percent == percent)
        );
    }

    // обработчики
    priceRange.addEventListener("input", () => {
        updatePrice();
        paintRange(priceRange);
    });

    termRange.addEventListener("input", () => {
        updateTerm();
        paintRange(termRange);
    });

    depositRange.addEventListener("input", () => {
        updateDeposit();
        paintRange(depositRange);
    });

    // кнопки процентов
    percentBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            depositRange.value = btn.dataset.percent;
            updateDeposit();
            paintRange(depositRange);
        });
    });

    // первичный запуск
    updatePrice();
    updateTerm();
    updateDeposit();

    paintRange(priceRange);
    paintRange(termRange);
    paintRange(depositRange);

});