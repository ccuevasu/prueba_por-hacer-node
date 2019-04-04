const fs = require('fs');
//const colors = require('colors');

let listadoTareasPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoTareasPorHacer);
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err)
            throw new Error('Problemas al guardar en JSON');
        else
            console.log('Se guardaron los datos del json');
    });
}

const cargarDB = () => {
    try {
        listadoTareasPorHacer = require('../db/data.json');
    } catch (err) {
        listadoTareasPorHacer = [];
    }

}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };
    listadoTareasPorHacer.push(porHacer);
    guardarDB();

    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoTareasPorHacer;
}

const actualizar = (descripcion, estado = true) => {
    cargarDB();
    let index = listadoTareasPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoTareasPorHacer[index].completado = estado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoTareasPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoTareasPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}