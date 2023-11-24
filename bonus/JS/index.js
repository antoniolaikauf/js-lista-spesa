// creazione dell alista della spesa in un array

const arraySpesa=["pomodori", "latte", "petto di pollo"] ;
// prendere elemento lista della spesa da html

const listaUl = document.getElementById("lista-spesa");

// prendere elemento da input 
let itemsPersonale =document.getElementById("prodotto-personale");

// aggiungere evento per mettere item scelto entro lista
let button = document.getElementById("aggiungi");
button.addEventListener("click", function () {
    // item scelto dall'utente
    let valore = itemsPersonale.value;
    let itemUtente= document.createElement("li");
    itemUtente.append(valore);
    listaUl.append(itemUtente);
    // svuotamento dell'input
    itemsPersonale.value="";
})

// creazione del loop while
let i=0;
while (i < arraySpesa.length) {
    const itemsIesimo = arraySpesa[i];
    let item= document.createElement("li");
    item.append(itemsIesimo)
    // farli leggere dentro alla lista
    listaUl.append(item)
    // incremento
    i++
}