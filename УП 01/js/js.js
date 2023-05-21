window.onload=function(){
function kalkulyator(){
    var rezultat2 = 11000;
    rezultat2 *= parseFloat(document.getElementById('odin1').value);
    document.getElementById('rezultat2').innerHTML = rezultat2;
}  
    
    
    document.getElementById("open-modal-btn").addEventListener("click", function(){
        document.getElementById("my-modal").classList.add("open")
    })
    document.getElementById("fuf").addEventListener("click", function(){
        document.getElementById("my-modal").classList.add("open")
    })
    document.getElementById("close-my-modal-btn").addEventListener("click", function(){
        document.getElementById("my-modal").classList.remove("open")
    })
}
