console.log("Connected")

// stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded

let imagePicker = document.getElementById('imagePicker');
    let imagePreview = document.getElementById('imagePreview');
    imagePicker.addEventListener('change', function() {
        let file = this.files[0];
        if (file) {
            let objectURL = URL.createObjectURL(file);
            imagePreview.src = objectURL;
            imagePreview.onload = () => URL.revokeObjectURL(objectURL);
        }
    });


let desc = document.getElementById('desctxt'); 
let table = document.getElementById('probtable').getElementsByTagName('tbody')[0]; 
let submitbutton = document.getElementById('issuesubmit'); 
let selectMenu = document.querySelector('#typeslc select'); 

function add() { 
    let textValue = desc.value.trim(); 
    let selectedoption = selectMenu.options[selectMenu.selectedIndex].text; 
    let selectedValue = selectMenu.value;

    let newRow = table.insertRow(-1); 

    let cell1 = newRow.insertCell(0); 
    let cell2 = newRow.insertCell(1); 
    let cell3 = newRow.insertCell(2); 

    cell1.textContent = textValue; 
    cell2.textContent = selectedoption; 
    cell3.innerHTML = 'Issue Pending Approval <span id="yellow"></span>';

    desc.value = ""; 
    selectMenu.value = "problem-default"; 
} 

submitbutton.addEventListener('click', add);



function searchLocation() {

    let input = document.getElementById("locInput").value;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals


    let search = encodeURIComponent(input + ", Long Beach, CA");

    document.getElementById("map").src =
        `https://www.google.com/maps?q=${search}&output=embed`;

}


