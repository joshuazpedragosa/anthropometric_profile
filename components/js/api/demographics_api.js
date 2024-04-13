
async function displayDemographics(){
    const response = await fetch('/get_demographics');

    if(!response.ok){
        document.querySelector('#demographicsTbl').innerHTML = "<tr class='text-red-500'><td colspan='10'>Something went wrong!</td></tr>";
        throw new Error('Error: ', response.status);
    }

    const res_data = await response.json();

    document.querySelector('#demographicsTbl').innerHTML = res_data.data;
}

async function displayDemographicsStatistics(){
    const response = await fetch('/demographics_stat');

    if(!response.ok){
        document.querySelector('#mean').innerHTML = "<div class='text-red-500'>Error!</div>";
        throw new Error('Error: ', response.status);
    }

    const res_data = await response.json();

    console.log(res_data.mean)
    document.querySelector('#mean').innerHTML = res_data.mean;
    document.querySelector('#standard_dev').innerHTML = res_data.standard_deviation;
    document.querySelector('#rangeMin').innerHTML = res_data.range_min;
    document.querySelector('#rangeMax').innerHTML = res_data.range_max;
    document.querySelector('#cvPercent').innerHTML = res_data.cv_percent;
}

displayDemographicsStatistics()
displayDemographics()