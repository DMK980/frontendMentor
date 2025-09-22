
const list = document.getElementsByTagName("ul")[0];

list.addEventListener('click',onClick);

function onClick(e){
    /*
        Function checks which element
        was clicked and if its the intended
        one it shows the details and changes 
        the image src
    */
    if(e.target.localName == "input"){
        if(e.target.checked){
            e.target.parentElement.children[0].lastElementChild.src = './assets/images/icon-minus.svg'
        }else{ 
            e.target.parentElement.children[0].lastElementChild.src = './assets/images/icon-plus.svg'
        }
        e.target.parentElement.parentElement.lastElementChild.classList.toggle('invisible');
    }
}

