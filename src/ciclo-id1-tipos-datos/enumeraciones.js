/**
 * Enumeración de los días de la semana.
 * Las enumeraciones permiten definir un conjunto de valores con nombre.
 * Son útiles para representar un grupo de constantes relacionadas y mejorar la legibilidad del código.
 */
var DiasDeLaSemana;
(function (DiasDeLaSemana) {
    DiasDeLaSemana[DiasDeLaSemana["Lunes"] = 0] = "Lunes";
    DiasDeLaSemana[DiasDeLaSemana["Martes"] = 1] = "Martes";
    DiasDeLaSemana[DiasDeLaSemana["Mi\u00E9rcoles"] = 2] = "Mi\u00E9rcoles";
    DiasDeLaSemana[DiasDeLaSemana["Jueves"] = 3] = "Jueves";
    DiasDeLaSemana[DiasDeLaSemana["Viernes"] = 4] = "Viernes";
    DiasDeLaSemana[DiasDeLaSemana["S\u00E1bado"] = 5] = "S\u00E1bado";
    DiasDeLaSemana[DiasDeLaSemana["Domingo"] = 6] = "Domingo";
})(DiasDeLaSemana || (DiasDeLaSemana = {}));
/**
 * Devuelve el nombre del día de la semana basado en el valor de la enumeración.
 * @param {DiasDeLaSemana} dia - El día de la semana.
 * @returns {string} El nombre del día.
 */
function obtenerDia(dia) {
    return DiasDeLaSemana[dia];
}
/**
 * Verifica si el día es un fin de semana.
 * @param {DiasDeLaSemana} dia - El día de la semana.
 * @returns {boolean} Verdadero si es fin de semana, falso en caso contrario.
 */
function esFinDeSemana(dia) {
    return dia === DiasDeLaSemana.Sábado || dia === DiasDeLaSemana.Domingo;
}
// Ejemplo de uso de las funciones
var dia = DiasDeLaSemana.Lunes;
console.log('Hoy es ' + obtenerDia(dia) + '.');
if (esFinDeSemana(dia)) {
    console.log('¡Es fin de semana!');
}
else {
    console.log('¡A trabajar!');
}
