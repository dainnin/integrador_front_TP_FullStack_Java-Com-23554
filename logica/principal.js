
const url = './imgList.json';
async function llamarObjeto() {
    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        if (respuesta.status === 200) {
            return datos;
        } else {
            console.log('Posible error');
        };
    } catch (error) {
        console.log(error.message);
    };
};


//Creacion del contenido

llamarObjeto().then((obJSON) => {
 
//Header Creacion

const navC=document.createElement('nav')
navC.style.backgroundImage=`url(${obJSON.banner["ba1.jpg"]})`
navC.style.backgroundSize='100%'
navC.style.backgroundRepeat='no-repeat'
document.body.insertAdjacentElement('afterbegin',navC)

const headerC=document.createElement('header')
   
headerC.innerHTML=`
<picture>
<a href=""><img src="${Object.values(obJSON.logoNav)}" alt="asdas">
</a>
<h4>Conf Bs As</h4>
</picture>
`
navC.appendChild(headerC)

const menHeader = document.createElement('menu')
for(i=0;i<Object.keys(obJSON.header.aLink).length;++i){
    menHeader.innerHTML+=`
    <a href="${obJSON.header.aLink[i][1]}">${obJSON.header.aLink[i][0]}</a>
       `
}

 headerC.appendChild(menHeader)

 //Fin

 //Creacion del banner
const banners = document.createElement('div')


 const elemBanner=document.createElement('div')

 elemBanner.innerHTML=`
 <h1>Conf Bs As</h1>
 <p><strong>Bs As llega por primera vez a Argentina. Un evento para compartir con nuestra comunidad el
  conocimiento y expreriencia delos expertos que estan creando el futuro de Internet. Ven a 
  conocer a mienmbros del evento, a otros estudiantes de Codo a Codo y los oradores del primer 
  nivel que tenemos para. Te esperamos</strong></p>
 <a class="btn btn-outline-light" href="">Quiero ser orador</a>
 <a class="btn btn-primary" href="">Comprar tickets</a>
 `
 banners.setAttribute('id','banner')
 banners.appendChild(elemBanner)
 navC.appendChild(banners)     
    //Fin

    //Fin Header Creacio

  //Creacion de Card Oradores
const secOradores=document.createElement('section')
secOradores.innerHTML=` 
    <p>CONOCE A LOS</p>
    <h4>ORADORES</h4>
    <div id="oradores">
    `
document.body.appendChild(secOradores)

    for(i=0;i<Object.keys(obJSON.oradores).length;++i){ 
       
         let Esquema=Object.values(obJSON.oradores)[i]
       
        const articulo=document.createElement('article')
                     articulo.setAttribute('class','card')

   articulo.innerHTML=`
   <picture><img class='card-img-top' src="${Esquema[0]}" alt=""></picture>
   <div class='card-body'>
    <h4 class='card-title'>${Esquema[1]}</h4>
    <p class='card-text'>${Esquema[2]}</p>
    </div> 
    <a class='btn btn-primary' href="${Esquema[3]}">Mas Info</a>
    `
document.getElementById('oradores').appendChild(articulo)
   }//Fin de Card Oradores

  


   //Estructura de Datos extra
   const descript=document.createElement('div')
descript.setAttribute('id','descript')
descript.innerHTML=
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
`
document.body.appendChild(descript)
const formOrador=document.createElement('form')
formOrador.setAttribute('action','Contacto')
formOrador.setAttribute('method','post')
formOrador.innerHTML=
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
`
document.body.appendChild(formOrador);
const footerC=document.createElement('footer')
for(i=0;i<Object.keys(obJSON.footer).length;++i){
footerC.innerHTML+=`
<a href="">${obJSON.footer[i][0]}</a>
`    
}
document.body.appendChild(footerC)

const descr=document.getElementById('descript')
   descr.getElementsByTagName('img')[0].src=`${Object.values(obJSON.descript)[0]}`
   
   //Fin
   console.log(banners)
    banners.getElementsByTagName('a')[0].addEventListener('mouseover',(e)=>{
        banners.getElementsByTagName('a')[0].style='color: black !important;'
    })
     banners.getElementsByTagName('a')[0].addEventListener('mouseout',(e)=>{
        banners.getElementsByTagName('a')[0].style='color: bisque !important;'
    })
}//Fin obJSON

)//Fin funcion


