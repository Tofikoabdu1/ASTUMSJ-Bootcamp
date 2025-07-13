const inputBox=document.getElementById("input-box");
const listContainer = document.getElementById('list-container');

const addTask=()=>{
    if(inputBox.value===''){
        alert('you must write something');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span =document.createElement('span');
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value='';
    saveData();
}

listContainer.addEventListener("click", function(place){
    if(place.target.tagName==='LI'){
        place.target.classList.toggle("checked");
        saveData();
    }
    else if(place.target.tagName==='SPAN'){
        place.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function displayData(){
    listContainer.innerHTML=localStorage.getItem("data");
}
displayData();