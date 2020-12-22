<template>
	<div id="show">
		<div id="top">
			<div>首页</div>
		</div>

		<div id="mian" style="padding-top: 30px;">
			<div style="width:90%;margin: auto;height: 100%;">
				<div class="header">
					<div class="sma">
						<img src="../../public/img/dd.png" />
						<div>
							<p>欢迎您</p>
							<p>{{}}</p>
						</div>
					</div>
					<div style="margin-left: 180px;">
						<p>商户ID</p>
						<p>888888888</p>
					</div>

					<div>
						<p>有效期至</p>
						<p>2018-05-18</p>
					</div>
					<div>
						<p>操作门店</p>
						<p>鲁班(宇宙级)</p>
					</div>
				</div>
				<div class="left">
					<h2>待处理事务</h2>
					<ul>

						<li>
							<el-badge :value="10" :max="99" class="item">
								采购待审核
							</el-badge>
						</li>
						<li>

							<el-badge :value="12" :max="99" class="item">
								采购待审核
							</el-badge>

						</li>
						<li>入库待审核</li>
						<li>
							<el-badge :value="10" :max="99" class="item">出库待审核</el-badge</li> <li>调拨待审核
						</li>
						<li>盘点待审核</li>
						<li>订单促销待审核</li>
						<li>商品促销待审核</li>
						<li>—— ——</li>
					</ul>

				</div>
				<div class="right"  style="margin-left: 17px;">
					<div style="height: 60px;line-height: 60px;">
						<h2 style="float: left;margin: 0;">待处理事务</h2>
						<span style="float: left;margin-left: 290px;color: #409EFF;font-weight: 900;cursor: pointer;">添加/设置</span>
					</div>
					<ul style="clear: both;">
						<li>采购待审核</li>
						<li>采购退货待审核</li>
						<li>入库待审核</li>
						<li>出库待审核</li>
						<li>调拨待审核</li>
						<li>盘点待审核</li>
						<li>订单促销待审核</li>
						<li>商品促销待审核</li>
						<li>—— ——</li>
					</ul>
				</div>
				<div class="shuju">

					<h2 style="padding: 5px;">数据汇总</h2>
					<ul class="shujuul">
						<li>
							<div>
								<img src="../../public/img/1.png" />
							</div>

							<div>
								<p>今日销售总额</p>
								<p>人民币：68978.00</p>
							</div>
						</li>
						<li>
							<div style="background: lightpink;">
								<img src="../../public/img/9.png" />
							</div>

							<div>
								<p>门店商品库存</p>
								<p>数量：12355</p>
							</div>
						</li>
						<li>
							<div style="background: teal;">
								<img src="../../public/img/2.png" />
							</div>

							<div>
								<p>今日毛利总额</p>
								<p>人民币：23168.00</p>
							</div>
						</li>
						<li>
							<div style="background: forestgreen;">
								<img src="../../public/img/3.png" />
							</div>

							<div>
								<p>今日销售订单</p>
								<p>数量：579</p>
							</div>
						</li>
						<li>
							<div style="background: #8492A6;">
								<img src="../../public/img/4.png" />
							</div>

							<div>
								<p>今日购买用户</p>
								<p>数量：568</p>
							</div>
						</li>
						<li>
							<div style="background:gold">
								<img src="../../public/img/8.png" />
							</div>

							<div>
								<p>门店商品档案</p>
								<p>数量：799</p>
							</div>
						</li>
						<li>
							<div style="background: indianred;">
								<img src="../../public/img/9.png" />
							</div>

							<div>
								<p>门店商品库存</p>
								<p>数量：12355</p>
							</div>
						</li>
						<li>
							<div style="background: salmon;">
								<img src="../../public/img/4.png" />
							</div>

							<div>
								<p>今日购买用户</p>
								<p>数量：568</p>
							</div>
						</li>
					</ul>
				</div>
				<div class="biao">
					<div class="left-table">
						<div class="pie">
							<div id="pie1">
								<!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
								<div id="main1" style="float:left;width:100%;height: 300px;padding: 10px;"></div>
							</div>
						</div>
					</div>
					<div class="right-table" style="margin-left: 17px;">
						<div class="pie">
							<div id="pie2">
								<!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
								<div id="main2" style="float:left;width:100%;height: 300px;padding: 10px;"></div>
							</div>
						</div>
					</div>
				
				</div>
				<div class="last">
					<img src="../../public/img/b.png" />
				</div>
				
			</div>
		</div>
	</div>
