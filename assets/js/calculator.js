document.addEventListener("DOMContentLoaded", () => {

    const priceRange      = document.getElementById("price-range");
    const termRange       = document.getElementById("term-range");
    const depositRange    = document.getElementById("deposit-range");

    const priceInput      = document.getElementById("price-input");
    const termInput       = document.getElementById("term-input");
    const depositInput    = document.getElementById("deposit-input");
    const depositPercent  = document.getElementById("deposit-percent");

    const percentBtns     = document.querySelectorAll("#preset-percent li");

    // формат суммы
    const fm = (n) => Number(n).toLocaleString("ru-RU") + " ₽";

    // убираем всё, кроме цифр
    const onlyNum = (str) => {
        const v = parseInt(String(str).replace(/\D/g, ""), 10);
        return isNaN(v) ? 0 : v;
    };

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
        priceInput.value = fm(priceRange.value);
        updateDeposit(); // обновляем взнос, если меняем цену
    }

    // обновление срока
    function updateTerm() {
        termInput.value = termRange.value; // только число, "лет" можно дорисовать через CSS
    }

    // обновление взноса из процента
    function updateDeposit() {
        const price   = +priceRange.value;
        const percent = +depositRange.value;
        const sum     = Math.round(price * percent / 100);

        depositInput.value    = fm(sum);
        depositPercent.textContent = percent + "%";

        // подсветка активной кнопки
        percentBtns.forEach(btn =>
            btn.classList.toggle("calc-percent-act", btn.dataset.percent == percent)
        );
    }

    // ------ ОБРАБОТЧИКИ RANGE ------

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

    // ------ КНОПКИ ПРОЦЕНТОВ ------

    percentBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            depositRange.value = btn.dataset.percent;
            updateDeposit();
            paintRange(depositRange);
        });
    });

    // ------ РУЧНОЙ ВВОД В ИНПУТЫ ------

    // Цена квартиры
    priceInput.addEventListener("change", () => {
        let v = onlyNum(priceInput.value);

        const min = +priceRange.min;
        const max = +priceRange.max;

        if (v < min) v = min;
        if (v > max) v = max;

        priceRange.value = v;
        updatePrice();
        paintRange(priceRange);
    });

    // Срок ипотеки
    termInput.addEventListener("change", () => {
        let v = onlyNum(termInput.value);

        const min = +termRange.min;
        const max = +termRange.max;

        if (v < min) v = min;
        if (v > max) v = max;

        termRange.value = v;
        updateTerm();
        paintRange(termRange);
    });

    // Первоначальный взнос (сумма)
    depositInput.addEventListener("change", () => {
        const sum   = onlyNum(depositInput.value);
        const price = +priceRange.value || 1;

        let percent = Math.round(sum / price * 100);

        if (percent < 0) percent = 0;
        if (percent > 100) percent = 100;

        depositRange.value = percent;
        updateDeposit();
        paintRange(depositRange);
    });

    // первичный запуск
    updatePrice();
    updateTerm();
    updateDeposit();

    paintRange(priceRange);
    paintRange(termRange);
    paintRange(depositRange);

});
