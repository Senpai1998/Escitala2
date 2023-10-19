export default function DescifradoTransposicion(encriptado, llave) {
    
    if (typeof llave !== 'number' || llave <= 2 || llave >= mensaje.length) {
        return "La clave no fue aceptada";
    }
    
    const Ncantidad = encriptado.length;
    const filas = [];
    for (let i = 0; i < llave; i++) {
        const Nfilas = Math.ceil(Ncantidad / llave);
        filas.push('');
    }
    //e = posicion de la fila
    let Nposicion = 0;
    for (let e = 0; e < llave; e++) {
        const Nfilas = Math.ceil(Ncantidad / llave);
        const tam = (e < Ncantidad % llave) ? Nfilas : Nfilas - 1;
        filas[e] = encriptado.slice(Nposicion, Nposicion + tam);
        Nposicion += tam;
    }
    
    let menDes = '';
    for (let i = 0; i < Ncantidad; i++) {
        const PosicionFila = i % llave;
        menDes += filas[PosicionFila][0];
        filas[PosicionFila] = filas[PosicionFila].substring(1);
    }
    
    return menDes;
}