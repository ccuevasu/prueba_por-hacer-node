const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completada o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('listar', 'Mostar tareas por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza tareas por hacer', {
        descripcion,
        completado
    })
    .command('borrar', 'Permite Borrar una tarea segun su descripcion', {
        descripcion
    })

.help()
    .argv;

module.exports = {
    argv
}