let macForm = {
    "oradores": {
        "steve.jpg": ["https://dainnin.github.io/HTMLPubM/imgIntegrador/steve.jpg",
            "Steve Jobs",
            "Steve Jobs es ampliamente reconocido como uno de los oradores públicos más efectivos de su tiempo. Era famoso por su atención rigurosa a cada detalle en sus presentaciones, desde el estilo de las fuentes en sus diapositivas hasta el color del fondo del escenario. Su habilidad para contar historias apasionantes y hacer demostraciones memorables le permitió presentar ideas complejas de manera clara y sencilla",
            "https://www.biografiasyvidas.com/biografia/j/jobs.htm"
        ],

        "bill.jpg": ["https://dainnin.github.io/HTMLPubM/imgIntegrador/bill.jpg",
            "Bill Gates",
            `Bill Gates es conocido por su capacidad para hablar sobre desafíos
    globales de manera comprensible y memorable. Ha participado en numerosas
     charlas y entrevistas, abordando temas como la salud global, la evasión 
     fiscal corporativa, la guerra de robots, la filantropía y las redes sociales.
      Su estilo de presentación es detallado y bien preparado, lo que refleja su 
      enfoque metódico y su pasión por los temas que discute.`,
            "https://www.biografiasyvidas.com/biografia/g/gates.htm"
        ],
        "ada.jpeg": ["https://dainnin.github.io/HTMLPubM/imgIntegrador/ada.jpeg",
            "Ada Lovelace",
            "Aunque no hay registros específicos de Ada Lovelace como oradora pública, se sabe que era una comunicadora efectiva. Su trabajo en la máquina analítica de Charles Babbage demostró su habilidad para entender y explicar conceptos complejos. Además, sus habilidades lingüísticas y creativas fueron fundamentales en su invención de la programación informática",
            "https://psicologiaymente.com/biografias/ada-lovelace"
        ]
    },
    "banner": {
        "ba1.jpg": "https://dainnin.github.io/HTMLPubM/imgIntegrador/ba1.jpg",
        "ba2.jpg": "https://dainnin.github.io/HTMLPubM/imgIntegrador/ba2.jpg",
        "ba3.jpg": "https://dainnin.github.io/HTMLPubM/imgIntegrador/ba3.jpg"
    },

    "descript":
    {
        "honolulu": "https://dainnin.github.io/HTMLPubM/imgIntegrador/honolulu.jpg"
    },

}
cElement('link', {
    rel: "stylesheet",
    href: "./vistas/contenidoIndex.css"
},
    " ",
    'beforeend', 1
)
//Header Creacion

const navC = cElement('nav',
    {
        id: 'navC',
        style: `background-Image: url(${macForm.banner["ba1.jpg"]});
    background-Size: 100%; 
    background-Repeat: no-repeat;`
    },
    `
        ${HeaderC.outerHTML}     
<div id='banner'>
<div>
<h1>Conf Bs As</h1>
<p><strong>Bs As llega por primera vez a Argentina. Un evento para compartir con nuestra comunidad el
 conocimiento y expreriencia delos expertos que estan creando el futuro de Internet. Ven a 
 conocer a mienmbros del evento, a otros estudiantes de Codo a Codo y los oradores del primer 
 nivel que tenemos para. Te esperamos</strong></p>
<a class="btn btn-outline-light" href="">Quiero ser orador</a>
<a class="btn btn-primary" href="">Comprar tickets</a>
</div>
</div>
    `,
    'afterbegin', 0
);



//Fin Header Creacio

//Creacion de Card Oradores

let oradores = Object.values(macForm.oradores).map(Esquema =>
    `<article class='card'> 
        <picture><img class='card-img-top' src="${Esquema[0]}" alt=""></picture>
        <div class='card-body'>
         <h4 class='card-title'>${Esquema[1]}</h4>
         <p class='card-text'>${Esquema[2]}</p>
         </div> 
         <a class='btn btn-primary' href="${Esquema[3]}">Mas Info</a>
         </article>
         `
).join(' ');

cElement('section', {}, ` 
      <p>CONOCE A LOS</p>
      <h4>ORADORES</h4>
      <div id="oradores">
      ${oradores}
      </div>
      `,
    'beforeend', 0)

//Fin de Card Oradores

//Estructura de Datos extra
cElement('div', { id: 'descript', className: "descript", },
    `  
    <span ><img src="${macForm.descript.honolulu}" alt=""></span>
    <article>
            <h1>Bs As - Octubre</h1>
    <p>Buenos Aires es la provincia y localidad más grande del estado
        de Argentina, en los Estados Unidos, Honolulu es la 
        maś sureña de entre las principales ciudades estadounidenses.
         Aunque el nombre Honolulu se refiere al área urbana en la costa sureste de la isla 
         de Oahu, la ciudad y el condado de Honolulu
         han formado una ciudad-condado consolidada
         que cubre toda la ciudad(aproximadamente 600km<sup>2</sup>).
       
    </p>
    <a href="">Conocè màs</a>
    </article>
    `,
    'beforeend', 0)

cElement('form',
    {
        action: 'Contacto',
        method: 'post',
        className: 'form',
        id: 'oradoresC',
    },
    `
      <div>
          <p>CONVIÈRTETE EN UN</p>
      
          <h1>ORADOR</h1>
          <p>Anótate como orador para dar una <strong><u>Charla ignite.</u> </strong>¡Cuéntanos de qué quieres hablar!
          </p>
      </div>
      <div><input type="text" placeholder="Nombre"><input type="text" placeholder="Apellido"></div>
      <div><textarea name="Contacto" id="" placeholder="¿Sobre qué quieres hablar?"></textarea>
      </div>
      <p>Recuerda incluir un título para tu charla</p>
      <input class='btn btn-lg btn-form' type="button" value="Enviar">
      `,
    'beforeend', 0)


//Fin

const banners = document.getElementsByClassName('btn-outline-light')[0]

banners.addEventListener('mouseover', () =>
    banners.style = 'color: black !important;'
)
banners.addEventListener('mouseout', () =>
    banners.style = 'color: bisque !important;'
)


