//use optica

db.proveidor.insertOne({
    _id: ObjectId("63dea99f6394164f0394ddc8"),
    nom: "Missandtrendy Sunglasses",
    carrer: "Carrer de Laforja",
    numero: 63,
    pis: 1,
    porta: 1,
    ciutat: "Barcelona",
    codi_postal: "08006",
    pais: "Espanya",
    telefon: 644547866,
    fax: 655447788,
    nif: 47787041,
    marca: { nom: "Converse" },
});

db.clients.insertOne({
    _id: ObjectId("63dea99f6394164f0394ddc9"),
    nom: "Marta Rigol",
    adreca_postal: "Verge de la Mercè",
    telefon: 655778899,
    email: "martrig44@gmail.com",
    created_at: new Date("12/12/2022"),
    recomanacio: "Cesar Gomez",
});

db.ulleres.insertOne({
    _id: ObjectId("63dea99f6394164f0394ddca"),
    marca: { nom: "Converse" },
    graduacio_r: 0.8,
    graduacio_l: 0.9,
    muntura: ["flotant", "pasta", "metalica"],
    color_muntura: "vermell",
    color_vidre_r: "transparent",
    color_vidre_l: "transparent",
    preu: 200,
    empleat: { nom: "Mario Delgado" },
});

db.empleat.insertOne({
    _id: ObjectId("63e011988d06ad1ceeda1fd0"),
    nom: "Mario",
});
