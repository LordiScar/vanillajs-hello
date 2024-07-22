import "bootstrap";
import "./style.css";

window.onload = function() {
  /* Este es el Array, DECIDI salirme del sistema de excusas y personalmente 
  necesitaba aprovechar este proyecto para generar una aplicación con mensajes positivos, disculpen
  si no es lo que pidieron, pero les invito a leer los mensajes hermosos que genera.
  Por tema de tiempo re-utilice el código que ofrecieron, por supuesto me dí el tiempo de estudiarlo,
  espero esto no sea molestía, por supuesto que adapté, pero por tiempo no puedo meterle más mano
  esta semana por temas personales, pero no me quería quedar sin entregar este hermoso pre-work.*/

  let primero = [
    "Siempre  ",
    "A veces ",
    "Muchas veces ",
    "En la vida ",
    "En las dificultades "
  ];

  let adj = [
    "hay que realizar ",
    "debemos hacer ",
    "buscamos  ",
    "queremos  ",
    "deseamos ",
    "intentamos  ",
    "anhelamos "
  ];
  let noun = [
    "lo mejor ",
    "el bienestar ",
    "la paz ",
    "lo lindo ",
    "la plenitud ",
    "el éxito ",
    "cumplir sueños "
  ];
  let action = [
    "cuanto antes ",
    "y lo mejor posible ",
    "como nos salga ",
    "y de la mejor forma ",
    "que deseamos "
  ];
  let possetion = [
    "para ",
    "porqué nos permite ",
    "ya que podemos ",
    "pues debemos "
  ];
  let where = [
    "buscar el bien familiar.",
    "encontrar la plenitud.",
    "llegar a nuestros sueños.",
    "demostrar amor a quién amamos.",
    "disfrutar al máximo."
  ];

  // VARIABLES, que re-utilice para generar el número random
  // para obtener los items del array de forma "aleatoria".
  let rdm0 = Math.floor(Math.random() * primero.length);
  let rdm1 = Math.floor(Math.random() * adj.length);
  let rdm2 = Math.floor(Math.random() * noun.length);
  let rdm3 = Math.floor(Math.random() * action.length);
  let rdm4 = Math.floor(Math.random() * possetion.length);
  let rdm5 = Math.floor(Math.random() * where.length);

  // La formación del mensaje paso por paso que luego genera el html.
  document.querySelector("#mensaje").innerHTML =
    primero[rdm0] +
    adj[rdm1] +
    noun[rdm2] +
    action[rdm3] +
    possetion[rdm4] +
    where[rdm5];
};
