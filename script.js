const itens = [];

function addItem() {
  
  const item = document.getElementById("item").value;
  const quantity = document.getElementById("quantity").value;

  
  const newItem = { item: item, quantity: quantity, checked: false };

  if(item !="" && quantity !="") {
    itens.push(newItem);
    
    document.getElementById("item").value = "";
    document.getElementById("quantity").value = "";

    updateList();

  } else {

    alert("Digite um item e a quantidade!");

  }
  
}

function updateList() {
  const list = document.getElementById("list");

  list.innerHTML = "";

  itens.forEach(function (item, index) {
    const li = document.createElement("li");
    const checkbox = "<input type='checkbox' onchange='updateItem(" + index + ", this.checked)' " + (item.checked ? "checked" : "") + "> ";
    const itemInfo = `${item.item} (${item.quantity} unidades)`;
    li.innerHTML = checkbox + itemInfo;

    if (item.checked) {
      li.classList.add("checked");
    }
    
    list.appendChild(li);
    
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "<ion-icon name='trash'></ion-icon>";
    deleteButton.setAttribute("class", "btnExcluir");
    deleteButton.addEventListener("click", function () {
      deleteItem(index);
    });
    li.appendChild(deleteButton);

  });
}

function updateItem(index, checked) {
  itens[index].checked = checked;
  updateList();
}

function deleteItem(index) {
  itens.splice(index, 1);
  updateList();
}