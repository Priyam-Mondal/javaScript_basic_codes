function addBtns(labels){
    for(let i=0; i<labels.length; i++){
        let newButton=document.createElement("button");
        newButton.textContent=labels[i];

        newButton.addEventListener("click", ()=>{
            window.alert("Button clicked: "+labels[i]);
        });

        document.body.appendChild(newButton);
    }
}

const buttonLabels = ["Button 1", "Button 2", "Button 3", "Button 4"];
addBtns(buttonLabels);