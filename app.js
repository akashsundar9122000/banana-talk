var btnTranslate=document.querySelector("#btn-translate");

var textInput=document.querySelector("#txt-input");

var OutputDiv=document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/yoda.json"

function getTranslationUrl(text){

    return serverUrl+"?"+"text="+text;
}

// function errorHandler(error){

//     alert("Something wrong with the server try again sometimes later!!!");
// }

function clickHandler(){
    var inputText=textInput.value;

    fetch(getTranslationUrl(inputText))
        .then(response => response.json())
        .then(json  => {
            var translatedText = json.contents.translated;

            OutputDiv.innerText = translatedText;
        });
        //.catch(errorHandler)
}

btnTranslate.addEventListener("click",clickHandler)