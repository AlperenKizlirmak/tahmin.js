

// TAHMİN OYUNU
// *Program 0-100 arasında rastgele bir sayı tutmalı ve kullanıcının bu sayıyı 5 kerede(hak) tahmin etmesini istemelidir.
// *Her yanlışta hakkını bir düşürmeli ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirmelidir.
// *Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler ... denemede bildiniz" diye bir bilgi mesajı yazdırmalıdır.

let trial = 5;
let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);
while (trial > 0) {
  guess = Number(prompt("please enter a guess number"));
  trial--;
  if (guess === randomNumber) {
    console.log("Congrats, you win");
    break;
  } else if (guess < randomNumber) {
    console.log("increase your guess");
  } else {
    console.log("decrease your guess");
  }
  if (trial == 0) {
    console.log("Sorry, you lost");
  }
}

