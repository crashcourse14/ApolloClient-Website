let images = document.querySelectorAll(".carousel img");
let index = 0;

function showImage(i){
    images.forEach(img => img.classList.remove("active"));
    images[i].classList.add("active");
}

function nextImg(){
    index = (index + 1) % images.length;
    showImage(index);
}

function prevImg(){
    index = (index - 1 + images.length) % images.length;
    showImage(index);
}

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.15 });

sections.forEach(sec => observer.observe(sec));


