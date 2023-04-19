
const input = document.getElementById('oracion');
const output = document.getElementById('codigo');
function cifrar() {        
        const equivalencias = {
          "A": "..-...",
          "B": "-.....",
          "C": ".-.-..",
          "D": "..-...",
          "E": "...-..",
          "F": "-...-.",
          "G": "..-.--",
          "H": ".--...",
          "I": "--..-.",
          "J": "...--.",
          "K": ".---..",
          "L": "--....",
          "M": ".---..",
          "N": "---...",
          "O": "--..-.",
          "P": "-..--.",
          "Q": "....-.",
          "R": "..-...",
          "S": "-....-",
          "T": ".-.-.-",
          "U": "..-..-",
          "V": "...-.-", 
          "W": "-...--",
          "X": "..-.--",
          "Y": ".--..-",
          "Z": "--..--",
          " ": "------"
        };
        console.log(input);
        var texto = input.value;
        let resultado = "";
        texto = texto.toUpperCase(); // Convertir todo el texto a mayúsculas
        for (let i = 0; i < texto.length; i++) {
          resultado += equivalencias[texto[i]] || texto[i];
        }
    event.preventDefault()
        output.value = resultado;
        return resultado;
}