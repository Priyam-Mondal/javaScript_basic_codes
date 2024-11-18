const maxi=100;

const textInput=document.getElementById("textInput");
const charCount=document.getElementById("charCounter");

function updateCount(){
    const remaining=maxi-textInput.value.length;
    charCount.textContent=remaining+" characters remaining...";
}

textInput.addEventListener("input", updateCount);

