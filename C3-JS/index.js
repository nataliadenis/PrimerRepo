function calculatePrice(name, price){
    let ship;
    price > 0 && price < 2000? ship = 300: price <4000? ship=500 : ship = 700;
    console.log(`El producto ${name} cuesta ${price} . 
        Su costo de envío es de ${ship}. Por lo tanto, el precio final es de ${price+ship}`)
}

calculatePrice("mackbook",2500);

calculatePrice('Celular', 500);

calculatePrice('Playstation', 4500);