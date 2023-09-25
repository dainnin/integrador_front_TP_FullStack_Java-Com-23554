
const url = './imgList.json';
const banners=document.getElementById('banner')
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
llamarObjeto().then((obJSON) => {
  console.log()
  //Creacion de Card Oradores
    for(i=0;i<Object.keys(obJSON.oradores).length;++i){ 
        let LlavesIndex=(a)=>{Object.keys(obJSON.oradores)[i].indexOf(a)}
         let imgSrc=Object.values(obJSON.oradores)[i]
       
        const articulo=document.createElement('article')
                     articulo.setAttribute('class','card')

   articulo.innerHTML=`
   <picture><img class='card-img-top' src="${imgSrc}" alt=""></picture>
   <div class='card-body'>
    <h4 class='card-title'>${Object.keys(obJSON.oradores)[i]}</h4>
    <p class='card-text'>Descripcion del contenido</p>
    <a class='btn btn-primary' href="">Boton Bootstrap 5</a>
 </div> `
document.getElementById('oradores').appendChild(articulo)
   }//Fin de Card Oradores

    document.getElementsByTagName('header')[0].getElementsByTagName('img')[0].src =  Object.values(obJSON.logoNav)
   
  /*   banners.style.backgroundImage=`url(${Object.values(obJSON.banner)[0]})`*/
   banners.style.height='calc(70vw / 16 * 9)'
   /* banners.style.backgroundSize='contain'
   banners.style.backgroundRepeat='no-repeat' */
   const descr=document.getElementById('descript')
   descr.getElementsByTagName('img')[0].src=`${Object.values(obJSON.descript)[0]}`
}//Fin obJSON

)//Fin funcion
const menHeader = document.createElement('menu')
menHeader.innerHTML=`
<a href="">La conferencia</a>
<a href="">Los oradores</a>
<a href="">El lugar y fecha</a>
<a href="">Conviértete en orador</a>
<a href="">Comprar tickets</a>

`
document.getElementsByTagName('header')[0].appendChild(menHeader)
const elemBanner=document.createElement('div')
elemBanner.innerHTML=`
<h1>Conf Bs As</h1>
<p><strong>Bs As llega por primera vez a Argentina. Un evento para compartir con nuestra comunidad el
 conocimiento y expreriencia delos expertos que estan creando el futuro de Internet. Ven a 
 conocer a mienmbros del evento, a otros estudiantes de Codo a Codo y los oradores del primer 
 nivel que tenemos para. Te esperamos</strong></p>
<a href="">Quiero ser orador</a><a href="">Comprar tickets</a>
`
banners.appendChild(elemBanner)
