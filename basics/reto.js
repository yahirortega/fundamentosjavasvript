function distributeGifts(packOfGifts, reindeers) {
    const numregalos = packOfGifts.map(gift => gift.length);
    const pesoregalos = numregalos.reduce((a,b) => a+b);
    const numrenos = reindeers.map(reno => reno.length * 2);
    const pesorenos = numrenos.reduce((a,b) => a+b);

    
    console.log(packOfGifts);
    console.log(numregalos);
    console.log(pesoregalos);
    console.log(reindeers);
    console.log(numrenos);
    console.log(pesorenos);

    
   return Math.floor(pesorenos/pesoregalos);
}



const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

distributeGifts(packOfGifts, reindeers) // 2