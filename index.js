const colors = ["red", "blue", "green"];

document.getElementById("add").addEventListener("click", function(e) {
    
});

function createDropDown() {
    const dropDown = document.createElement("select");

for (let i = 0; i < colors.length; i++) {
    const option = document.createElement("option");
    
    
}
    dropDown.addEventListener("change", function(e) {
        console.log(e.target)
    e.target.parentElement.style.backgroundColor = e.target.value;
    })
    return dropDown
};

function createSubItem(e) {
    
}


