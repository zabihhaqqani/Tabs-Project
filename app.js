const btns = document.querySelectorAll(".tab-btn")
const about = document.querySelector(".about")
const articles = document.querySelectorAll(".content")
const img = document.querySelector(".image")

const arr = ["history", "vision", "goals"]

about.addEventListener("click", function (e) {

    const id = e.target.dataset.id
    if (id) {
        btns.forEach(function (btn) {
            btn.classList.remove("active")
        })
        e.target.classList.add("active")

        articles.forEach(function (article) {
            article.classList.remove("active")
        })

        const text = document.getElementById(id)
        text.classList.add("active")
        console.log(text.id);
        img.innerHTML = `<img src="${text.id}.jpg" alt="">`
    }

})