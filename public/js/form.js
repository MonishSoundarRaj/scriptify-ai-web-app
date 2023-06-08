const fillerText = document.getElementsByClassName("sa__index-main-container-display-result-textarea-h1")[0]
const loadingGif = document.getElementsByClassName("sa__index-main-container-display-result-textarea-loading-gif")[0] 

function onClick() {
  loadingGif.style.display = "flex"
  fillerText.style.display = "none";
  const prompt = document.getElementById("prompt");
  const key = document.getElementById("key");
  const data = {
    p: prompt.value,
    k: key.value,
  };
  fetch("/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    }).then((data) => {
        loadingGif.style.display = "none"
        document.getElementById('codeArea').innerHTML = data.script;
      })
    .catch((error) => {
      console.log("Error:", error);
    });
}


