function copyFunction(){
    const copyButton = document.getElementsByClassName("sa__index-main-container-display-textarea-title-div-copy-button")[0];
    const codeTextArea = document.getElementsByClassName("sa__index-main-container-display-textarea")[0];
    navigator.clipboard.writeText(codeTextArea.value)
    copyButton.innerHTML = "✔️copied";
}

