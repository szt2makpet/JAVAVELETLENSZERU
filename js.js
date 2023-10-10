const hetnapjai = ["hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat", "vasárnap"];

const randomIndex0 = 2;

const ujTomb = [hetnapjai[randomIndex0]];

const randomIndex1 = 5;

ujTomb.push(hetnapjai[randomIndex1]);
hetnapjai.splice(randomIndex1, 1);

const randomIndex2 = 1;

ujTomb.push(hetnapjai[randomIndex2]);
hetnapjai.splice(randomIndex2, 1);

const randomIndex3 = 0;

ujTomb.push(hetnapjai[randomIndex3]);
hetnapjai.splice(randomIndex3, 1);

const randomIndex4 = 2;

ujTomb.push(hetnapjai[randomIndex4]);
hetnapjai.splice(randomIndex4, 1);

const randomIndex5 = 0;

ujTomb.push(hetnapjai[randomIndex5]);
hetnapjai.splice(randomIndex5, 1);

console.log("Új tömb:", ujTomb);
console.log("Eredeti tömb maradék elemei:", hetnapjai);
