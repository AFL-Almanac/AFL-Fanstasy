

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
        data:['Player1','Player2','Player3','Player4','Player5']
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
            data : ['Round 1','Round 2','Round 3','Round 4', 'Round 5', 'Round 6']
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
            data:[1,4,3,1,2,5],
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
            data:[2,3,2,1,4,3],
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
        },
        {
            name:'Player3',
            type:'bar',
            data:[5,1,4,2,3,2],
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
        },
        {
            name:'Player4',
            type:'bar',
            data:[3,3,2,3,3,3],
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
        },
        {
            name:'Player5',
            type:'bar',
            data:[1,2,3,4,5,1],
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


       
 