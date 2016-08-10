var option = { //可以去官网上根据每个案例不同的option去写各种图形

	polar: [{ //极坐标 
		indicator: [{
				text: '开脑洞',
				max: 100
			}, {
				text: '颜控',
				max: 100
			}, {
				text: '二次元',
				max: 100
			}, {
				text: '商业家',
				max: 100
			},
			//                          {text: '铁通公司',max: 100},
			{
				text: '技术宅',
				max: 100
			}
		],
		splitNumber: 4,
		name: {
                formatter:'{value}',
                textStyle: {
                    color:'#fff'
                }
            },
		 splitArea: {
                areaStyle: {
                    color: ['rgba(0, 0, 0, 0.3)','rgba(0, 0, 0, 0.5)',
                    'rgba(0, 0, 0, 0.7)','rgba(0, 0, 0, 0.9)'],
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 10
                }
            },
		radius: 70,
		startAngle: 90 // 改变雷达图的旋转度数
	}],

	series: [{ // 驱动图表生成的数据内容数组，数组中每一项为一个系列的选项及数据
//		name: '总点击量',
		type: 'radar',
		itemStyle: { //图形样式，可设置图表内图形的默认样式和强调样式（悬浮时样式）：
			normal: {
				areaStyle: {
					type: 'default',
					color:"#f4f57f"
				}
			}
		},
		data: [{
			value: [], //外部加载，也可以通过ajax去加载外部数据。
			name: ''
		}]
	}]
};
$(function() {
	option.series[0].data[0].value = [60, 60, 60, 60, 60]; // 加载数据到data中
	var myChart = echarts.init(document.getElementById('leidatu'));
	myChart.setOption(option, true); //为echarts对象加载数据
});
$('#myCenter .btn').each(function(index, elem) {
	$("#myCenter .btn:eq(0)").css("border-color","#F6C900")
	$(this).bind('touchstart', function() {
		$('#myCenter .btn').each(function(index1,elem1) {
			$(elem1).css("border-color","#fff")
		})
		$(this).css("border-color","#F6C900")
		$('#myCenter .box1').css("left",-7.2*index+"rem")
	})
})
$("#myCenter #header>div:eq(0)").bind("touchstart",function(){
	window.history.back();
})