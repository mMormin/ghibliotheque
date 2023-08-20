const header = document.querySelector("header");

if (header) {
  const backButton = document.getElementById("historyBack");

  backButton.addEventListener("click", () => {
    history.back();
  });
}
