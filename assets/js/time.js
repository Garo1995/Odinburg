document.addEventListener("DOMContentLoaded", function() {
    // Устанавливаем таймер на 7 дней с момента загрузки страницы
    const deadline = new Date().getTime() + (7 * 24 * 60 * 60 * 1000);

    function updateTimer() {
        const now = new Date().getTime();
        const t = deadline - now;

        const timer = document.querySelector(".timer");
        const daysEl = document.getElementById("days");
        const hoursEl = document.getElementById("hours");
        const minutesEl = document.getElementById("minutes");
        const secondsEl = document.getElementById("seconds");

        // если элементов нет — выходим
        if (!timer || !daysEl || !hoursEl || !minutesEl || !secondsEl) return;

        if (t <= 0) {
            timer.innerHTML = "<h3>Акция завершена!</h3>";
            clearInterval(timerInterval);
            return;
        }

        const days = Math.floor(t / (1000 * 60 * 60 * 24));
        const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((t % (1000 * 60)) / 1000);

        daysEl.textContent = days.toString().padStart(2, "0");
        hoursEl.textContent = hours.toString().padStart(2, "0");
        minutesEl.textContent = minutes.toString().padStart(2, "0");
        secondsEl.textContent = seconds.toString().padStart(2, "0");
    }

    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer();
});