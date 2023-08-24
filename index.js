const form = document.querySelector("form");
const date = document.querySelector("#date");
const inputAssign = document.querySelectorAll(".inputAssign")


// ========================

const countDownClock = (endDate) => {
    const end = new Date(endDate);
    const now = new Date();
    const difference = (end - now) / 1000;

    if (difference < 0) return;
    const days = Math.floor((difference / 3600) / 24);
    const hour = Math.floor(((difference / 3600) % 24));
    const minutes = Math.floor(((difference % 3600) / 60));
    const seconds = Math.floor(((difference % 3600) % 60));
    inputAssign[0].value = days;
    inputAssign[1].value = hour;
    inputAssign[2].value = minutes;
    inputAssign[3].value = seconds;
    if (seconds == 0) {
        inputAssign[3].value = "Done✅";
    }
}





form.addEventListener("submit", (event) => {
    const endDate = date.value;
    document.querySelector("#endDate").textContent = endDate;

    setInterval(() => {
        countDownClock(endDate);
    }, 1000);



    date.value = " ";
    event.preventDefault();

})














