

cElement('link', {
    rel: "stylesheet",
    href: "./vistas/contenidoIndex.css"
},
    " ",
    'afterbegin', 1
)
llamarObjeto().then((obJSON) => {

    //Header Creacion

    const navC = cElement('nav',
        {
            style: `background-Image: url(${obJSON.banner["ba1.jpg"]});
    background-Size: 100%; 
    background-Repeat: no-repeat;`
        },
        `
    <header>
    <picture>
    <a href=""><img src="${Object.values(obJSON.logoNav)}" alt="asdas">
    </a>
    <h4>Conf Bs As</h4>
    </picture>
    <menu>
    ${menHeader}
    </menu>
    </header>
    
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

    let oradores = Object.values(obJSON.oradores).map(Esquema =>
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

    cElement('section', "", ` 
      <p>CONOCE A LOS</p>
      <h4>ORADORES</h4>
      <div id="oradores">
      ${oradores}
      </div>
      `,
        'beforeend', 0)

    //Fin de Card Oradores

    //Estructura de Datos extra
    cElement('div', { id: 'descript' },
        `  
    <span><img src="${obJSON.descript.honolulu}" alt=""></span>
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
            method: 'post'
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
      <input type="button" value="Enviar">
      `,
        'beforeend', 0)

    cElement('footer',
        "",
        footerALink,
        'beforeend', 0
    )
    //Fin

    const banners = document.getElementById('banner').getElementsByTagName('a')[0]

    banners.addEventListener('mouseover', () =>
        banners.style = 'color: black !important;'
    )
    banners.addEventListener('mouseout', () =>
        banners.style = 'color: bisque !important;'
    )
}//Fin obJSON

)//Fin funcion