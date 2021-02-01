header_element = document.querySelector("header")
advice_element = document.querySelector(".advice")

container_buttons = document.querySelector(".container")

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll > 50) {
        advice_element.remove()
        header_element.classList.add('active');
    }
    else if (header_element.classList.contains('active')) {
        if (scroll <1) {
            header_element.classList.remove('active');
            window.scrollTo(0, 0)
        }
    }

});

container_buttons.addEventListener("click", () => {
    if (header_element.classList.contains('active')) {
        window.scrollTo(0, 0)
        header_element.classList.remove('active');
    } else{
        advice_element.remove()
        window.scrollTo(0, 10)
        header_element.classList.add('active');
    }

})

