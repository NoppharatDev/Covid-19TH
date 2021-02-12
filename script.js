
// Thai
fetch('https://covid19.th-stat.com/api/open/timeline')
.then(
    response => response.json()
)
.then(
    data => {
        let arrLabel = [];
        let arrConfirmed = [];
        let arrDeaths = [];
        let arrHospitalized = [];
        let arrRecovered = [];
        data.Data.map((res, key) => {
            if(key > 350) {
                arrLabel.push(data.Data[key].Date)
                arrConfirmed.push(data.Data[key].NewConfirmed)
                arrDeaths.push(data.Data[key].NewDeaths)
                arrHospitalized.push(data.Data[key].NewHospitalized)
                arrRecovered.push(data.Data[key].NewRecovered)
                console.log(data.Data[key].NewConfirmed);
            }
        })
        //console.log(data.Data);
            var ctx = document.getElementById("myChart");
            var data = {
                labels: arrLabel,
                datasets: [
                    {
                        label: " ติดเชื้อเพิ่มขึ้น",
                        fill: false,
                        lineTension: 0.3,
                        backgroundColor: "#FFE589",
                        borderColor: "#FFE589",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "#FFE589",
                        pointBackgroundColor: "#000",
                        pointBorderWidth: 5,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "#FFE589",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: arrConfirmed,
                        spanGaps: true,
                    },
                    {
                        label: " เสียชีวิต",
                        fill: false,
                        lineTension: 0.3,
                        backgroundColor: "#FF6F6F",
                        borderColor: "#FF6F6F",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "#FF6F6F",
                        pointBackgroundColor: "#FF6F6F",
                        pointBorderWidth: 5,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "#FF6F6F",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: arrDeaths,
                        spanGaps: true,
                    },
                    {
                        label: " รักษาตัว",
                        fill: false,
                        lineTension: 0.3,
                        backgroundColor: "#74E8E8",
                        borderColor: "#74E8E8",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "#74E8E8",
                        pointBackgroundColor: "#74E8E8",
                        pointBorderWidth: 5,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "#74E8E8",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: arrHospitalized,
                        spanGaps: true,
                    },
                    {
                        label: " หายแล้ว",
                        fill: false,
                        lineTension: 0.3,
                        backgroundColor: "#50CDA0",
                        borderColor: "#50CDA0",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "#50CDA0",
                        pointBackgroundColor: "#50CDA0",
                        pointBorderWidth: 5,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "#50CDA0",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: arrRecovered,
                        spanGaps: true,
                    }
                ]
            };

            var myChart = new Chart(ctx, {
                type: 'line',
                data: data,
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }]
                    }
                }
            });
    }
);

// Now

fetch('https://covid19.th-stat.com/api/open/today')

.then(

    response => response.json()

)

.then(

    data => {

        document.getElementById("Confirmed").innerHTML = data.Confirmed;

        document.getElementById("Recovered").innerHTML = data.Recovered;

        document.getElementById("Hospitalized").innerHTML = data.Hospitalized;

        document.getElementById("Deaths").innerHTML = data.Deaths;


        document.getElementById("NewConfirmed").innerHTML = data.NewConfirmed;

        document.getElementById("NewRecovered").innerHTML = data.NewRecovered;

        document.getElementById("NewHospitalized").innerHTML = data.NewHospitalized;

        document.getElementById("NewDeaths").innerHTML = data.NewDeaths;

    }

);


// Thai Case

fetch('https://covid19.th-stat.com/api/open/cases/sum')

.then(

    response => response.json()

)

.then(

    data => {


        document.getElementById("dataLast").innerHTML = data.LastData;

        document.getElementById("genderMale").innerHTML = data.Gender.Male;

        document.getElementById("genderFemale").innerHTML = data.Gender.Female;



        const tbBodyThai = document.getElementById("tbBodyThai");

        for(const property in data.Province) {

            tbBodyThai.innerHTML +=  `<div class="d-flex px-4 my-2">

                                        <div><b>${property}</b></div>

                                        <div class="ms-auto"><b>${data.Province[property]}</b></div>

                                    </div>`

            //console.log(`${property}: ${data.Province[property]}`);

        }

    }

);


// Case

fetch('https://covid19.th-stat.com/api/open/cases')

.then(

    response => response.json()

)

.then(

    data => {

        const tbBodyWold = document.getElementById("tbBodyCase");

        tbBodyWold.innerHTML = '';

        let more = 50;

        let i = 1, log;

        data.Data.map(res => {

            if(i <= more) {

                //console.log(res.No);

                tbBodyWold.innerHTML += `<div class="d-flex px-4 my-2">

                                            <div style="width: 11%;"><b>${res.No}</b></div>

                                            <div style="width: 32%;"><b>${res.ConfirmDate}</b></div>

                                            <div style="width: 11%;"><b>${res.Gender}</b></div>

                                            <div style="width: 11%;"><b>${res.Age}</b></div>

                                            <div style="width: 21%;"><b>${res.District}</b></div>

                                            <div style="width: 20%;"><b>${res.Province}</b></div>

                                        </div>`;



                i++;

                log = res.No;

            }

        })

        // i = 1;

        console.log(i);

        $("#myCheck").click(function(){

            more += 20;

                data.Data.map(res => {

                    if(log > res.No) {

                        if(i <= more) {

                            //console.log(res.No);

                            tbBodyWold.innerHTML += `<div class="d-flex px-4 my-2">

                                                        <div style="width: 11%;"><b>${res.No}</b></div>

                                                        <div style="width: 32%;"><b>${res.ConfirmDate}</b></div>

                                                        <div style="width: 11%;"><b>${res.Gender}</b></div>

                                                        <div style="width: 11%;"><b>${res.Age}</b></div>

                                                        <div style="width: 21%;"><b>${res.District}</b></div>

                                                        <div style="width: 20%;"><b>${res.Province}</b></div>

                                                    </div>`;



                            i++;

                            log = res.No;

                        }

                    }



                })

            //console.log("I : " + i);

            //console.log("More : " + more);

        });

    }

)