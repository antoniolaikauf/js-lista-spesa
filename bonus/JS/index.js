// creazione dell alista della spesa in un array

const araySpesa=["pomodori", "latte", "petto di pollo"] ;

// prendere elemento lista della spesa da html

const listaUl = document.getElementById("lista-spesa");

// creazione del loop while
let i=0;
while (i < araySpesa.length) {
    const itemsIesimo = araySpesa[i];
    let item= document.createElement("li");
    item.append(itemsIesimo)
    // farli leggere dentro html
    listaUl.append(item)
    // incremento
    i++
}