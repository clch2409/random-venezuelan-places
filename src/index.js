const places = [
  { nombre: "Salto Ángel", link: "https://es.wikipedia.org/wiki/Salto_%C3%81ngel" },
  { nombre: "Parque Nacional Morrocoy", link: "https://es.wikipedia.org/wiki/Parque_Nacional_Morrocoy" },
  { nombre: "Los Roques", link: "https://es.wikipedia.org/wiki/Archipi%C3%A9lago_Los_Roques" },
  { nombre: "Roraima", link: "https://es.wikipedia.org/wiki/Roraima" },
  { nombre: "Gran Sabana", link: "https://es.wikipedia.org/wiki/Gran_Sabana" },
  { nombre: "Isla de Margarita", link: "https://es.wikipedia.org/wiki/Isla_de_Margarita" },
  { nombre: "Médanos de Coro", link: "https://es.wikipedia.org/wiki/Parque_Nacional_Los_M%C3%A9danos_de_Coro" },
  { nombre: "Canaima", link: "https://es.wikipedia.org/wiki/Parque_Nacional_Canaima" }
];
const beatifullPlaces = () => {
  const randomPlace = places[Math.floor(Math.random() * places.length)];
  const message = `${randomPlace.nombre} -- link de Wikipedia: ${randomPlace.link}`;
  console.log(`\x1b[34m${message}\x1b[89m`);
}

module.exports = {
  beatifullPlaces
};