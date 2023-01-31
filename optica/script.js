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

db.collection("clients").insert();
db.collection("ulleres").insert();
