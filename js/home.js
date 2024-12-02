// Lista de eventos
const eventos = [
    { titulo: "Hackeando Estereotipos: Mujeres en Ciberseguridad", ubicacion: "Buenos Aires, Argentina", categoria: "Ciberseguridad", fecha: "2024-12-05", tipo: "Presencial", descripcion: "Un espacio para destacar el talento femenino en la protección de datos y redes.", imagen: "" },
    { titulo: "Inteligencia Artificial para Todos", ubicacion: "Buenos Aires, Argentina", categoria: "Inteligencia Artificial", fecha: "2024-12-10", tipo: "Online", descripcion: "Descubre cómo la IA transforma nuestra vida y cómo sumarte al cambio.", imagen: "" },
    { titulo: "Diseño Inclusivo: Tecnología para Todos", ubicacion: "Córdoba, Argentina", categoria: "Diseño", fecha: "2024-12-12", tipo: "Presencial", descripcion: "Aprende a diseñar experiencias accesibles e innovadoras.", imagen: "" },
    { titulo: "Soft Skills en Tecnología: Más Allá del Código", ubicacion: "Rosario, Argentina", categoria: "Tecnología", fecha: "2024-12-20", tipo: "Presencial", descripcion: "Habilidades interpersonales que impulsan tu carrera en el mundo tecnológico.", imagen: "" },
    { titulo: "Código Abierto, Mente Abierta", ubicacion: "Mendoza, Argentina", categoria: "Tecnología", fecha: "2025-01-15", tipo: "Online", descripcion: "Explorando el impacto de las comunidades de código abierto.", imagen: "" },
    { titulo: "Hardware Innovador: Construyendo el Futuro", ubicacion: "Mendoza, Argentina", categoria: "Tecnología", fecha: "2024-12-30", tipo: "Presencial", descripcion: "De los microchips a los dispositivos, descubre lo último en tecnología de hardware.", imagen: "" },
    { titulo: "Ciberseguridad en Tiempos de IA", ubicacion: "Buenos Aires, Argentina", categoria: "Ciberseguridad", fecha: "2024-11-29", tipo: "Online", descripcion: "Estrategias para proteger datos en un mundo dominado por la inteligencia artificial.", imagen: "" },
    { titulo: "Women Tech Leaders: Rompiendo Barreras", ubicacion: "La Plata, Argentina", categoria: "Tecnología", fecha: "2025-02-14", tipo: "Presencial", descripcion: "Historias de mujeres líderes que están transformando la tecnología.", imagen: "" },
    { titulo: "Diseño Digital: Creatividad en Acción", ubicacion: "Mar del Plata, Argentina", categoria: "Diseño", fecha: "2025-01-22", tipo: "Online", descripcion: "Herramientas y técnicas para destacar en el mundo del diseño digital.", imagen: "" },
    { titulo: "Habilidades del Futuro: Tecnología y Comunicación", ubicacion: "Tucumán, Argentina", categoria: "Tecnología", fecha: "2025-03-01", tipo: "Presencial", descripcion: "Cómo las soft skills complementan el dominio técnico.", imagen: "" },
    { titulo: "Código y Diversidad: Construyendo Juntos", ubicacion: "Salta, Argentina", categoria: "Tecnología", fecha: "2025-02-05", tipo: "Online", descripcion: "Taller colaborativo para fomentar la inclusión en el desarrollo de software.", imagen: "" },
    { titulo: "Software vs. Hardware: Sinergias Tecnológicas", ubicacion: "Rosario, Argentina", categoria: "Tecnología", fecha: "2025-04-10", tipo: "Presencial", descripcion: "Un análisis de cómo interactúan el software y el hardware en la era moderna.", imagen: "" },
    { titulo: "IA Ética: Programando con Responsabilidad", ubicacion: "Formosa, Argentina", categoria: "Inteligencia Artificial", fecha: "2025-01-18", tipo: "Presencial", descripcion: "Reflexionando sobre los dilemas éticos de la inteligencia artificial.", imagen: "" },
    { titulo: "Diseño y Emoción: Conexiones Humanas", ubicacion: "Tucumán, Argentina", categoria: "Diseño", fecha: "2024-12-01", tipo: "Online", descripcion: "Cómo el diseño puede provocar emociones y cambiar percepciones.", imagen: "" },
    { titulo: "IA Creativa: Explorando Nuevas Fronteras", ubicacion: "Buenos Aires, Argentina", categoria: "Inteligencia Artificial", fecha: "2025-05-05", tipo: "Presencial", descripcion: "Cómo la inteligencia artificial está revolucionando las industrias creativas.", imagen: "" },
    { titulo: "Diseño de Interfaces para Todos", ubicacion: "Córdoba, Argentina", categoria: "Diseño", fecha: "2025-05-05", tipo: "Online", descripcion: "Claves para crear productos digitales accesibles e intuitivos.", imagen: "" },
    { titulo: "Soft Skills para Equipos Tecnológicos", ubicacion: "Rosario, Argentina", categoria: "Tecnología", fecha: "2025-05-05", tipo: "Presencial", descripcion: "Comunicación y liderazgo efectivo en proyectos de desarrollo.", imagen: "" },
    { titulo: "Código Inclusivo: Innovando Sin Límites", ubicacion: "La Plata, Argentina", categoria: "Tecnología", fecha: "2025-05-05", tipo: "Online", descripcion: "Estrategias para integrar la accesibilidad en cada línea de código.", imagen: "" },
    { titulo: "Hardware Verde: Tecnología Sostenible", ubicacion: "Mendoza, Argentina", categoria: "Tecnología", fecha: "2025-05-05", tipo: "Presencial", descripcion: "Explorando el impacto ambiental de los dispositivos tecnológicos y sus soluciones.", imagen: "" },
];

