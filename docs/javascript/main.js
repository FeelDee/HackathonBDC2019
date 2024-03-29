console.log("succ")

window.onload = () => {
  console.log(document.getElementById("line-chart"))
  new Chart(document.getElementById("line-chart1"), {
    type: 'line',
    data: {
      labels: ['2017-01', '2017-02', '2017-03', '2017-04', '2017-05', '2017-06', '2017-07', '2017-08', '2017-09', '2017-10', '2017-11', '2017-12', '2018-01', '2018-02', '2018-03', '2018-04', '2018-05', '2018-06', '2018-07', '2018-08', '2018-09', '2018-10', '2018-11', '2018-12', '2019-01'],

      datasets: [{
          data: [3256, 4378, 5421, 6086, 6290, 4324, 4450, 5468, 5509, 5795, 5675, 3802, 4892, 5804, 5287, 6348, 5329, 4143, 4954, 3843, 3326, 3091, 2927, 2721, 3648],
          borderColor: "#3e95cd",
          label: "All Users",
          fill: false
        }, {
          data: [2174, 2769, 3114, 3649, 3596, 2390, 2634, 3024, 2612, 2758, 2735, 1991, 2845, 3021, 2993, 3427, 2744, 2141, 2997, 2064, 1758, 1836, 1340, 1365, 2052],
          borderColor: "#8e5ea2",
          label: "New Users",
          fill: false
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Page Views Each Month'
      }
    }
  });


new Chart(document.getElementById("line-chart2"), {
    type: 'line',
    data: {
      labels: ['2017-01', '2017-02', '2017-03', '2017-04', '2017-05', '2017-06', '2017-07', '2017-08', '2017-09', '2017-10', '2017-11', '2017-12', '2018-01', '2018-02', '2018-03', '2018-04', '2018-05', '2018-06', '2018-07', '2018-08', '2018-09', '2018-10', '2018-11', '2018-12', '2019-01'],

      datasets: [{
          data: [103736, 174595, 204047, 227935, 199715, 152373, 150605, 210803, 194652, 208663, 187203, 140512, 181422, 218888, 179924, 229904, 184886, 149428, 157604, 147925, 130233, 107450, 96250, 102693, 128263],
          borderColor: "#3e95cd",
          label: "All Users",
          fill: false
        }, {
          data: [70196, 97622, 111535, 125269, 109391, 76543, 86765, 99426, 79210, 95273, 86928, 73935, 106979, 104785, 97531, 117789, 97952, 81425, 86283, 74873, 66128, 60877, 45004, 43517, 68825],
          borderColor: "#8e5ea2",
          label: "New Users",
          fill: false
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Total Time On Page'
      }
    }
  });
new Chart(document.getElementById("line-chart3"), {
    type: 'line',
    data: {
      labels: ['2017-01', '2017-02', '2017-03', '2017-04', '2017-05', '2017-06', '2017-07', '2017-08', '2017-09', '2017-10', '2017-11', '2017-12', '2018-01', '2018-02', '2018-03', '2018-04', '2018-05', '2018-06', '2018-07', '2018-08', '2018-09', '2018-10', '2018-11', '2018-12', '2019-01'],
      datasets: [{
          data: [39.7913310318374, 48.3241073899806, 45.8945119208277, 44.1734496124031, 38.6221233803906, 42.6218181818182, 40.5615405332615, 45.2658363753489, 41.0398481973435, 42.462962962963, 39.1884027632405, 45.0358974358974, 45.2988764044944, 44.5346897253306, 41.9403263403263, 43.2719744024092, 42.1344576116682, 43.5650145772595, 40.8194768194768, 47.8102779573368, 48.5219821162444, 45.3566905867455, 42.2149122807018, 47.8309268747089, 45.2267277856135],
          borderColor: "#3e95cd",
          label: "All Users",
          fill: false
        },{
          data: [40.5054818234276, 42.6483180428135, 43.9287120913746, 40.5795270489148, 38.4232525465402, 38.9531806615776, 39.8370064279155, 39.1595116187475, 35.7607223476298, 41.4410613310135, 38.4297082228117, 45.6388888888889, 46.4117136659436, 41.3353057199211, 40.5197341088492, 41.1418092909535, 44.4226757369615, 46.5551743853631, 38.3821174377224, 45.4878493317132, 47.0661921708185, 43.9227994227994, 43.8208373904576, 41.1702932828761, 43.5877137428752],
          borderColor: "#8e5ea2",
          label: "New Users",
          fill: false
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Average Time On Page'
      }
    }
  });
new Chart(document.getElementById("line-chart4"), {
    type: 'line',
    data: {
      labels: ['2017-01', '2017-02', '2017-03', '2017-04', '2017-05', '2017-06', '2017-07', '2017-08', '2017-09', '2017-10', '2017-11', '2017-12', '2018-01', '2018-02', '2018-03', '2018-04', '2018-05', '2018-06', '2018-07', '2018-08', '2018-09', '2018-10', '2018-11', '2018-12', '2019-01'],
      datasets: [{
          data: [649, 765, 975, 926, 1119, 750, 736, 811, 768, 881, 898, 683, 887, 890, 998, 1034, 941, 713, 1092, 750, 642, 723, 646, 574, 813],
          borderColor: "#3e95cd",
          label: "All Users",
          fill: false
        }, {
          data: [441, 480, 575, 562, 749, 426, 456, 485, 399, 459, 473, 372, 540, 487, 587, 564, 539, 392, 749, 418, 353, 451, 313, 308, 473],
          borderColor: "#8e5ea2",
          label: "New Users",
          fill: false
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Sessions'
      }
    }
  });
}
