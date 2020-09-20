function converter(binary, decimal) {
  for (var i = 0; i <= binary.length; i++) {
    if (binary[i] !== "0" && binary[i] !== "1") {
      alert("Please, insert a valid binary number!")
      return decimal.value = ""
    } else {
      var decimal = parseInt(binary, 2)
    }
    return decimal
  }
}

function handler() {
  var bin = document.querySelector("#bin-in").value
  var dec = document.querySelector("#dec-in")
  dec.value = converter(bin, dec)
}
