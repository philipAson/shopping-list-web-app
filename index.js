const clearMarkedButton = document.getElementById("clear_marked_button");
const clearAllButton = document.getElementById("clear_all_button");
const addToListButton = document.getElementById("add_to_list_button");

const checkBoxes = document.getElementsByClassName("checkbox");

const itemContainer = document.getElementById("item_container")

const addToListTextField = document.getElementById("addToListField");

clearMarkedButton.addEventListener("click", () => {
    console.log("click " + clearMarkedButton.innerHTML)
})

clearAllButton.addEventListener("click", () => {
    console.log("click " + clearAllButton.innerHTML)
})

addToListButton.addEventListener("click", () => {
    console.log("click " + addToListButton.innerHTML)
    createListItem(addToListTextField.innerHTML);
})

for (checkBox of checkBoxes) {
    checkBox.addEventListener("click", () => {

        // checkBox functionallity
        
    })
}

const createListItem = () => {
    const listItemElement = document.createElement("div");
    listItemElement.className = "list_item";

    listItemElement.innerHTML = addToListTextField.value;

    const checkBox = document.createElement("span")
    checkBox.className = "checkbox"
    listItemElement.appendChild(checkBox);

    itemContainer.appendChild(listItemElement);

    addToListTextField.value = "";
}