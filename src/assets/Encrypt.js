export default function Transposicion(mensaje, llave) {
    if (typeof llave !== 'number' || llave <= 2 || llave >= mensaje.length) {
        return "La clave no fue aceptada";
    }
    const rows = [];
    for (let i = 0; i < llave; i++) {
        rows.push('');
    }
    
    for (let i = 0; i < mensaje.length; i++) {
        const rowIndex = i % llave;
        rows[rowIndex] += mensaje[i];
    }
    
    const mensajeEncriptado = rows.join('');
    return mensajeEncriptado;
}
