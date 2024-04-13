const regions_philippines = [
    "National Capital Region (NCR)",
    "Cordillera Administrative Region (CAR)",
    "Ilocos Region (Region I)",
    "Cagayan Valley (Region II)",
    "Central Luzon (Region III)",
    "CALABARZON (Region IV-A)",
    "MIMAROPA (Region IV-B)",
    "Bicol Region (Region V)",
    "Western Visayas (Region VI)",
    "Central Visayas (Region VII)",
    "Eastern Visayas (Region VIII)",
    "Zamboanga Peninsula (Region IX)",
    "Northern Mindanao (Region X)",
    "Davao Region (Region XI)",
    "SOCCSKSARGEN (Region XII)",
    "Caraga (Region XIII)",
    "Bangsamoro Autonomous Region in Muslim Mindanao (BARMM)"
];

const region_select_box = document.querySelector('#region');

for(let x = 0; x < regions_philippines.length; x++){
let option = document.createElement('option');
option.innerHTML = regions_philippines[x];
option.value = regions_philippines[x];
region_select_box.appendChild(option);
}