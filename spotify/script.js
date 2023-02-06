db.usuari.insertOne({
    _id: ObjectId("63dff2a58d06ad1ceeda1fca"),
    tipo: ["free", "premium"],
    email: "jorge@gmail.com",
    password: "abcdefgh",
    nom_usuari: "jorge_41",
    data_naixament: new Date(12 / 01 / 1990),
    sexe: ["hombre", "mujer"],
    pais: "Grecia",
    codigo_postal: "09887",
});

db.subscripcio.insertOne({
    _id: ObjectId("63dff2a58d06ad1ceeda1fcb"),
    data_inici: new Date(12 / 04 / 2021),
    data_renovacio: new Date(12 / 04 / 2025),
    n_ordre: 1,
    pagament_tagreta: [
        {
            numero: 1234567,
            caducitat: new Date(18 / 11 / 2022),
            codi_seguretat: 234,
        },
    ],
    pagament_paypal: [{ usuari: "jorge_32" }],
    total: 100,
});

db.playlist.insertOne({
    _id: ObjectId("63dff2a58d06ad1ceeda1fcc"),
    titol: "90s Hits",
    n_cancons: 20,
    created_at: new Date(12 / 04 / 2021),
    delated: false,
    activa: true,
    compartida: [{ created_at: new Date(1 / 09 / 2020) }],
});

db.canco.insertOne({
    _id: ObjectId("63dff2a58d06ad1ceeda1fcd"),
    titol: "90s Hits",
    durada: "2.00",
    reproduccions: "33",
});

db.album.insertOne({
    _id: ObjectId("63dff2a58d06ad1ceeda1fce"),
    titol: "90s Hits",
    publicacio: "1999",
    image: "bad.jpg",
});

db.artista.insertOne({
    _id: ObjectId("63dff2a68d06ad1ceeda1fcf"),
    nom: "Michael Jackson",
    image: "michael.jpg",
    follow: true,
});
