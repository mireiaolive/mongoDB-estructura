//use youtube

db.usuari.insertOne({
    email: "mbrg@gmail.com",
    password: "G@#cj7ZE@jzu^8MX",
    nom: "mer_81",
    naixament: "30-12-1981",
    sexe: ["hombre", "mujer"],
    pais: "Grecia",
    codigo_postal: "09887",
});

db.video.insertOne({
    titol: "Michael Jackson",
    descripcio: "Michael Jackson - Billie Jean (Official Video)",
    grandaria: "8K",
    nom_arxiu: "mj",
    thumbnail: "mj",
    reproducions: "2000",
    likes: 200,
    dislikes: 200,
    estat: ["public", "ocult", "privat"],
    publicacio: new Date(12 / 03 / 2023),
    etiqueta: { nom: "pop" },
});

db.canal.insertOne({
    nom: "pop",
    descripcio: "Best pop hits",
    publicacio: new Date(12 / 03 / 2023),
});

db.comentari.insertOne({
    text: "Pop Music Playlist 2022 Top Hits 2022 New Music 2022 Top Pop Songs Playlist. Enjoy the Top 40 Hits",
    created_at: new Date(02 / 08 / 2000),
});

db.comentari_like.insertOne({
    created_at: new Date(02 / 08 / 2000),
});

db.playlist.insertOne({
    nom: "pop",
    created_at: new Date(02 / 08 / 2000),
    estat: ["public", "privat"],
});
