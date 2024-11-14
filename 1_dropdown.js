function myFunc(event) {
    const selectedOption = event.target.value;
    window.alert("Selected Option:" + selectedOption);
  }
  
  const arr = ["Option 1", "Option 2", "Option 3", "Option 4"];
  
  let dropdown = document.createElement("select");
  
  for (let i = 0; i < arr.length; i++) {
    let option = document.createElement("option");
    option.value = arr[i];
    option.textContent = arr[i];
    dropdown.appendChild(option);
  }
  
  document.body.appendChild(dropdown);
  
  dropdown.addEventListener("change", myFunc);
  