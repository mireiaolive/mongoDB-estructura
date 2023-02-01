db.collection("botiga").insert({
    _id: {
        $oid: "63da44310a9c511d2406bd44",
    },
    adreça: "Barrios de Triana",
    numero: 15,
    codi_postal: "08002",
    localitat: "Barcelona",
    provincia: "Barcelona",
});

db.collection("categoria").insert({
    _id: {
        $oid: "63da460e0a9c511d2406bd57",
    },
    nom: ["margarita", "napolitana", "champiñones", "calzone", "hawai"],
});

db.collection("client").insert({
    _id: {
        $oid: "63da36bc0a9c511d2406bd39",
    },
    nom: "Jaume",
    cognom: "Sanchez",
    adreça: "Regio Calabria",
    codi_postal: "09776",
    localitat: "Barcelona",
    provincia: "Barcelona",
    telefon: 644553344,
});

db.collection("comanda").insert({
    _id: {
        $oid: "63da382b0a9c511d2406bd3b",
    },
    data: "2012-04-23T18:25:43.511Z",
    repartiment: ["domicili", "botiga"],
    productes: 1,
    preu: 200,
});

db.collection("empleat").insert({
    _id: {
        $oid: "63da39b00a9c511d2406bd3d",
    },
    nom: "Fernando",
    cognom: "Sorolla",
    nif: 566778899,
    telefon: 677889987,
});

db.collection("producte").insert({
    _id: {
        $oid: "63da47260a9c511d2406bd59",
    },
    nom: "agua",
    descripcio: "Fontvella 100ml",
    imatge: "agua.jpg",
    preu: 3,
    tipo: ["pizzes", "hamburgueses", "begudes"],
});

db.collection("repartidor").insert({
    _id: {
        $oid: "63da499c0a9c511d2406bd5b",
    },
    nom: "Pedro",
    cognom: "Morales",
    data_hora: "2012-04-23T18:25:43.511Z",
});
