//use pizzeria

db.client.insertOne({
    _id: ObjectId("63deb2c48d06ad1ceeda1fbe"),
    nom: "Jaume",
    cognom: "Sanchez",
    adreça: "Regio Calabria",
    codi_postal: "09776",
    localitat: "Barcelona",
    provincia: "Barcelona",
    telefon: 644553344,
});

db.comanda.insertOne({
    _id: ObjectId("63deb2c48d06ad1ceeda1fbf"),
    created_at: new Date("12/12/2022"),
    repartiment: ["domicili", "botiga"],
    productes: 1,
    preu: 20,
});

db.producte.insertOne({
    _id: ObjectId("63deb2c58d06ad1ceeda1fc0"),
    nom: "agua",
    descripcio: "Fontvella 100ml",
    imatge: "agua.jpg",
    preu: 3,
    tipo: ["pizzes", "hamburgueses", "begudes"],
});

db.categoria.insertOne({
    _id: ObjectId("63deb2c58d06ad1ceeda1fc1"),
    nom: ["margarita", "napolitana", "champiñones", "calzone", "hawai"],
});

db.botiga.insertOne({
    _id: ObjectId("63deb2c58d06ad1ceeda1fc2"),
    adreça: "Barrios de Triana",
    numero: 15,
    codi_postal: "08002",
    localitat: "Barcelona",
    provincia: "Barcelona",
});

db.empleat.insertOne({
    _id: ObjectId("63deb2c58d06ad1ceeda1fc3"),
    nom: "Fernando",
    cognoms: "Sorolla Pozo",
    nif: 566778899,
    telefon: 677889987,
});

db.repartidor.insertOne({
    _id: ObjectId("63deb2c78d06ad1ceeda1fc4"),
    nom: "Pedro",
    cognom: "Morales",
    created_at: new Date("12/12/2022"),
});
