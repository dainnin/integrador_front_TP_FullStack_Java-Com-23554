

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


    


if (location.href.substring(location.href.length - 10, location.href.length) == 'index.html') {
    cElement('script',
    { src: './logica/constRaiz.js' }, 
    " ",
     'afterbegin', 1),
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

let HeaderC ;
let footerC;
llamarObjeto(url).then((obJSON) => {
let menHeader=""
    menHeader += Object.values(obJSON.header.aLink).map(
        aLink => `<a href="${aLink[1]}">${aLink[0]}</a>`
    ).join('')
HeaderC = cElement('header',{className:'header',},`
<picture>
<a href=""><img src="${Object.values(obJSON.logoNav)}" alt="asdas">
</a>
<h4>Conf Bs As</h4>
</picture>
<menu>
${menHeader}
</menu>
`
)

    let footerALink = Object.values(obJSON.footer).map(
        link => `<a href="">${link[0]}</a>`).join('');
      cElement('footer',
        {className:'footer'},
        footerALink,
        'afterend', 0
    )
   
})
//Creacion del contenido




