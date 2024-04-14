
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
    document.querySelector('#percentile5th').innerHTML = res_data.percentile_5th;
    document.querySelector('#percentile50th').innerHTML = res_data.percentile_50th;
    document.querySelector('#percentile95th').innerHTML = res_data.percentile_95th;
}

displayDemographicsStatistics()
displayDemographics()



async function searchQCodeName(){
    let search = document.querySelector('#searchQCode');

    const data = {search : search.value}

    if(search.value !== ''){
        const response = await fetch('/search_qcode_name',{
            method: 'POST',
            headers : {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(data)
        });
    
        if(!response.ok){
            document.querySelector('#demographicsTbl').innerHTML = "<tr class='text-red-500'><td colspan='10'>Something went wrong!</td></tr>";
            throw new Error('Error: ', response.status);
        }
    
        const res_data = await response.json();
    
        document.querySelector('#demographicsTbl').innerHTML = res_data.data;
    }else{
        displayDemographics()
    }
}

async function searchBrgy(){
    let search = document.querySelector('#filterbrgy');

    const data = {search : search.value}

    if(search.value !== ''){
        const response = await fetch('/search_barangay',{
            method: 'POST',
            headers : {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(data)
        });
    
        if(!response.ok){
            document.querySelector('#demographicsTbl').innerHTML = "<tr class='text-red-500'><td colspan='10'>Something went wrong!</td></tr>";
            throw new Error('Error: ', response.status);
        }
    
        const res_data = await response.json();
    
        document.querySelector('#demographicsTbl').innerHTML = res_data.data;
    }else{
        displayDemographics()
    }
}

async function searchAge(){
    let search = document.querySelector('#filterAge');

    const data = {search : search.value}

    if(search.value !== ''){
        const response = await fetch('/search_age',{
            method: 'POST',
            headers : {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(data)
        });
    
        if(!response.ok){
            document.querySelector('#demographicsTbl').innerHTML = "<tr class='text-red-500'><td colspan='10'>Something went wrong!</td></tr>";
            throw new Error('Error: ', response.status);
        }
    
        const res_data = await response.json();
    
        document.querySelector('#demographicsTbl').innerHTML = res_data.data;
    }else{
        displayDemographics()
    }
}

async function searchProvince(){
    let search = document.querySelector('#filterProvince');

    const data = {search : search.value}

    if(search.value !== ''){
        const response = await fetch('/search_province',{
            method: 'POST',
            headers : {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(data)
        });
    
        if(!response.ok){
            document.querySelector('#demographicsTbl').innerHTML = "<tr class='text-red-500'><td colspan='10'>Something went wrong!</td></tr>";
            throw new Error('Error: ', response.status);
        }
    
        const res_data = await response.json();
    
        document.querySelector('#demographicsTbl').innerHTML = res_data.data;
    }else{
        displayDemographics()
    }
}

async function searchMunicipality(){
    let search = document.querySelector('#filterMunicipality');

    const data = {search : search.value}

    if(search.value !== ''){
        const response = await fetch('/search_municipality',{
            method: 'POST',
            headers : {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(data)
        });
    
        if(!response.ok){
            document.querySelector('#demographicsTbl').innerHTML = "<tr class='text-red-500'><td colspan='10'>Something went wrong!</td></tr>";
            throw new Error('Error: ', response.status);
        }
    
        const res_data = await response.json();
    
        document.querySelector('#demographicsTbl').innerHTML = res_data.data;
    }else{
        displayDemographics()
    }
}

async function searchInvolvement(){
    let search = document.querySelector('#Involvement');

    const data = {search : search.value}

    if(search.value !== ''){
        const response = await fetch('/search_farm_involvement',{
            method: 'POST',
            headers : {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(data)
        });
    
        if(!response.ok){
            document.querySelector('#demographicsTbl').innerHTML = "<tr class='text-red-500'><td colspan='10'>Something went wrong!</td></tr>";
            throw new Error('Error: ', response.status);
        }
    
        const res_data = await response.json();
    
        document.querySelector('#demographicsTbl').innerHTML = res_data.data;
    }else{
        displayDemographics()
    }
}