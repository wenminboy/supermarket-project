<template>
	<div id="show">
		<div class="header">
			<p>终端退货单</p>
		</div>
		<div class="top">


			<div>
				<el-input placeholder="请输入内容" suffix-icon="el-icon-search" style="width: 300px;">
				</el-input>
			</div>
			<div>

			</div>
			<div style="margin-left: 634px;">
				<el-button>导出</el-button>
			</div>
		</div>
		<div class="big">
			<el-table :data="tableData" border style="width: 90%;margin: 20px auto; ">
				<el-table-column prop="date" label="订单号" width="150">
				</el-table-column>
			
				<el-table-column prop="province" label="下单时间" width="150">
				</el-table-column>
				<el-table-column prop="city" label="下单电话" width="130">
				</el-table-column>
				<el-table-column prop="address" label="下单地址" width="260">
				</el-table-column>
				<el-table-column prop="qudao" label="下单渠道" width="120">
				</el-table-column>
				<el-table-column prop="zhifu" label="支付方式" width="80">
				</el-table-column>
				<el-table-column prop="zip" label="终端编码" width="80">
				</el-table-column>
				<el-table-column prop="state" label="状态" width="70">
				</el-table-column>

				<el-table-column label="操作">
					<template slot-scope="scope">
						<el-button @click="handleClick(scope.row),chakan()" type="text" size="small">详情</el-button>
					</template>
				</el-table-column>
			</el-table>
			<div class="block" style="margin:30px 400px;">

				<el-pagination :page-size="1" layout="prev, pager, next, jumper" :total="1">
				</el-pagination>
			</div>
		</div>
		<div class="panduan">
			<el-dialog title="操作提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
				<span>请确认是否删除此条记录</span>
				<span slot="footer" class="dialog-footer">
					<el-button @click="dialogVisible = false">取 消</el-button>
					<el-button type="primary" @click="dialogVisible = false,ss()">确 定</el-button>

				</span>

			</el-dialog>

		</div>

	</div>
</template>

<script>
	export default {
		methods: {

			handleClick(row) {
				this.shuju = row
			},
			ss() {
				alert("删除成功")
			},
			chakan() {
				this.$router.push({
					path: '/homePage/page1/xiangqing',
					query: {
						date: this.shuju.date,
						name: this.shuju.name,
						province: this.shuju.province,
						city: this.shuju.city,
						address: this.shuju.address,
						state: this.shuju.state,
						shzt: this.shuju.shzt,
						zip: this.shuju.zip
					}
				})
			},
			handleClose(done) {

				this.$confirm('确认关闭？')
					.then(_ => {
						done();
					})
					.catch(_ => {

					});
			}
		},

		data() {
			return {
				num: '1',
				dialogVisible: false,
				shuju: [],
				tableData: [{
					date: 'ZXSAQED007',
					name: '鲁班(宇宙级)',
					province: '2020-12-22 20:10',
					city: '1399999999',
					address: '上海市普陀区金沙江路 1518 弄',
					state: '已完成',
					qudao:'PC端',
					zhifu:'微信',
					zip: 200333
				}, {
					date: 'ZXSAQED007',
					name: '鲁班(宇宙级)',
					province: '2020-12-22 20:10',
					city: '1399999999',
					address: '上海市普陀区金沙江路 1518 弄',
					state: '已完成',
					qudao:'Android客户端',
					zhifu:'微信',
					zip: 200333
				}, {
					date: 'ZXSAQED007',
					name: '鲁班(宇宙级)',
					province: '2020-12-22 20:10',
					city: '1399999999',
					address: '上海市普陀区金沙江路 1518 弄',
					state: '已完成',
					zip: 200333,
					zhifu:'微信',
					qudao:"PC端"
				}, {
					date: 'ZXSAQED007',
					name: '鲁班(宇宙级)',
					province: '2020-12-22 20:10',
					city: '1399999999',
					address: '上海市普陀区金沙江路 1518 弄',
					state: '已完成',
					qudao:'Android客户端',
					zhifu:'微信',
					zip: 200333
				}, {
					date: 'ZXSAQED007',
					name: '鲁班(宇宙级)',
					province: '2020-12-22 20:10',
					city: '1399999999',
					address: '上海市普陀区金沙江路 1518 弄',
					state: '已完成',
					qudao:'PC端',
					zhifu:'微信',
					zip: 200333
				}, {
					date: 'ZXSAQED007',
					name: '鲁班(宇宙级)',
					province: '2020-12-22 20:10',
					city: '1399999999',
					address: '上海市普陀区金沙江路 1518 弄',
					state: '已完成',
					qudao:'Android客户端',
					zhifu:'微信',
					zip: 200333
				}, {
					date: 'ZXSAQED007',
					name: '鲁班(宇宙级)',
					province: '2020-12-22 20:10',
					city: '1399999999',
					address: '上海市普陀区金沙江路 1518 弄',
					state: '已完成',
					zip: 200333,
					qudao:'Android客户端',
					zhifu:'微信'
				}, {
					date: 'ZXSAQED007',
					name: '鲁班(宇宙级)',
					province: '2020-12-22 20:10',
					city: '1399999999',
					address: '上海市普陀区金沙江路 1518 弄',
					state: '已完成',
					zip: 200333,
					qudao:'PC端',
					zhifu:'微信'
				}]
			}
		}
	}
</script>

<style scoped>
	.header {
		height: 40px;
		width: 100%;
		background: white;
		margin-top: 0px;
	}

	.top {
		height: 40px;
		background: white;
		line-height: 30px;
	}

	.big {
		background: white;
		border: 1px solid white;
	}

	.top div {
		line-height: 30px;
		float: left;
		padding-left: 33px;
	}

	.header p {
		border-left: 5px solid blue;
		padding-left: 10px;
		height: 40px;
		line-height: 40px;
	}

	#show {
		width: 90%;
		margin: auto;
	}
</style>