// Referencias del DOM
const contenedorEventos = document.querySelector("#contenedor-eventos");
const selectCategoria = document.querySelector("#filtrar-categoria");
const buscador = document.querySelector("#filtrar-buscador")
const botonBuscar = document.querySelector(".search-button");

// Filtrar por buscador
function buscarEventos() {
    const query = buscador.value.toLowerCase();
    const eventosFiltrados = eventos.filter(evento => {
        return (
            evento.titulo.toLowerCase().includes(query) ||
            evento.descripcion.toLowerCase().includes(query) ||
            evento.ubicacion.toLowerCase().includes(query) ||
            evento.categoria.toLowerCase().includes(query) ||
            evento.tipo.toLowerCase().includes(query) ||
            evento.fecha.toLowerCase().includes(query)
        );
    });
    mostrarEventos(eventosFiltrados);
}

// Filtrar por select (tipo y categoría)
function filtrarPorSelect() {
    const categoria = selectCategoria.value;
    console.log(categoria);
    const eventosFiltrados = eventos.filter(evento => {
        return (
            (evento.categoria === categoria || evento.tipo === categoria)
        );
    });
    mostrarEventos(eventosFiltrados);
}

// Mostrar los eventos
function mostrarEventos(listaEventos) {
    contenedorEventos.innerHTML = ""; // Limpia busqueda
    listaEventos.forEach(evento => {
        const card = document.createElement("div");
        card.classList.add("col-md-6", "col-lg-4", "col-xl-3", "mb-4");
        card.innerHTML =
            `<div class="card h-100">
                <img src="${evento.imagen}" class="card-img-top" alt="${evento.titulo}">
                <div class="card-body">
                    <h5 class="card-title">${evento.titulo}</h5>
                    <p class="card-text">${evento.tipo} - ${evento.fecha}</p>
                    <p class="card-text">${evento.descripcion}</p>
                    <a href="#" class="btn btn-primary">Ver más</a>
                </div>
            </div>`
            ;
        contenedorEventos.appendChild(card);
    });
}

// Eventos de filtro
buscador.addEventListener("input", buscarEventos);
selectCategoria.addEventListener("change", filtrarPorSelect);