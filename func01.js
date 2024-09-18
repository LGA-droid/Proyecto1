/*const persona1={
 nombre.""
apellido.""
edad.""
direccion.""

}
persona1.nombre=promp(indique su nombre)
persona1.apellido=promp(indique su apellido)
persona1.edad=promp(indique su edad)
persona1.direccion=promp(indique su direccion)



console.log(persona1)
console.log(persona1.nombre)
console.log(persona1.apellido)
console.log(persona1.edad)
console.log(persona1.direccion)

const array=[{
nombre:""
nota:0
}
]

function buscar() {
	let nombus=prompt("ingrese un numero");
	if (nombus<array.length) {
	alert("el nombre es "+array[nombus].nombre+"y su nota es "+array[nombus].not)
}else{
alert("el numero no esta disponible");
}
}

function mas() {
	let masn=prompt("ingrese nombres");
	let notal=prompt("ingrese notas")
array.push(nombre:masn,nota:notal);
alert(array.length-1);

}

function listado() {
	for (var i = 0; i < array.length; i++) {
		console.log(array[i])
	}
	
}

function borrar() {
	let masn=prompt("el que quiera borrar");
	let resp=prompt("desea borrar si o no ")
if (resp===si) {
array.splice(masn, 1);
} else {
	if (resp===no)  {
alert("disculpe las molestias")
}else{
	alert("no joda")
}}
}
*/

const array=[]

function mas() {
	let nombre=document.getElementById('nombre').value;
let apellido=document.getElementById('apellido').value;
let edad=document.getElementById('edad').value;
array.push({nombre,apellido,edad})
		
		let parrafo=document.createElement("h1")
		parrafo.innerHTML=`<td> ${nombre}</td>
							<td> ${apellido}</td>
							<td> ${edad}</td>
							<button>borrar </button>`;
		document.body.appendChild(parrafo)
document.getElementById('nombre').value=""
document.getElementById('apellido').value=""
document.getElementById('edad').value=""
}
function buscar() {
	let nbuscar=prompt("ingrese un numero")
	document.getElementById('nombre').value=array[nbuscar].nombre;
	document.getElementById('apellido').value=array[nbuscar].apellido;
document.getElementById('edad').value=array[nbuscar].edad;

}


















