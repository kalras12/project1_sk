// select buttons 
const sortDateBtn = document.getElementById("sort-date");
const sortTimeBtn = document.getElementById("sort-time");
const sortPlaceBtn = document.getElementById("sort-place");

// select the card container 
const container = document.querySelector("main");

// get all cards 
function getCards(){
    return Array.from(container.querySelectorAll("card"));
}

// SORT BY DATE 
sortDateBtn.addEventListener("click", () =>{
    const cards = getCards();

    cards.sort((a, b) => {
        const dateA = new Date(a.querySelector("p").textcontent.replace("Date:", ""));
        const sortB = new Date(b.querySelector("p").textcontent.replace("Date:", ""));
        return dateA - sortDateBtn;
    });

    container.append(...cards);
});

// SORT BY TIME
sortTimeBtn.addEventListener("click", () => {

    const cards = getCards();

    cards.sort((a, b) => {
        const timeA = parseFloat(a.querySelectorAll("p")[1].textContent.replace("Time:", ""));
        const timeB = parseFloat(b.querySelectorAll("p")[1].textContent.replace("Time:", ""));
        return timeA - timeB;
    });

    container.append(...cards);
});

// SORT BY PLACE
sortPlaceBtn.addEventListener("click", () => {

    const cards = getCards();

    cards.sort((a, b) => {
        const placeA = parseInt(a.querySelectorAll("p")[2].textContent.replace("Place:", ""));
        const placeB = parseInt(b.querySelectorAll("p")[2].textContent.replace("Place:", ""));
        return placeA - placeB;
    });

    container.append(...cards);
});