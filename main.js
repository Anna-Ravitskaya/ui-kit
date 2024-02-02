let modal = document.getElementById("modal")

document.getElementById("open-modal").addEventListener("click", () => {
    modal.style.pointerEvents = "all";
    modal.style.opacity = 1;

})

document.getElementById("hide-modal").addEventListener("click", () => {
    modal.style.pointerEvents = "none";
    modal.style.opacity = 0;
})