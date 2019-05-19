
var dom = document.getElementById("Positions");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
 
    title: {
        text: 'Select Positions for Trends',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#2c343c'
        }
    },

    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b}"
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
     legend: {
        orient: 'vertical',
        x: 'left',
        data:['Forwards','Midfielders','Rucks','Defenders']
    },
     
    series : [
        {
            name:'Position',
            type:'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:335, name:'Forwards'},
                {value:310, name:'Midfielders'},
                {value:274, name:'Rucks'},
                {value:235, name:'Defenders'},
              
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                normal: {
                    textStyle: {
                        color: '#2c343c'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: '#2c343c'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: ['#144468'],
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
      
    