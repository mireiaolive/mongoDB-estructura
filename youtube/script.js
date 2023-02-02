db.collection("usuari").insert({
    _id: {
        $oid: "63da4d750a9c511d2406bd5f",
    },
    email: "mbrg@gmail.com",
    password: "G@#cj7ZE@jzu^8MX",
    nom: "Merche Sanchis",
    naixament: "30-12-1981",
    sexe: ["hombre", "mujer"],
    pais: "Grecia",
    codigo_postal: "09887",
});
db.collection("video").insert();
db.collection("playlist").insert();
db.collection("likeDislike").insert();
db.collection("canal").insert();
db.collection("comentari").insert();
