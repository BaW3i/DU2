
/* podle zadání */

const FlavourHavenPrice = 750  ; //cena člověk
const YourMamaPrice = 500 ;
const JustFoodPrice = 350 ;

const HavenPicked = (numberOfPeople) => {
    const havenOrder = numberOfPeople*FlavourHavenPrice;
    return `you picked Flavour Haven for ${havenOrder} for ${numberOfPeople}`
}

const YourPicked = (numberOfPeople) => {
    const yourOrder = numberOfPeople* YourMamaPrice;
    return `you picked Your Mama for ${yourOrder} for ${numberOfPeople}`
}

const JustPicked = (numberOfPeople) => {
    const justOrder = numberOfPeople*JustFoodPrice;
    return `you picked Just Food for ${justOrder} for ${numberOfPeople}`
}

const createEvent = (specialDay, numberOfPeople, JustPicked) => {
    const cateringMessage = JustPicked(numberOfPeople);
    return `For ${specialDay} ${cateringMessage} people`
}

console.log(createEvent("Inaugurace prezidenta", 100, HavenPicked));
console.log(createEvent("Firemní večírek", 50, YourPicked));
console.log(createEvent("Dětská oslava", 30, JustPicked));



/* tohle je to samé zadání ale s formulářem pro příchozího člověka do mé smyšlené internetové platformy "CatBooking" (catering booking) poskytující 
výběr z několika cateringových firem najednou

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
 
 /*
 co by se tu mohlo změnit: 
 -omezení na počet osob, kterým se dělá catering
     - buď plošně dané limity platformy nebo každá příchozí cateringová firma mé platformě řekne, kolik max zvládne lidí
- nebude možné zadat 0 osob
- co když nějaký fiškus zadá počet osob jako 09 a ne 9?
- když mám závislý addEventListener na 'change' a jednu z možností v meníčku "vyberte firmu", nebude se mi to na tom kousat? - zabezpečit
- vytvořit meníčko s významnými dny, které dají slevu nebo příplatek plošně k normální ceně
- od koho probůh beru objednávky? - kontaktní údaje by mohly být posbírány
- možnost "přidejte k objednávce poznámku"
- po dokončení celé registrace objednávky už nemůžu klikat na odeslání znovu a hromadit tak kopie objednávek - přesměrování na jinou stránku?
- chápu jen mlhavě, donajít: nemají náhodou eventListenery počkat na naběhnutí celé stránky a až pak začít dealovat? - pokud jo, zabezpečit


     */
*/



