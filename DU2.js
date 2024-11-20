/*
Definuju základní cenu HOTOVO
Definuju %slevy či příplatku pro dané firmy HOTOVO

1. člověk na webu vybírá
  1.a) člověk na webu si vybere kateringovou službu
  1.b) člověk na webu si vybere počet lidí
  1.c) člověk napíše, co za event že to vlastně má

2. napíšu fci, která pro každou firmu vrátí na stránku výpočet ceny a oznámení eventu
3. udělá se event

mohli bychom napsat speciální event, který kromě normálních cen třeba bude mít přirážku či slevu? jako předvolba catering na silvestr or what?
 */

const setPrice = 1000;
const FlavourHavenPrice = setPrice;
const YourMamaPrice = 0.85*setPrice;
const JustFoodPrice = 0.60*setPrice;
let numberOfPeople = 0;
let chosenCompany = "";

const numberOfPeopleElement = document.getElementById("početLidí")

numberOfPeopleElement.addEventListener('input', () => {
    numberOfPeople = parseInt(numberOfPeopleElement.value, 10)
 console.log(numberOfPeople)})

 const companyElement = document.getElementById("firma")

 companyElement.addEventListener('change', () =>{
    chosenCompany = companyElement.value;
 console.log(chosenCompany)})

 const buttonElement = document.getElementById("konečnéTlačítko")

 buttonElement.addEventListener('click', () =>{
    finalPrice()})
 
 
 const finalPrice = () => {
    if (chosenCompany === "FlavourHaven") {
        const finalPriceHaven = numberOfPeople*FlavourHavenPrice
        console.log(`Vybrali jste si Flavour Haven pro ${numberOfPeople} za ${finalPriceHaven}`)
    }
    else if (chosenCompany === "YourMama") {
        const finalPriceMama = numberOfPeople*YourMamaPrice
        console.log(`Vybrali jste si Your Mama pro ${numberOfPeople} za ${finalPriceMama}`)
    }
    else if (chosenCompany === "JustFood") {
        const finalPriceJust = numberOfPeople*JustFoodPrice 
        console.log(`Vybrali jste si Just Food pro ${numberOfPeople} za ${finalPriceJust}`)
    }
 }
 
 