</template>
<style scoped>
	#top {
		
		background: white;
		height: 40px;

		
	}
	#top>div{
		border-left: 5px solid #0000FF;
		margin-left: 40px;
		width: 400px;
		height: 40px;
		line-height: 40px;

		padding-left: 30px;
	}
	#mian {
		width: 90%;
		margin: auto;
		background: white;
		margin-top: 30px;
		height: 1514px;
	}

	.header {
		border: 1px solid #dadada;
		height: 90px;
		margin: auto;
	}
.last{
	border: 1px solid #dadada;
}
	.header>div {
		width: 20%;
		float: left;
		text-align: center;
	}

	.sma{
		margin-left: 30px;
	}	
	.sma img {
		float: left;
		width: 80px;
		border-radius: 100%;
	}

	.sma div {
		float: left;
		margin-left: 20px;
	}

	li {
		list-style-type: none;
	}

	.left {
		border: 1px solid #dadada;
		width: 48%;
		height: 250px;
		float: left;
		padding: 5px;

	}

	.left li {
		width: 30%;
		float: left;
		/* 	border: 1px solid red; */
		margin-top: 20px;
		height: 30px;
	}

	.biao {
		width: 100%;
		height: 300px;

	}

	.biao>div {
		width: 49%;
		float: left;
		height: 300px;
		border: 1px solid #dadada;
	}

	.right {
		width: 48%;
		height: 250px;
		border: 1px solid #dadada;
		float: left;
		padding: 5px;
		margin-left: 10px;

	}

	.right li {
		width: 30%;
		float: left;
		margin-top: 30px;
	}

	#mian>div>div {
		margin-top: 20px;
	}

	.shuju {
		/* 	border: 1px solid green; */
		height: 600px;

	}

	.shujuul {

		margin: 0px;
	}

	.shujuul li {

		width: 24%;
		margin-top: 10px;
		float: left;
	}

	.shujuul li>div {
		width: 50%;
		height: 93px;
		float: left;
	}

	.shujuul li div:first-of-type {
		background: red;
		width: 70px;
		height: 70px;
		float: left;
		margin-left: 10px;
		margin-top: 10px;
		border-radius: 100%;
	}

	.shujuul li div:last-of-type {
		font-size: 14px;
		margin-left: 20px;

	}

	.shujuul li div:first-of-type img {
		margin-left: 23px;
		margin-top: 20px;
		float: left;
	}
