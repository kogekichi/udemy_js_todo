import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  if (!inputText) {
    return;
  }
  document.getElementById("add-text").value = "";
  addIncompleteList(inputText);
};

const removeFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

const addIncompleteList = (todoText) => {
  // TODO内容用のP
  const p = document.createElement("p");
  p.innerText = todoText;

  // 完了ボタン作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 未完了から削除
    const completeTarget = completeButton.parentNode.parentNode;
    removeFromIncompleteList(completeTarget);

    // 完了に追加するためにTODO内容取得
    const text = completeTarget.firstElementChild.firstElementChild.innerText;

    completeTarget.textContent = null;

    // 戻すボタン作成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 完了から削除
      const backTarget = backButton.parentNode.parentNode;
      document.getElementById("complete-list").removeChild(backTarget);

      const text = backTarget.firstElementChild.firstElementChild.innerText;
      addIncompleteList(text);
    });

    // TODO内容用のP
    const p = document.createElement("p");
    p.innerText = text;

    // 内容とボタンをまとめるdiv
    const div = document.createElement("div");
    div.className = "list-row";
    div.appendChild(p);
    div.appendChild(backButton);

    // li作成
    const li = document.createElement("li");
    li.appendChild(div);

    // 完了へ追加
    const completeList = document.getElementById("complete-list");
    completeList.appendChild(li);
  });

  // 削除ボタン作成
  const removeButton = document.createElement("button");
  removeButton.innerText = "削除";
  removeButton.addEventListener("click", () => {
    const removeTarget = removeButton.parentNode.parentNode;
    removeFromIncompleteList(removeTarget);
  });

  // 内容とボタンをまとめるdiv
  const div = document.createElement("div");
  div.className = "list-row";
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(removeButton);

  // li作成
  const li = document.createElement("li");
  li.appendChild(div);

  // 未完了へ追加
  const incompleteList = document.getElementById("incomplete-list");
  incompleteList.appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
