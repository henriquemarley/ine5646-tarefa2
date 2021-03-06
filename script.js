class Capa1 {
  constructor(containerElement) {
    this.containerElement = containerElement;
    this.image = document.createElement('img');
    this._contraCapa = this._contraCapa.bind(this);
    this.image.src = 'https://i.scdn.co/image/ab67616d0000b273a786ad0992cfe0b2719729bf';
    this.image.style.height = '500px';
    this.image.style.weight = '500px';
    this.image.addEventListener('click', this._contraCapa);
    this.containerElement.appendChild(this.image);
  }
  _contraCapa (){
    this.image.src = 'https://images-na.ssl-images-amazon.com/images/I/51Imr2JAELL.jpg';
    this.image.removeEventListener('click', this._contraCapa);
  }
}

const elementcapa1 = document.querySelector('#capa1');
const capa1 = new Capa1(elementcapa1);

class Capa2 {
  constructor(containerElement) {
    this.containerElement = containerElement;
    this.image = document.createElement('img');
    this._contraCapa = this._contraCapa.bind(this);
    this.image.src = 'https://i.scdn.co/image/ab67616d0000b273d9194aa18fa4c9362b47464f';
    this.image.style.height = '500px';
    this.image.style.weight = '500px';
    this.image.addEventListener('click', this._contraCapa)
    this.containerElement.appendChild(this.image);
  }
  _contraCapa (){
    this.image.src = 'https://static.wixstatic.com/media/d62848_d11d73dfeb7c49b296a31407db0ebf24~mv2.png/v1/fill/w_593,h_593,al_c,lg_1,q_85/d62848_d11d73dfeb7c49b296a31407db0ebf24~mv2.webp';
    this.image.removeEventListener('click', this._contraCapa);
  }
}

const elementcapa2 = document.querySelector('#capa2');
const capa2 = new Capa2(elementcapa2);

class Capa3 {
  constructor(containerElement) {
    this.containerElement = containerElement;
    this.image = document.createElement('img');
    this._contraCapa = this._contraCapa.bind(this);
    this.image.src = 'https://i.scdn.co/image/ab67616d0000b273dfa5bb0198242e86e8fbf9a2';
    this.image.style.height = '500px';
    this.image.style.weight = '500px'; 
    this.image.addEventListener('click', this._contraCapa);
    this.containerElement.appendChild(this.image);
  }
  _contraCapa () {
    this.image.src = 'https://images.squarespace-cdn.com/content/v1/5a4583f1a8b2b077ad949ef7/1525400324585-GZHX4ZCLEN3XCNKIEARB/ke17ZwdGBToddI8pDm48kNT84wdGDt1ONhKvHe2LDh9Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwoxnLxAhunFw_O3V1PKd3sltp4U0Po-v_l93iPOs1Zf6aCrM5VbS2TkvKTirGNx34/R-257768-1392838321-1229.jpeg.jpg'
    this.image.removeEventListener('click', this._contraCapa);
  }
}

const elementcapa3 = document.querySelector('#capa3');
const capa3 = new Capa3(elementcapa3);


/*function mudaCapa1(event) {
  const image = event.currentTarget;
  image.src = 'https://images-na.ssl-images-amazon.com/images/I/51Imr2JAELL.jpg';
  image.removeEventListener('click', mudaCapa1)
}

const image1 = document.querySelector("#Img1Album");
image1.addEventListener('click', mudaCapa1);


function mudaCapa2(event) {
  const image = event.currentTarget;
  image.src = "https://static.wixstatic.com/media/d62848_d11d73dfeb7c49b296a31407db0ebf24~mv2.png/v1/fill/w_593,h_593,al_c,lg_1,q_85/d62848_d11d73dfeb7c49b296a31407db0ebf24~mv2.webp";
  image.removeEventListener('click', mudaCapa2);
}

const image2 = document.querySelector("#Img2Album");
image2.addEventListener('click', mudaCapa2);

function mudaCapa3(event) {
  const image = event.currentTarget;
  image.src= "https://images.squarespace-cdn.com/content/v1/5a4583f1a8b2b077ad949ef7/1525400324585-GZHX4ZCLEN3XCNKIEARB/ke17ZwdGBToddI8pDm48kNT84wdGDt1ONhKvHe2LDh9Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwoxnLxAhunFw_O3V1PKd3sltp4U0Po-v_l93iPOs1Zf6aCrM5VbS2TkvKTirGNx34/R-257768-1392838321-1229.jpeg.jpg"
  image.removeEventListener('click', mudaCapa3);
}

const image3 = document.querySelector('#Img3Album');
image3.addEventListener('click', mudaCapa3); 
*/