</style>
<script>
	// 引入基本模板
	let echarts = require('echarts/lib/echarts')
	//引入饼状图组件
	require('echarts/lib/chart/pie')
	// require('echartsa/lib/chart/bar')
	// 引入提示框和title组件
	require('echarts/lib/component/tooltip')
	require('echarts/lib/component/title')


	export default {
		created() {},
		mounted() {
			this.initData();
		},
		methods: {
			//初始化数据
			initData() {
				// 基于准备好的dom，初始化echarts实例
				var myChart = echarts.init(document.getElementById('main1'));
				var myChart2 = echarts.init(document.getElementById('main2'));
				// var myChart3 = echarts.init(document.getElementById('main3'));
				// var dataCount = 5e5;
				// var data = generateData(dataCount);

				// myChart3.setOption({
				// 		title: {
				// 			text: echarts.format.addCommas(dataCount) + ' Data',
				// 			left: 10
				// 		},
				// 		toolbox: {
				// 			feature: {
				// 				dataZoom: {
				// 					yAxisIndex: false
				// 				},
				// 				saveAsImage: {
				// 					pixelRatio: 2
				// 				}
				// 			}
				// 		},
				// 		tooltip: {
				// 			trigger: 'axis',
				// 			axisPointer: {
				// 				type: 'shadow'
				// 			}
				// 		},
				// 		grid: {
				// 			bottom: 90
				// 		},
				// 		dataZoom: [{
				// 			type: 'inside'
				// 		}, {
				// 			type: 'slider'
				// 		}],
				// 		xAxis: {
				// 			data: data.categoryData,
				// 			silent: false,
				// 			splitLine: {
				// 				show: false
				// 			},
				// 			splitArea: {
				// 				show: false
				// 			}
				// 		},
				// 		yAxis: {
				// 			splitArea: {
				// 				show: false
				// 			}
				// 		},
				// 		series: [{
				// 			type: 'bar',
				// 			data: data.valueData,
				// 			// Set `large` for large data amount
				// 			large: true
				// 		}]
				// 	},
				// 	function generateData(count) {
				// 		var baseValue = Math.random() * 1000;
				// 		var time = +new Date(2011, 0, 1);
				// 		var smallBaseValue;

				// 		function next(idx) {
				// 			smallBaseValue = idx % 30 === 0 ?
				// 				Math.random() * 700 :
				// 				(smallBaseValue + Math.random() * 500 - 250);
				// 			baseValue += Math.random() * 20 - 10;
				// 			return Math.max(
				// 				0,
				// 				Math.round(baseValue + smallBaseValue) + 3000
				// 			);
				// 		}

				// 		var categoryData = [];
				// 		var valueData = [];

				// 		for (var i = 0; i < count; i++) {
				// 			categoryData.push(echarts.format.formatTime('yyyy-MM-dd\nhh:mm:ss', time));
				// 			valueData.push(next(i).toFixed(2));
				// 			time += 1000;
				// 		}

				// 		return {
				// 			categoryData: categoryData,
				// 			valueData: valueData
				// 		};
				// 	})

				// var myChart3 = echarts.init(document.getElementById('main3'));
				//     // 绘制图表
				// myChart3.setOption({
				//     title: {
				//         text: '堆叠区域图'
				//     },
				//     tooltip: {
				//         trigger: 'axis',
				//         axisPointer: {
				//             type: 'cross',
				//             label: {
				//                 backgroundColor: '#6a7985'
				//             }
				//         }
				//     },
				//     legend: {
				//         data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
				//     },
				//     toolbox: {
				//         feature: {
				//             saveAsImage: {}
				//         }
				//     },
				//     grid: {
				//         left: '3%',
				//         right: '4%',
				//         bottom: '3%',
				//         containLabel: true
				//     },
				//     xAxis: [
				//         {
				//             type: 'category',
				//             boundaryGap: false,
				//             data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
				//         }
				//     ],
				//     yAxis: [
				//         {
				//             type: 'value'
				//         }
				//     ],
				//     series: [
				//         {
				//             name: '邮件营销',
				//             type: 'line',
				//             stack: '总量',
				//             areaStyle: {},
				//             data: [120, 132, 101, 134, 90, 230, 210]
				//         },
				//         {
				//             name: '联盟广告',
				//             type: 'line',
				//             stack: '总量',
				//             areaStyle: {},
				//             data: [220, 182, 191, 234, 290, 330, 310]
				//         },
				//         {
				//             name: '视频广告',
				//             type: 'line',
				//             stack: '总量',
				//             areaStyle: {},
				//             data: [150, 232, 201, 154, 190, 330, 410]
				//         },
				//         {
				//             name: '直接访问',
				//             type: 'line',
				//             stack: '总量',
				//             areaStyle: {},
				//             data: [320, 332, 301, 334, 390, 330, 320]
				//         },
				//         {
				//             name: '搜索引擎',
				//             type: 'line',
				//             stack: '总量',
				//             label: {
				//                 normal: {
				//                     show: true,
				//                     position: 'top'
				//                 }
				//             },
				//             areaStyle: {},
				//             data: [820, 932, 901, 934, 1290, 1330, 1320]
				//         }
				//     ]
				// });


				myChart2.setOption({
					title: {
						text: '采购退款单汇总', //主标题

						x: 'center', //x轴方向对齐方式
					},
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b} : {c} ({d}%)"
					},
					legend: {
						orient: 'vertical',
						bottom: 'bottom',
						data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
					},
					series: [{
						name: '访问来源',
						type: 'pie',
						radius: '55%',
						center: ['50%', '60%'],
						data: [{
								value: 335,
								name: '部分入库,审核成功：13笔'
							},
							{
								value: 310,
								name: '待入库,审核成功：50笔'
							},
							{
								value: 234,
								name: '待审核：16笔'
							},
							{
								value: 135,
								name: '审核失败：5笔'
							},
							{
								value: 1248,
								name: '已入库,审核成功'
							}
						],
						itemStyle: {
							emphasis: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
					}]
				});
				myChart.setOption({
					title: {
						text: '采购单汇总', //主标题

						x: 'center', //x轴方向对齐方式
					},
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b} : {c} ({d}%)"
					},
					legend: {
						orient: 'vertical',
						bottom: 'bottom',
						data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
					},
					series: [{
						name: '访问来源',
						type: 'pie',
						radius: '55%',
						center: ['50%', '60%'],
						data: [{
								value: 835,
								name: '待入库,【审核成功】：95笔'
							},
							{
								value: 310,
								name: '已入库,【审核成功】：10笔'
							},
							{
								value: 24,
								name: '【审核失败】：20笔'
							},
							{
								value: 135,
								name: '待入库,【审核成功】：50笔'
							},
							{
								value: 4,
								name: '已作废,【审核成功】：50笔'
							}
						],
						itemStyle: {
							emphasis: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
					}]
				});
			},
		}
	}
</script>
