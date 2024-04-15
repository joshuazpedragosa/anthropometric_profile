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

const table_name = [
    "Respondent_No",
    "Standing_Height",
    "Standing_Eye_Height",
    "Standing_Shoulder_Height",
    "Standing_Elbow_Height",
    "Fingertip_Height",
    "Standing_Knee_Height",
    "Knuckle_Height",
    "Crotch_Height",
    "Standing_Hip_Breadth",
    "Waist_Girth",
    "Chest_Girth",
    "Standing_Shoulder_Breadth",
    "Head_Circumference",
    "Standing_Upward_Reach",
    "Arm_Length",
    "Sideways_Reach",
    "Total_Span",
    "Standing_Bust_Height",
    "Sitting_Height",
    "Eye_Height_Above_Seat",
    "Shoulder_to_Elbow_Length",
    "Elbow_Height_Above_Seat",
    "Seat_Height",
    "Sitting_Knee_Height",
    "Thigh_Clearance",
    "Buttock_to_Poplietal_Length",
    "Buttock_to_Knee_Length",
    "Belly_Depth",
    "Chest_Depth",
    "Forearm_to_Hand_Length",
    "Forward_Reach",
    "Sitting_Upward_Reach",
    "Sitting_Bust_Height",
    "Breadth_Accross_Elbow",
    "Sitting_Hip_Breadth",
    "Hand_Length",
    "Hand_Breadth",
    "Foot_Length",
    "Foot_Breadth",
    "Grip_Diameter",
    "Weight",
    "BMI"
  ];

const header = [
    "Respondent's No",
    "Standing Height",
    "Standing Eye Height",
    "Standing Shoulder Height",
    "Standing Elbow Height",
    "Fingertip Height",
    "Standing Knee Height",
    "Knuckle Height",
    "Crotch Height",
    "Standing Hip Breadth",
    "Waist Girth",
    "Chest Girth",
    "Standing Shoulder Breadth",
    "Head Circumference",
    "Standing Upward Reach",
    "Arm Length",
    "Sideways Reach",
    "Total Span",
    "Standing Bust Height",
    "Sitting Height",
    "Eye Height Above Seat",
    "Shoulder to Elbow Length",
    "Elbow Height Above Seat",
    "Seat Height",
    "Sitting Knee Height",
    "Thigh Clearance",
    "Buttock to Poplietal Length",
    "Buttock to Knee Length",
    "Belly Depth",
    "Chest Depth",
    "Forearm to Hand Length",
    "Forward Reach",
    "Sitting Upward Reach",
    "Sitting Bust Height",
    "Breadth Accross Elbow",
    "Sitting Hip Breadth",
    "Hand Length",
    "Hand Breadth",
    "Foot Length",
    "Foot Breadth",
    "Grip Diameter",
    "Weight",
    "BMI"
]

const selectSearch = document.querySelector('#selectSearch');
const measurementSearch = document.querySelector('#measurementSearch');


for(let x = 0; x < header.length; x++){
    const option = document.createElement('option');
    option.value = table_name[x];
    option.innerHTML = header[x];
    selectSearch.appendChild(option);
}

async function searchMeasurement(){
    let column = document.querySelector('#selectSearch');
    let value = document.querySelector('#measurementSearch');
    const data = {column : column.value, value : value.value}

    if(value.value !== ''){
        const response = await fetch('/search_measurement',{
            method: 'POST',
            headers : {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(data)
        });
    
        if(!response.ok){
            document.querySelector('#measurementsTbl').innerHTML = "<tr class='text-red-500'><td colspan='45'>Something went wrong!</td></tr>";
            throw new Error('Error: ', response.status);
        }
    
        const res_data = await response.json();
    
        document.querySelector('#measurementsTbl').innerHTML = res_data.data;

        return;
    }

    displayMeasurements();
}