

const cElement = (tag, attributes, content, innerEl, nodeX) => {
    const element = document.createElement(tag);
    const docT = [document.body, document.head];
    Object.assign(element, attributes);
    if (content && innerEl) {
        element.innerHTML = content;
        return docT[nodeX].insertAdjacentElement(innerEl, element)
    } else if (content) {
        element.innerHTML = content;
        return element;
    }
};


    


if (location.href.substring(location.href.length - 10, location.href.length) == 'index.html') {
    cElement('script', { src: './logica/constRaiz.js' }, " ", 'afterbegin', 1),
    cElement('link', { rel: "stylesheet", href: "./vistas/footer.css" }, " ", 'afterbegin', 1)
    cElement('link', { rel: "stylesheet", href: "./vistas/header.css" }, " ", 'afterbegin', 1)
}

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

let menHeader = "";
let footerALink = "";
llamarObjeto().then((obJSON) => {

    menHeader += Object.values(obJSON.header.aLink).map(
        aLink => `<a href="${aLink[1]}">${aLink[0]}</a>`
    ).join('')
    footerALink += Object.values(obJSON.footer).map(link => `<a href="">${link[0]}</a>`).join('');
})
//Creacion del contenido




