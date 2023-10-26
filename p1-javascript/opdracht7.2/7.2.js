let product = 100;
let budget = prompt ("Hoeveel geld heb je?", 0)

let resultp = document.getElementById("ResultParagraph");
if (product >= budget) {
    resultp.innerHTML = "Helaas, te weinig geld";
    resultp.style.color = "red";
}
else{
    resultp.innerHTML = "U Heeft genoeg geld";
    resultp.style.color = "green";
}