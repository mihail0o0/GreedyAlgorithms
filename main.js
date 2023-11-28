"use strict";
function test(uloge, k) {
    let broj = 0;
    let lopovi = [];
    // pomocni niz kako bih pamtio koji lopov je uhvacen
    for (let i = 0; i < uloge.length; i++) {
        if (uloge[i] == 'l') {
            lopovi[i] = 1;
        }
        else {
            lopovi[i] = 0;
        }
    }
    for (let i = 0; i < uloge.length; i++) {
        if (uloge[i] != 'p')
            continue; // gledamo samo za policajce
        // trazimo sleva na desno
        for (let j = -k; j <= k; j++) {
            if (i + j < 0 || i + j >= uloge.length)
                continue; // ako izlazimo van granica niza
            // proveravamo dal je tazena uloga lopov, i ako da hvatamo je
            if (lopovi[i + j] == 1) {
                lopovi[i + j] = 0;
                console.log(`Policajac sa indexom ${i} hvata lopova sa indexom ${i + j}`);
                broj++;
                break;
            }
        }
    }
    return broj;
}
const testArrays = [
    ['p', 'l', 'l', 'p', 'l'],
    ['l', 'l', 'p', 'p', 'l', 'p'],
    ['p', 'l', 'p', 'l', 'l', 'p']
];
const testKs = [1, 2, 3];
for (let i = 0; i < testArrays.length; i++) {
    console.log(testArrays[i]);
    console.log();
    console.log(`Policajci su uhvatili ${test(testArrays[i], testKs[i])} lopova`);
    console.log();
}
