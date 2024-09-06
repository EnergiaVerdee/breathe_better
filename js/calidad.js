// Simulación de actualización de datos en tiempo real
document.addEventListener('DOMContentLoaded', function() {
    const pm25 = document.getElementById('pm25');
    const pm10 = document.getElementById('pm10');
    const ozone = document.getElementById('ozone');
    const no2 = document.getElementById('no2');

    // Aquí podrías utilizar una API para obtener los datos reales
    setInterval(() => {
        // Ejemplo: actualización de valores simulada
        pm25.textContent = Math.floor(Math.random() * 50) + ' µg/m³';
        pm10.textContent = Math.floor(Math.random() * 50) + ' µg/m³';
        ozone.textContent = Math.floor(Math.random() * 50) + ' ppb';
        no2.textContent = Math.floor(Math.random() * 50) + ' ppb';
    }, 5000); // Actualiza cada 5 segundos

    // Evento para mostrar datos históricos (simulación)
    document.getElementById('viewData').addEventListener('click', function() {
        const startDate = document.getElementById('startDate').value;
        const endDate = document.getElementById('endDate').value;

        if (startDate && endDate) {
            alert(`Mostrando datos históricos del ${startDate} al ${endDate}`);
            // Aquí puedes integrar un gráfico real utilizando Chart.js u otra librería
        } else {
            alert('Por favor, selecciona un rango de fechas válido.');
        }
    });
});
