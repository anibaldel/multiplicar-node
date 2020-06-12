const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`La base ${base} No es un numero`);
            return;
        }
        console.log('============='.green);

        for (let i = 1; i <= limite; i++) {
            data += `${base}x${i} = ${base*i}\n`;
        }

        resolve(data);

    })

}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`La base ${base} No es un numero`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base}x${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}