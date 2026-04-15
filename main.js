const mainHeading = document.querySelector("#main-heading");
console.log(mainHeading);

const introParagraph =document.querySelector(".intro-paragraph");
console.log(introParagraph);
const allParagraphs =document.querySelectorAll(".intro-paragraph");
console.log(allParagraphs);

// Seleccting the second paragraph options;
const secondParagraph = allParagraphs[1];
console.log(secondParagraph);

const secondParagraphByNthChild = document.querySelector("p:nth-child(1)");
console.log(secondParagraphByNthChild);

// Using getElementById
const mainHeadingById =document.getElementById("main-heading");
console.log(mainHeadingById);

const introParagraphByClassName =document.getElementsByClassName("intro-paragraph");
console.log(introParagraphByClassName);

// Manipulating the DOM
mainHeading.textContent = "Hello, Java Script in the DOM!";
mainHeading.style.color = "Green";
mainHeading.style.fontsize = "54px";

//Event handling
//Events: are actions which occur in the browser
//Examples of events
// 1. Click event, 2. Mouseover event, 3. Keydown event,
// 4. Input event, 5. Submit event

const changeButton = document.querySelector("#change-paragraph");
changeButton.addEventListener("click", function () {
    secondParagraph.textContent = "Paragraph has been changed!";
    secondParagraph.style.color = "Red";
    secondParagraph.style.fontsize = "24px";
})
