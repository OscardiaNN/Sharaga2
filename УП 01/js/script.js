
document.getElementById("button").addEventListener("click", function(){
    var path;
    if(this.getAttribute("src") === "heartblack.png")
        path = "heartred.png";
    else
        path = "heartblack.png";
    this.setAttribute("src", path);
});
document.getElementById("button1").addEventListener("click", function(){
    var path;
    if(this.getAttribute("src") === "heartblack.png")
        path = "heartred.png";
    else
        path = "heartblack.png";
    this.setAttribute("src", path);
});
document.getElementById("button2").addEventListener("click", function(){
    var path;
    if(this.getAttribute("src") === "heartblack.png")
        path = "heartred.png";
    else
        path = "heartblack.png";
    this.setAttribute("src", path);
});

document.getElementById("open-modal-btn").addEventListener("click", function(){
    document.getElementById("my-modal").classList.add("open")
})

document.getElementById("close-my-modal-btn").addEventListener("click", function(){
    document.getElementById("my-modal").classList.remove("open")
})