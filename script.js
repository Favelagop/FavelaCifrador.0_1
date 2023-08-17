function cipherText(shift) {
    
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z']
  
  var input_text = document.getElementById('text1')
  var result = document.getElementById('result')
  
  let originalMessage = input_text.value.toLowerCase()
  let encryptedMessage = ""
  
  for (let i=0; i < originalMessage.length; i++) {
      let letra = originalMessage[i]
      let index = alphabet.indexOf(letra)
      if (index !== -1) {
        let newletter = alphabet[(index + parseInt(shift)) % alphabet.length]
        encryptedMessage += newletter
      } else {
        encryptedMessage += letra
      }
  }
  result.value = encryptedMessage
}

function decipherText() {
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z']

  var input_text = document.getElementById('text4')
  var result = document.getElementById('result1')
  var shift = document.getElementById('shift').value

  let originalMessage = input_text.value.toLowerCase()
  let decryptedMessage = ""

  for (let i=0; i < originalMessage.length; i++) {
      let letra = originalMessage[i]
      let index = alphabet.indexOf(letra)
      if (index !== -1) {
        let newletter = alphabet[(index - shift + alphabet.length) % alphabet.length]
        decryptedMessage += newletter
      } else {
        decryptedMessage += letra
      }
  }
  result.value = decryptedMessage
}