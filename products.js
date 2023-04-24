const products = [
    {
        title: "Camiseta Barcelona Fc",
        price: 200.000,
        Image: "/img/barcelona.jpg",
        description: "A nivel de diseño, la camiseta se compone de franjas verticales que combinan el azul y granate tradicionales con un azul más oscuro. Las líneas, eso sí, no cubren la totalidad de la camiseta, como era habitual, sino que los hombros y el cuello son de color azul oscuro liso.",
        category: 'camisetas',
        stock: 40,
        rating: {
            rate: 5,
            count: 10
        }
    },
    {
        title: "Camiseta Real Madrid",
        price: 250.000,
        Image: "/img/realmadrid.jpg",
        description: "El blanco se combina con la vuelta del púrpura a la equipación, que aparece en las tres franjas de adidas sobre los hombros. Este color también está presente en el detalle del cuello con botones que combina negro y morado con dos finas líneas. Otros detalles son el escudo en blanco por toda la camiseta y un logotipo especial en el interior del cuello para celebrar los 120 años del Real Madrid",
        category: 'camisetas',
        stock: 40,
        rating: {
            rate: 4.2,
            count: 10
        }
    },
    {
        title: "Camiseta Liverpool ",
        price: 300.000,
        Image: "/img/liverpool.jpg",
        description: "La nueva camiseta de Liverpool se la juega por un look que combina la tradicional base roja con aplicaciones en salmón, prominentes en cuello, puños y el patrón de rayos delgados que adorna toda la superficie de la prenda en referencia a la temporada 1964, cuando portaron uniforme completamente rojo por primera vez al ser “un color poderoso”, en palabras de Bill Shankly.",
        category: 'camisetas',
        stock:40,
        rating: {
            rate: 4.6,
            count: 10
        }
    },
    {
        title: "Camiseta chelsea Fc",
        price: 400.000,
        Image: "/img/chelsea.png",
        description: "La nueva camiseta de Chelsea combina diseños de zig zag irregulares con cuadros ondeantes en un gráfico que ocupa toda la superficie de la prenda, inspirado por los años 60. El cuello V cruzado es azul sólido, con las iniciales del club adornando la zona posterior. El escudo del club se aplica en sus colores oficiales, acompañado por el logo de Nike en amarillo neón y los sponsors en blanco. Las tiras laterales también van en amarillo neón.",
        category: 'camisetas',
        stock:40,
        rating: {
            rate: 4.0,
            count: 10
        }
    },
    {
        title: "Camiseta manchester city",
        price: 350.000,
        Image: "/img/manchestercity.jpg",
        description: "Calce regular, Escote en V y mangas raglán, Con la marca ETIHAD en el pecho, Escudo oficial del MCFC bordado en la parte izquierda del pecho, Logo de PUMA Cat en el costado derecho del pecho, Franja característica PUMA sobre el hombro con la marca de PUMA en cada hombro, Logo de PUMA Cat en el costado derecho del pecho, Franja característica PUMA sobre el hombro con la marca de PUMA en cada hombro, dryCELL: denominación de PUMA debido a las propiedades absorbentes de la humedad, que te ayudan a mantenerte seco y cómodo.",
        category: 'camisetas',
        stock: 40,
        rating: {
            rate: 3.8,
            count: 10
        }
    },
    {
        title: " Camiseta manchester united",
        price: 550.000,
        Image: "/img/manchesterunited.jpg",
        description: "Orgullosos de sus raíces. Si miras de cerca, verás que la  de la ciudad natal del Manchester United se ha entretejido en los diseños de algunos de los kits más memorables del club. Esta camiseta de fútbol adidas retoma ese hilo y luce un diseño abstracto y contemporáneo que evoca una camiseta clásica de principios de los 90. Diseñada para hinchas, esta camiseta brinda comodidad en todo momento gracias a su tejido suave con tecnología de absorción AEROREADY. El escudo tejido destaca tu amor profundo por el Manchester United.",
        category: 'camisetas',
        stock:40,
        rating: {
            rate: 4.9,
            count: 10
        }
    },
    {
        title: "Camiseta de Arsenal Fc ",
        price: 700.000,
        Image: "/img/arsenal.jpg",
        description: "Camiseta Arsenal Nike color rojo, blanco y azul, confeccionada en algodón, tiene cuello redondo en tejido rib, mangas cortas, finas costuras de refuerzo en sus terminaciones, a la altura del pecho posee el swoosh característico de la marca en color blanco resaltando la confección de la prenda, en la zona inferior lleva la marquilla con el escudo del equipo de fútbol. ",
        category: 'camisetas',
        stock:40,
        rating: {
            rate: 4.1,
            count: 10
        }
    },
    {
        title: "Camiseta Juventus ",
        price: 650.000,
        Image: "/img/juventus.jpg",
        description: "El equipo de las rayas y las estrellas emprende un nuevo viaje. Esta camiseta de visitante adidas de la Juventus fusiona dos símbolos que nunca faltan en los partidos jugados en casa. Su llamativo diseño monocromático incluye rayas negras formadas por estallidos de estrellas. Los paneles de malla y la tecnología de absorción AEROREADY se encargan de mantener a los hinchas siempre cómodos.",
        category: 'camisetas',
        stock:40,
        rating: {
            rate: 5,
            count: 10
        }
    },
    {
        title: "Guayos Real madrid",
        price: 650.000,
        Image: "/img/guayos.jpg",
        description: "Los guayos de fútbol adidas X 19.3 están diseñados para jugadores que buscan un toque de precisión y un control total del balón. Estos guayos de fútbol para superficies blandas tienen una parte superior de malla transpirable y una suela de goma que te ofrece tracción en superficies blandas. El diseño de la suela te permite jugar en cualquier superficie.",
        category: 'guayos',
        stock:40,
        rating: {
            rate: 4.5,
            count: 10
        }
    },
    {
        title: "Guayos Nike Mercurial",
        price: 650.000,
        Image: "/img/guayos2.jpg",
        description: "Los guayos de fútbol Nike Mercurial Vapor 13 Academy MG para superficies blandas están diseñados para jugadores que buscan un toque de precisión y un control total del balón. Estos guayos de fútbol para superficies blandas tienen una parte superior de malla transpirable y una suela de goma que te ofrece tracción en superficies blandas. El diseño de la suela te permite jugar en cualquier superficie.",
        category: 'guayos',
        stock:40,
        rating: {
            rate: 4.5,
            count: 10
        }
    },
    {
        title: "Guayos Nike Mercurial",
        price: 650.000,
        Image: "/img/guayos3.jpg",
        description: "Los guayos de fútbol Nike Mercurial Vapor 13 Academy MG para superficies blandas están diseñados para jugadores que buscan un toque de precisión y un control total del balón. Estos guayos de fútbol para superficies blandas tienen una parte superior de malla transpirable y una suela de goma que te ofrece tracción en superficies blandas. El diseño de la suela te permite jugar en cualquier superficie.",
        category: 'guayos',
        stock:40,
        rating: {
            rate: 4.5,
            count: 10
        }

    },
    {
        title: "Guayos Nike Mercurial",
        price: 650.000,
        Image: "/img/guayos4.jpg",
        description: "Los guayos de fútbol Nike Mercurial Vapor 13 Academy MG para superficies blandas están diseñados para jugadores que buscan un toque de precisión y un control total del balón. Estos guayos de fútbol para superficies blandas tienen una parte superior de malla transpirable y una suela de goma que te ofrece tracción en superficies blandas. El diseño de la suela te permite jugar en cualquier superficie.",
        category: 'guayos',
        stock:40,
        rating: {
            rate: 4.5,
            count: 10
        }
    },
    {
        title: "Guayos umbro",
        price: 650.000,
        Image: "/img/guayos5.jpg",
        description: "Los guayos de fútbol Umbro Velocita III Pro FG para superficies firmes están diseñados para jugadores que buscan un toque de precisión y un control total del balón. Estos guayos de fútbol para superficies firmes tienen una parte superior de malla transpirable y una suela de goma que te ofrece tracción en superficies firmes. El diseño de la suela te permite jugar en cualquier superficie.",
        category: 'guayos',
        stock:40,
        rating: {
            rate: 4.5,
            count: 10
        }
    },
    {
        title: "Guayos puma",
        price: 650.000,
        Image: "/img/guayos6.jpg",
        description: "Los guayos de fútbol Puma One 19.3 FG para superficies firmes están diseñados para jugadores que buscan un toque de precisión y un control total del balón. Estos guayos de fútbol para superficies firmes tienen una parte superior de malla transpirable y una suela de goma que te ofrece tracción en superficies firmes. El diseño de la suela te permite jugar en cualquier superficie.",
        category: 'guayos',
        stock:40,
        rating: {
            rate: 4.5,
            count: 10
        }
    },
    {
        title: "Guayos newbalance",
        price: 650.000,
        Image: "/img/guayos7.jpg",
        description: "Los guayos de fútbol New Balance Furon 3.0 Pro FG para superficies firmes están diseñados para jugadores que buscan un toque de precisión y un control total del balón. Estos guayos de fútbol para superficies firmes tienen una parte superior de malla transpirable y una suela de goma que te ofrece tracción en superficies firmes. El diseño de la suela te permite jugar en cualquier superficie.",
        category: 'guayos',
        stock:40,
        rating: {
            rate: 4.5,
            count: 10
        }
    },
    {
        title: "Guayos Adidas ",
        price: 650.000,
        Image: "/img/guayos8.jpg",
        description: "Los guayos de fútbol adidas X 19.3 están diseñados para jugadores que buscan un toque de precisión y un control total del balón. Estos guayos de fútbol para superficies blandas tienen una parte superior de malla transpirable y una suela de goma que te ofrece tracción en superficies blandas. El diseño de la suela te permite jugar en cualquier superficie.",
        category: 'guayos',
        stock:40,
        rating: {
            rate: 4.5,
            count: 10
        }
    },

]
console.log(products)
export default products