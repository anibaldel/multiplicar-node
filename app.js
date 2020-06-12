const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multipicar/multipicar')
    //console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(archivo => console.log(archivo))
            .catch(e => console.log(e));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado`, colors.green(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comado no reconocido');

}

/**/