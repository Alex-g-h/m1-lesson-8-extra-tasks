const text = "Привет! Как дела! Давно мы с тобой не виделись.";
checkTextOnErrorSymbol(text, "а", showSuccessMessage, showErrorMessage);

// callback functions
function showSuccessMessage(message) {
  console.log(message);
}

function showErrorMessage(message) {
  console.error(message);
}

/**
 * Check text for wrong symbol and emit callback function depending on result
 * @param {*} text Text to check
 * @param {*} errorSymbol Wrong symbol
 * @param {*} successCallback Callback function when text is correct
 * @param {*} errorCallback Callback function when text has wrong symbol
 */

function checkTextOnErrorSymbol(text, errorSymbol, successCallback, errorCallback) {
  let searchIndexFrom = 0;
  let errorIndex = 0;
  while (errorIndex >= 0) {
    errorIndex = text.indexOf(errorSymbol, searchIndexFrom);
    if (errorIndex >= 0) {
      showErrorMessage(`Найден запрещенный символ ${errorSymbol} под индексом ${errorIndex}`);
      searchIndexFrom = errorIndex + 1;
    }
  }

  if (errorIndex === -1 && searchIndexFrom === 0)
    showSuccessMessage('В данном тексте нет запрещенных символов');
}

