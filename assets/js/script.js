const dueno = document.getElementById("dueno");
const  telefono = document.getElementById("telefono");
const  direccion = document.getElementById("direccion");
const mascotaa = document.getElementById("mascotaa");
const  tipoMascotas = document.getElementById("tipoMascotas")
const  motivoConsulta = document.getElementById("motivoConsulta");
const botton = document.getElementById("botton")
const  datos = document.getElementById("datos");
const  mensaje = document.getElementById("mensaje");


// clase padre
class Propietario{
    constructor(nombre,direccion,telefono){
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono
    
    }
    get nombre(){
     return this._nombre;
    }
    
    get direccion(){
        return this._direccion;
       }
      
       get telefono(){
        return this._telefono;
       }
    datosP(){
       return `
       Estimad@: <strong> ${this._nombre}</strong> <br>
       Direccion: <strong> ${this._direccion} </strong><br>
       Telefono: <strong>${this._telefono}</strong><br>
       Tipo Mascota:<strong> ${this._tipo}</strong><br>
       Nombre Mascota:<strong> ${this._nombreAnimal} </strong><br>
       Motivo Consulta:<strong> ${this._enfermedad} </strong><br>
       Te contactaremos lo mas pronto posible `
      
      }

}
// clase animal con herencia de clase padre
class Animal extends Propietario {
    constructor(nombre, direccion, telefono, tipo) {
      super(nombre, direccion, telefono);
      this._tipo = tipo;
    }
    get tipo() {
      return this._tipo;
    }
  }
//   Clase aniumal que hereda clase padre y animal 
class Mascota extends Animal {
    constructor(nombre, direccion, telefono, tipo, nombreAnimal, enfermedad) {
      super(nombre, direccion, telefono, tipo);
      this._nombreAnimal = nombreAnimal;
      this._enfermedad = enfermedad;
    }
    get nombreAnimal() {
    return this._nombreAnimal;
    }
    set setNombreAnimal(i) {
      this._nombreAnimal = i;
    }
    get enfermedad() {
      return this._enfermedad;

    }
    set setEnfermedad(i) {
      this._enfermedad = i;
    }
  }



//   evento click
  botton.addEventListener("click", () => {
    let tipoAnimal = tipoMascotas.value;

    if(!dueno||!telefono||!direccion||!tipoAnimal||!mascotaa||!motivoConsulta){
      alert("Debes llenar todos los campos");
      return;
     }

    else if (tipoAnimal === "perro") {
      const Perro = new Mascota(
        dueno.value,
        telefono.value,
        direccion.value,
        tipoAnimal,
         mascotaa.value,
        motivoConsulta.value

      );
      mensaje.innerHTML = Perro.datosP();
      
  
    } else if( tipoAnimal === "gato") {
      const Gato = new Mascota(
        dueno.value,
        telefono.value,
        direccion.value,
         tipoAnimal,
         mascotaa.value,
        motivoConsulta.value

      );
      mensaje.innerHTML = Gato.datosP();
   
    } else if (tipoAnimal === "conejo") {
      const Conejo = new Mascota(
        dueno.value,
        telefono.value,
        direccion.value,
         tipoAnimal,
         mascotaa.value,
        motivoConsulta.value
      );
      mensaje.innerHTML = Conejo.datosP();
    }
  });