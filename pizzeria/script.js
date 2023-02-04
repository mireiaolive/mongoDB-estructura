db.client.insertOne({
    nom: "Jaume",
    cognom: "Sanchez",
    adreça: "Regio Calabria",
    codi_postal: "09776",
    localitat: "Barcelona",
    provincia: "Barcelona",
    telefon: 644553344,
});

db.comanda.insertOne({
    created_at: new Date("12/12/2022"),
    repartiment: ["domicili", "botiga"],
    productes: 1,
    preu: 20,
});

db.producte.insertOne({
    nom: "agua",
    descripcio: "Fontvella 100ml",
    imatge: "agua.jpg",
    preu: 3,
    tipo: ["pizzes", "hamburgueses", "begudes"],
});

db.categoria.insertOne({
    nom: ["margarita", "napolitana", "champiñones", "calzone", "hawai"],
});

db.botiga.insertOne({
    adreça: "Barrios de Triana",
    numero: 15,
    codi_postal: "08002",
    localitat: "Barcelona",
    provincia: "Barcelona",
});

db.empleat.insertOne({
    nom: "Fernando",
    cognoms: "Sorolla Pozo",
    nif: 566778899,
    telefon: 677889987,
});

db.repartidor.insertOne({
    nom: "Pedro",
    cognom: "Morales",
    created_at: new Date("12/12/2022"),
});
