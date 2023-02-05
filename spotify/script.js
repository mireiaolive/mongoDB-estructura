//use spotify

db.usuari.insertOne({
    tipo: ["free", "premium"],
    email: "jorge@gmail.com",
    nom: "jor_81",
    naixament: new Date(12 / 03 / 1981),
    sexe: ["hombre", "mujer"],
    pais: "Grecia",
    codigo_postal: "09887",
});
