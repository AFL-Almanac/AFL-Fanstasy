

var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    title : {
        text: 'Current Trends',
        subtext: 'Players'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['Player1','Player2']
    },
    toolbox: {
        show : true,
        feature : {
            dataView : {show: true, title: 'Text View', lang: ['Text View','OK','Cancel'], readOnly: false},
            magicType : {show: true, title: {line: 'Line',bar: 'Bar'},type: ['line', 'bar']},
            //brush: {type: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear']},
            restore : {show: true, title: 'Restore'},
            saveAsImage : {show: true, title: 'Save'}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['1','2','3','4','5','6','7','8','9','10','11','12']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'Player1',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            markPoint : {
                data : [
                    {type : 'max', name: 'High'},
                    {type : 'min', name: 'Low'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: 'Average'}
                ]
            }
        },
        {
            name:'Player2',
            type:'bar',
            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            markPoint : {
                data : [
                    {name : 'Average', value : 182.2, xAxis: 7, yAxis: 183},
                    {name : 'Average', value : 2.3, xAxis: 11, yAxis: 3}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : 'Average'}
                ]
            }
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}


       
 