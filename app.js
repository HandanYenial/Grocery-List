const eraser = document.querySelector("#eraser")
const groceries = document.querySelector("#groceryItems");
const userInput = document.querySelector("#userInput");


//we'll add an event listener to the eraser. So if the user wants to delete the list they can just 
//click on this pencil

eraser.addEventListener("click", function() {
    groceries.textContent = "";
  })
//when we write an item, we'll click on enter so it will be added to the list
userInput.addEventListener("keydown", function(event){
    if(event.key == "Enter")
      addItem(); //when user hits enter call addItem function
  });
 //function for adding item to the list 
function addItem() {
    const item = document.createElement("h2");
    item.textContent = "- " + userInput.value;
  
    item.addEventListener("click", function(){
      if(item.style.textDecoration != "line-through")
        item.style.textDecoration = "line-through";
      else //when clcik on an added item make a line-through
        item.style.textDecoration = "none";
    })
  
    groceries.appendChild(item);
    userInput.value = "";
  }