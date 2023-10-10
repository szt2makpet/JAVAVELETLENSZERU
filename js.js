const hetnapjai = ["hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat", "vasárnap"];

const ranIndex = 2;

const tomb = [hetnapjai[ranIndex]];

const seged = 5;

tomb.push(hetnapjai[seged]);
hetnapjai.splice(seged, 1);

const seged2 = 1;

tomb.push(hetnapjai[seged2]);
hetnapjai.splice(seged2, 1);

const seged3 = 0;

tomb.push(hetnapjai[seged3]);
hetnapjai.splice(seged3, 1);

const seged4 = 2;

tomb.push(hetnapjai[seged4]);
hetnapjai.splice(seged4, 1);

const seged5 = 0;

tomb.push(hetnapjai[seged5]);
hetnapjai.splice(seged5, 1);

console.log("Új tömb:", tomb);
console.log("Eredeti tömb maradék elemei:", hetnapjai);
