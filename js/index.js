const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");

const inputText = document.getElementById("inputText");
const list = document.getElementById("list");

addBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let text = inputText.value;
  if (text === "") {
    alert("Please input field fill up");
  } else {
    let options = new Option(text, text);
    list.add(options);
    inputText.value = "";
  }
});

removeBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let selected = [];
  if (list.value === "") {
    alert("Please select the framework name");
  } else {
    for (let i = 0; i < list.options.length; i++) {
      selected[i] = list.options[i].selected;
    }
    let index = list.options.length;
    while (index--) {
      if (selected[index]) {
        list.remove(index);
      }
    }
  }
});
