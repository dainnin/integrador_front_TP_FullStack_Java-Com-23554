const macFormPrin={
    "header": {
        "aLink": {

            "0": ["La conferencia", "index.html#"],
            "1": ["Los oradores", "index.html#oradores"],
            "2": ["El lugar y fecha", "index.html#descript"],
            "3": ["Conviértete en orador", "index.html#oradoresC"],
            "4": ["Comprar tickets", "#"]
        }
        
    },
    "logoNav": {
        "codoacodo.png": "https://dainnin.github.io/HTMLPubM/imgIntegrador/codoacodo.png"
    },
    "footer": {


        "0": ["Preguntas Frecuentes"],
        "1": ["Contáctanos"],
        "2": ["Prensa"],
        "3": ["Conferencias"],
        "4": ["Términos y Condiciones"],
        "5": ["Privacidad"],
        "6": ["Estudiantes"]


    }
}
const urlIndex=location.href.substring(location.href.lastIndexOf('/') + 1)
let menHeader;
let HeaderC;
const cElement = (tag, attributes, content, innerEl, nodeX,Selquery) => {
    const element = document.createElement(tag);
    const docT = [document.body, document.head, document.querySelector(Selquery)];
    Object.assign(element, attributes);
    if ((content && innerEl)) {
        element.innerHTML = content;
        return docT[nodeX].insertAdjacentElement(innerEl, element)
    } else if (content) {
        element.innerHTML = content;
        return element;
    }
};


    


if (location.href.substring(location.href.lastIndexOf('/') + 1) == 'index.html' || 'index.html#' ) {

 
    cElement('script',
    { src: './logica/constRaiz.js' }, 
    " ",
     'afterbegin', 1)
  
      
    cElement('link', { rel: "stylesheet", href: "./vistas/footer.css" }, " ", 'afterbegin', 1)
    cElement('link', { rel: "stylesheet", href: "./vistas/header.css" }, " ", 'afterbegin', 1)

}


const url = './imgList.json';
async function llamarText(x) {
    try {
        const respuesta = await fetch(x);
      
        const datos = await respuesta.text();
        if (respuesta.status === 200) {
            return datos;
        } else {
            console.log('Posible error');
        };
    } catch (error) {
        console.log(error.message);
    };
     
};
async function llamarObjeto(x) {
    
    try {
        const respuesta = await fetch(x);
      
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



 menHeader = Object.values(macFormPrin.header.aLink).map(
    aLink => `<li><a href="${aLink[1]}">${aLink[0]}</a></li>`
).join('')
HeaderC = cElement('header',{className:'header',className:'header',},`
<picture>
<a href=""><img src="${Object.values(macFormPrin.logoNav)}" alt="asdas">
</a>
<h4>Conf Bs As</h4>
</picture>

<ul>
<p style='color: burlywood !important;'>MENU</p>
${menHeader}
</ul>
`
)


let footerALink = Object.values(macFormPrin.footer).map(
    link => `<a href="">${link[0]}</a>`).join('');
  cElement('footer',
    {className:'footer'},
    `
    ${footerALink}
  `,
    'afterend', 0
)






