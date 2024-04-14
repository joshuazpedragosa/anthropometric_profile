async function displayStatMeasurements(){
    const response = await fetch('/get_measurement_stat');

    if(!response.ok){
        document.querySelector('#measurementStat').innerHTML = "<tr class='text-red-500'><td colspan='45'>Something went wrong!</td></tr>";
        throw new Error('Error: ', response.status);
    }

    const res_data = await response.json();

    document.querySelector('#measurementStat').innerHTML = res_data.data;
}

async function displayMeasurements(){
    const response = await fetch('/get_measurements');

    if(!response.ok){
        document.querySelector('#measurementsTbl').innerHTML = "<tr class='text-red-500'><td colspan='45'>Something went wrong!</td></tr>";
        throw new Error('Error: ', response.status);
    }

    const res_data = await response.json();

    document.querySelector('#measurementsTbl').innerHTML = res_data.data;
}

displayStatMeasurements();
displayMeasurements();