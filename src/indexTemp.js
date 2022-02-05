console.log('Hola Mundo');
const getUser = (nombre) =>(
    {
        uid:'6789',
        username:nombre 
    }
) 
const user = getUser('Cristian');
console.log(user.username);
//----------------------------------------------------------
// Desestructuracion (3-8)
// En vez de pasar el objeto , solo paso los atrib que necesito desglosando el obj

const persona = {
    nombre:'Tony',
    apellido: 'Stark',
    edad:45
}
//2- la funcion recibió el obj persona y recibe en forma destruct los atrib {nombre,apellido,edad}
const useContext =({nombre,apellido,edad})=>{
    return{
        nombreClave:nombre,
        edad:edad,
        lat:343454,
    }
}
//1- llamo a la funcion y le pido los 3 atributos en forma destructurada {nombreClave,edad,lat}
//const {nombreClave,edad,lat} = useContext( persona );
//3- muetro los atrib descontrac que genere como constante en 1
//console.log(nombreClave,edad,lat)
//----------------------------------------------------------

//Desestructuracion para arreglos(3-10)
const useState = (valor) => {
    return [valor, ()=>{console.log('HolaMundo')}];
}
const [nombre, setNombre] = useState('Goku');
console.log(nombre);
setNombre();
//----------------------------------------------------------
//3-8
//importo default y extras (owners)
import heroes, {owners} from './data/heroes'

//export const getHeroesById = (id) => heroes.find(heroe => heroe.id === id);

//console.log(getHeroesById(2));

export const getHeroesByOwner = (owner) => heroes.filter( heroe =>heroe.owner === owner);

console.log(getHeroesByOwner('DC'));
//----------------------------------------------------------

//3-13 Promise 

//Resolve si funciona , reject si da error
const promesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve();
        console.log('2 seg mas tarde')
    },2000);

});


const promesa1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const heroe =getHeroesById(2);
        if(heroe != null)
            resolve(heroe);
        else
            reject('No se encontró el heroe');
    },2000);

});

//Se ejecuta bien
promesa.then(()=>{
    console.log('Se ejecuta el then correctamente');
});

promesa1.then((heroe)=>{
    console.log('EL then del promise',heroe);
})
.catch(err => console.warn(err));
//Seejecuta el reject

const getHeroeByIdAsync = (id) =>{
    
    return  new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const heroe =getHeroesById(id);
        if(heroe)
            resolve(heroe);
        else
            reject('No se encontró el heroe');
    },2000);

    });
   // return promesa1; ya lo pongo arriba el return
}

getHeroeByIdAsync(5)
    .then(console.log) // esta es mas simple que abajo y devuelve lo que retorna el resolve
     //.then((heroe)=>{console.log('EL then con async del promise',heroe);})//resolve
     .catch(console.warn);//reject


//----------------------------------------------------------

//3-14 Fetch peticiones api
const key = 'yIM3TIL5zf4PiCeEtoCenpCJAVsXPROz';

const peticion = fetch (`https://api.giphy.com/v1/gifs/random?api_key=${key}`);


//encadeno promise
peticion
    .then((respuesta) => respuesta.json()) // este json ,se lo retorno al then de abajo
    .then(({data}) =>{  // esto es descontracturado de respuesta.data
        console.log(data.images.original.url);
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src= url;
        document.body.append(img);
    })
    .catch(console.warn);




