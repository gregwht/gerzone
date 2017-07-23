//main.js

var zoneData = [{
        name: 'zone1',
        lat1: 51.5000,
        long1: -0.1276,
        lat2: 51.5009,
        long2: -0.1268,
        audio: ["1_Testing.mp3",
            "2_EnteringMoL.mp3",
            "3_Sound_Squeak.mp3",
            "4_Spot_The_Terrorist.mp3",
            "5_Meeting_Brian.mp3",
            "6_Brian_Introduces_Himself.mp3",
            "7_Brian_I'm_An_Old_Man.mp3"
        ]

    },

    {
        name: 'zone2',
        lat1: 51.501,
        long1: -0.1276,
        lat2: 51.502,
        long2: -0.1268,
        audio: ["1_Testing.mp3",
            "2_EnteringMoL.mp3",
            "3_Sound_Squeak.mp3",
            "4_Spot_The_Terrorist.mp3",
            "5_Meeting_Brian.mp3",
            "6_Brian_Introduces_Himself.mp3",
            "7_Brian_I'm_An_Old_Man.mp3"
        ]
    }, {
        name: 'zone3',
        lat1: 51.5000,
        long1: -0.1267,
        lat2: 51.5009,
        long2: -0.1261,
        audio: ["1_Testing.mp3",
            "2_EnteringMoL.mp3",
            "3_Sound_Squeak.mp3",
            "4_Spot_The_Terrorist.mp3",
            "5_Meeting_Brian.mp3",
            "6_Brian_Introduces_Himself.mp3",
            "7_Brian_I'm_An_Old_Man.mp3"
        ]
    }, {
        name: 'zone4',
        lat1: 51.501,
        long1: -0.1276,
        lat2: 51.502,
        long2: -0.1261,
        audio: ["1_Testing.mp3",
            "2_EnteringMoL.mp3",
            "3_Sound_Squeak.mp3",
            "4_Spot_The_Terrorist.mp3",
            "5_Meeting_Brian.mp3",
            "6_Brian_Introduces_Himself.mp3",
            "7_Brian_I'm_An_Old_Man.mp3"
        ]
    }
]

var locationData;
var currentZone;

var zoneAudioPlayer;
var walkAudioPlayer;

function init() {

    zoneAudioPlayer = document.getElementById('audiotag1');
    walkAudioPlayer = document.getElementById('audiotag2');


    getCoords();
}


function getCoords() {

    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(setCoords, error, { maximumAge: 1000, timeout: 1000, enableHighAccuracy: true });
    }
}

function setCoords(e) {
    console.log(e);
    locationData = e.coords;

    checkZone();
}

function error() {
    console.log('Ah shite...');
}



function checkZone() {
    console.log('Zone is being checked');

    for (var i = 0; i < zoneData.length; i++) {

        zoneData[i]
        zoneData[0]

        if (locationData.latitude > zoneData[i].lat1 && locationData.latitude < zoneData[i].lat2 && locationData.longitude > zoneData[i].long1 && locationData.longitude < zoneData[i].long2) {

            if (!currentZone || currentZone.name != zoneData[i].name) {
                // WE'RE IN A NEW ZONE!
                currentZone = zoneData[i];
                console.log('new zone: ' + currentZone.name);
                playZoneAudio();


            } else {
                //We're in the same zone... Chill out
                console.log('same zone: ' + currentZone.name);
                return false;
            }



        } else {

            console.log('You\'re far, far away');
        }

    }

}



function playZoneAudio() {
    console.log('zone audio is being played');
    var nextAudio = currentZone.audio[Math.round(Math.random() * (currentZone.audio.length - 1))];

    zoneAudioPlayer.src = './assets/' + nextAudio;
}


function crossFade() {

    var steps = 10;
    var step = 0;

    var cross = setInterval(function() {


        audio1.volume = 1 - step * 0.1;
        audio2.volume = step * 0.1;

        step++;

        if (step == steps) {
            clearInterval(cross);
        }

    }, 1000);
}
