/**
 * Ejemplo de cómo utilizar los tipos primitivos en TypeScript.
 */

/**
 * Nombre del usuario.
 * @type {string}
 */
let nombre: string = 'Juan';

/**
 * Apellido paterno del usuario.
 * @type {string}
 */
let apellidoPaterno: string = 'Pérez';

/**
 * Apellido materno del usuario.
 * @type {string}
 */
let apellidoMaterno: string = 'Gómez';

/**
 * Edad del usuario.
 * @type {number}
 */
let edad: number = 25;

/**
 * Estado civil del usuario.
 * @type {boolean}
 */
let casado: boolean = false;

/**
 * Fecha de nacimiento del usuario.
 * @type {Date}
 */
let fechaNacimiento: Date = new Date();

/**
 * Imprime la información del usuario en la consola.
 */
console.log(
  'El usuario se llama ' +
  nombre +
  ' ' +
  apellidoPaterno +
  ' ' +
  apellidoMaterno +
  ' y tiene ' +
  edad +
  ' años.' +
  ' ¿Está casado? ' +
  casado +
  ' y nació el ' +
  fechaNacimiento,
);
