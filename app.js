//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');

const colors = require('colors');

//console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        break
    case 'listar':
        console.log('Mostar tareas por hacer');

        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('======POR HACER=========='.green);
            console.log(`Tarea: ${tarea.descripcion}`);
            console.log(`Estado: ${tarea.completado}`);
            console.log('========================='.green);
        }
        break
    case 'actualizar':
        console.log('Actualiza tareas por hacer');
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break
    case 'borrar':
        console.log('Borrar tareas.');
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no es reconocido');
}