db.collection("proveidor").insert(
    {
        _id: {
            $oid: "63d98b2c0a9c511d2406bd2a",
        },
        nom: "Juan Carlos Sanchez",
        carrer: "Doctor Rizal",
        numero: 15,
        pis: 4,
        codi_postal: "08006",
        pais: "España",
        telefon: 644547866,
        fax: 655447788,
        nif: 47787041,
    },
    {
        _id: {
            $oid: "63d990430a9c511d2406bd2b",
        },
        nom: "Pere Sanchez Ribes",
        carrer: "Madrazo",
        numero: 19,
        pis: 4,
        codi_postal: "08906",
        pais: "Espanya",
        telefon: 775447866,
        fax: 666778899,
        nif: 4456743,
    }
);

db.collection("clients").insert({
    _id: {
        $oid: "63da28bb0a9c511d2406bd32",
    },
    nom: "Marta Rigol",
    adreca_postal: "Verge de la Mercè",
    telefon: 655778899,
    email: "miris@gmail.com",
    data_registre: "2017-08-22T06:11:00.000Z",
    recomanacio: "Montse Martí",
});

db.collection("ulleres").insert({
    _id: {
        $oid: "63da27f40a9c511d2406bd2f",
    },
    marca: "Tag Heuer",
    graduacio_r: 0.8,
    graduacio_l: 0.9,
    muntura: ["flotant", "pasta", "metalica"],
    color_muntura: "vermell",
    color_vidre_r: "transparent",
    color_vidre_i: "transparent",
    preu: 200,
});
