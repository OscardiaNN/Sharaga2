let images = document.querySelectorAll('#slider img');
let i = 0;
function nextImg(){
    if(i === images.length - 1){
        images[i].style.display = 'none';
        i = 0
        images[0].style.display = 'block';
    } else {
        images[i].style.display = 'none';
        images[i + 1].style.display = 'block';
        i++
    }
}

setInterval(nextImg, 2000)


document.getElementById("open-modal-btn").addEventListener("click", function(){
    document.getElementById("my-modal").classList.add("open")
})

document.getElementById("close-my-modal-btn").addEventListener("click", function(){
    document.getElementById("my-modal").classList.remove("open")
})