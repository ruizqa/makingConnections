
let fName="";
let Req;
let conReq;
let yourCon;
let curReq;
let allReq;

fName = document.querySelector('.card-body h1');
Req= document.querySelectorAll('.badge');
allReq = document.querySelectorAll(".card-list-item")
conReq = Req[0]
yourCon = Req[1]


changeName = function(element){
    let fName;
    fName = window.prompt("Enter name:");
    element.innerText = fName;

}

addRequest = function(conReq,yourCon,element){
    
    element.parentNode.parentNode.remove();
    conReq.innerText = parseInt(conReq.innerText) - 1;
    yourCon.innerText = parseInt(yourCon.innerText) + 1;


}

removeRequest = function(conReq,yourCon,element){
    
    element.parentNode.parentNode.remove();
    conReq.innerText = parseInt(conReq.innerText) - 1;


}


