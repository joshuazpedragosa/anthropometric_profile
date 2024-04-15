async function saveData(){
    let q_code = document.querySelector('#QCode');
    let date = document.querySelector('#date');
    let surname = document.querySelector('#surname');
    let given_name = document.querySelector('#givenName');
    let middle_name = document.querySelector('#middleName');
    let age = document.querySelector('#age');
    let sex = document.querySelector('#sex');
    let maritalStat = document.querySelector('#maritalStat');
    let pwd = document.querySelector('#pwd');
    let phone_num = document.querySelector('#phoneNum');
    let barangay = document.querySelector('#brgy');
    let municipality = document.querySelector('#municipality');
    let province = document.querySelector('#province');
    let region = document.querySelector('#region');
    let educ_attainment = document.querySelector('#educAttainment');
    let org_name = document.querySelector('#orgName');
    let position = document.querySelector('#position');
    let farm_commodity = document.querySelector('#farmCommodity');
    let farm_activities = document.querySelector('#farmingActivities');
    let farm_involvement = document.querySelector('#farmInvolvement');
    let proprietorship = document.querySelector('#proprietorship');
    let farm_area = document.querySelector('#FarmArea');
    let typesOfMachine = document.querySelector('#typesOfMachine');
    let yearsExp = document.querySelector('#yearsExp');
    let occupationType = document.querySelector('#primarySecondaryOccupation');
    
    if(
        !q_code.value || !date.value || !surname.value ||
        !given_name.value || !middle_name.value ||
        !age.value || !sex.value || !maritalStat.value ||
        !barangay.value || !municipality.value || !province.value ||
        !educ_attainment.value || !org_name.value || !position.value ||
        !farm_commodity.value || !farm_activities.value || !farm_involvement.value ||
        !proprietorship.value || !farm_area.value || !typesOfMachine.value ||
        !yearsExp.value || !occupationType.value
    ){
        alert('Please complete the required data')
        return false;
    }

    const data = {
        q_code : q_code.value, date : date.value, surname : surname.value, 
        given_name : given_name.value, middle_name : middle_name.value,
        age : age.value, sex: sex.value, maritalStat : maritalStat.value, pwd : pwd.value,
        phone_num : phone_num.value, barangay : barangay.value, municipality : municipality.value,
        province : province.value, region : region.value, educ_attainment : educ_attainment.value,
        org_name : org_name.value, position : position.value, 
        farm_commodity : farm_commodity.value, farm_activities : farm_activities.value,
        farm_involvement : farm_involvement.value, proprietorship : proprietorship.value,
        farm_area : farm_area.value, typesOfMachine : typesOfMachine.value,
        yearsExp : yearsExp.value, occupationType : occupationType.value
    }

    const response = await fetch('/save_data', {
        method: 'POST',
        headers : {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(data)
    })

    if(!response.ok){
        alert('Something went wrong!');
        throw new Error('Error: ', response.status);
    }

    const res_data = await response.json();

    alert(res_data.msg);

    let text_box = document.querySelector('input');

    for (let x = 0; x < text_box.length; x++){
        text_box[x].value = '';
    }
}

const formTemplate = document.querySelector('#formTemplate');

for (let x = 0; x < table_name.length; x++){
    if(table_name[x] !== 'Respondent_No'){
       let form_template = `<div class="flex flex-col">
            <label for="">${header[x]}:</label>
            <input type="number" name="${table_name[x]}" class="border outline-none px-2 text-gray-600 max-w-28 focus:border-green-500">
        </div>`

        formTemplate.innerHTML+=form_template;
    }
}

async function saveMeasurement(){
    const form = document.getElementById('measurementData');
    const formData = new FormData(form);

    let measurement_array = [];

    for (let [name, value] of formData.entries()) {
        if(value === ''){
            measurement_array.push(0);
        }else{
            if(name === 'QCode'){
                measurement_array.push(value);
            }else{
                measurement_array.push(parseInt(value));
            }
        }
    }

    const response = await fetch('/save_measurement', {
        method: 'POST',
        headers : {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({data : measurement_array})
    })

    if(!response.ok){
        alert('Something went wrong!');
        throw new Error('Error: ', response.status);
    }

    const res_data = await response.json();

    alert(res_data.msg);
    
}