const generateBtn = document.getElementById('generateBtn');
const passwordDisplay = document.getElementById("Password");

generateBtn.addEventListener('click', ()=>{
    const length = document.getElementById("length").value;
    const includeLowercase = document.getElementById("includeLowercase").checked;
    const includeUppercase = document.getElementById("includeUppercase").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;

    const password = generatePassword(length, includeLowercase, includeUppercase, includeNumbers,includeSymbols);
    passwordDisplay.textContent = password || "Invalid options! Please try again.";
});

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:',.<>?/";

    let characterPool = "";
    if (includeLowercase) characterPool += lowerCase;
    if (includeUppercase) characterPool += upperCase;
    if (includeNumbers) characterPool += numbers;
    if (includeSymbols) characterPool += symbols;

    if (!characterPool || length < 8 || length > 128) {
        return null;
    }
    
   let Password = "";
   for(i = 0; i < length; i++) {
    const randomindex = Math.floor(Math.random() * characterPool.length);
    Password += characterPool[randomindex];
   }
   return Password;
}
