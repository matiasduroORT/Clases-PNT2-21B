function Persona(nombre){
    this.nombre = nombre
}

Persona.prototype.saludar = function(){
    console.log('Hola, soy ' + this.nombre);
}

const juan = new Persona('Juan')

const pedro = new Persona('Pedro')

juan.saludar();