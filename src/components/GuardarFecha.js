import React, { useState, useEffect } from 'react';

function GuardarFecha() {
    const [ultimaFecha, setUltimaFecha] = useState(null);
    const [diasConsecutivos, setDiasConsecutivos] = useState(0);

    useEffect(() => {
        const initDB = async () => {
            const request = indexedDB.open('diasConsecutivosDB', 1);

            request.onerror = (event) => {
                console.error('Error al abrir la base de datos', event);
            };

            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                db.createObjectStore('diasConsecutivosStore', { keyPath: 'id' });
            };

            request.onsuccess = (event) => {
                const db = event.target.result;
                const transaction = db.transaction(['diasConsecutivosStore'], 'readwrite');
                const objectStore = transaction.objectStore('diasConsecutivosStore');
                const getReq = objectStore.get(1);

                getReq.onsuccess = (event) => {
                    if (getReq.result) {
                        setUltimaFecha(new Date(getReq.result.ultimaFecha));
                        setDiasConsecutivos(getReq.result.diasConsecutivos);
                    }
                };

                transaction.oncomplete = () => {
                    db.close();
                };
            };
        };

        initDB();
    }, []);

    const guardarFecha = () => {

        //Aqui es donde le asigno la fecha para yo poder hacer comprobaciónes, aumentando el dia
        //Sino pondria const fechaActual = new Date();

        const fechaActual = new Date('2023-05-16');

        if (
            ultimaFecha &&
            fechaActual.getDate() === ultimaFecha.getDate() &&
            fechaActual.getMonth() === ultimaFecha.getMonth() &&
            fechaActual.getFullYear() === ultimaFecha.getFullYear()
        ) {
            return;
        }

        let nuevosDiasConsecutivos = diasConsecutivos;

        if (
            ultimaFecha &&
            fechaActual.getTime() - ultimaFecha.getTime() === 86400000
        ) {
            nuevosDiasConsecutivos += 1;
        } else {
            nuevosDiasConsecutivos = 1;
        }

        setDiasConsecutivos(nuevosDiasConsecutivos);
        setUltimaFecha(fechaActual);

        const request = indexedDB.open('diasConsecutivosDB', 1);

        request.onsuccess = (event) => {
            const db = event.target.result;
            const transaction = db.transaction(['diasConsecutivosStore'], 'readwrite');
            const objectStore = transaction.objectStore('diasConsecutivosStore');
            const putReq = objectStore.put({
                id: 1,
                ultimaFecha: fechaActual,
                diasConsecutivos: nuevosDiasConsecutivos,
            });

            putReq.onerror = (event) => {
                console.error('Error al guardar la información', event);
            };

            transaction.oncomplete = () => {
                db.close();
            };
        };
    };


    return (
        <div>
            <h1>Recuento de días consecutivos</h1>
            <p>Has hecho clic en el botón durante {diasConsecutivos} días consecutivos.</p>
            <button onClick={guardarFecha}>Login</button>
        </div>
    );
}

export default GuardarFecha;