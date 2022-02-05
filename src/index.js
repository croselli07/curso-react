//3-15  AWAIT

//async hace que uan funcion simple retorne un Promise  
// para usar awair debe ser dentro de un async 


const  getImage =  async() => {
 const key = 'yIM3TIL5zf4PiCeEtoCenpCJAVsXPROz';
 const resp = await fetch (`https://api.giphy.com/v1/gifs/random?api_key=${key}`); // el await espera que termine el fetch antes de seguir 
 const {data} = await resp.json();
 console.log(data.images);
}

getImage().then(console.log);


// const key = 'yIM3TIL5zf4PiCeEtoCenpCJAVsXPROz';

// const peticion = fetch (`https://api.giphy.com/v1/gifs/random?api_key=${key}`);


// //encadeno promise
// peticion
//     .then((respuesta) => respuesta.json()) // este json ,se lo retorno al then de abajo
//     .then(({data}) =>{  // esto es descontracturado de respuesta.data
//         console.log(data.images.original.url);
//         const {url} = data.images.original;
//         const img = document.createElement('img');
//         img.src= url;
//         document.body.append(img);
//     })
//     .catch(console.warn);


