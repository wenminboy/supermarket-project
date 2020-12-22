<template>
	<div id="show">
		<div class="header">
			<p>采购单</p>
		</div>

		<div class="top">
			<div>
				<el-dropdown trigger="click">
					<span class="el-dropdown-link">
						审核状态<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>审核状态</el-dropdown-item>
						<el-dropdown-item>待审核</el-dropdown-item>
						<el-dropdown-item>审核失败</el-dropdown-item>
						<el-dropdown-item>审核成功</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
			<div>
				<el-dropdown trigger="click">
					<span class="el-dropdown-link">
						入库状态<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>入库状态</el-dropdown-item>
						<el-dropdown-item>已入库</el-dropdown-item>
						<el-dropdown-item>已作废</el-dropdown-item>
						<el-dropdown-item>部分入库</el-dropdown-item>
						<el-dropdown-item>待入库</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
			<div>
				<el-input placeholder="请输入采购单号" suffix-icon="el-icon-search" style="width: 300px;">
				</el-input>
			</div>
			<div>
				<el-link :underline="false">高级搜索</el-link>
			</div>
			<div style="margin-left: 244px;">
				<el-button>导出</el-button>
				<el-button type="primary">新增</el-button>
			</div>
		</div>


		<div class="big">
			<el-table :data="tableData" border style="width: 90%;margin: 20px auto; ">
				<el-table-column prop="date" label="采购单号" width="150">
				</el-table-column>
				<el-table-column prop="name" label="供应商" width="120">
				</el-table-column>
				<el-table-column prop="province" label="采购金额" width="120">
				</el-table-column>
				<el-table-column prop="city" label="采购人员" width="120">
				</el-table-column>
				<el-table-column prop="address" label="制单人员" width="280">
				</el-table-column>
				<el-table-column prop="zip" label="制单日期" width="80">
				</el-table-column>
				<el-table-column prop="shzt" label="审核状态" width="80">
				</el-table-column>
				<el-table-column prop="state" label="入库状态" width="80">
				</el-table-column>
				<el-table-column label="操作">
					<template slot-scope="scope">
						<el-button type="text" size="small" @click="handleClick(scope.row)">
							<el-dropdown @command="handleCommand" trigger="click">
								<span class="el-dropdown-link">
									<i class="el-icon-more"></i>
								</span>
								<el-dropdown-menu slot="dropdown">
									<el-dropdown-item command="a">详情</el-dropdown-item>
									<el-dropdown-item command="b">修改</el-dropdown-item>
									<el-dropdown-item command="c">审核</el-dropdown-item>
									<el-dropdown-item command="d">删除</el-dropdown-item>
								</el-dropdown-menu>
							</el-dropdown>

						</el-button>
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
			ss() {
				alert("删除成功")
			},
			handleClick(row) {
				this.shuju = row
				console.log(this.shuju)
			},
			handleCommand(co) {
				switch (co) {
					case 'a':
					// ?date='+this.shuju.date+'&name='+this.shuju.name+'&province='+this.shuju.province+'&city='+this.shuju.city+'&address='+this.shuju.address+'&state='+this.shuju.state+'&shzt='+this.shuju.shzt
						this.$router.push({
							path:'/homePage/page1/xiangqing',
							query:{
								date:this.shuju.date,
								name:this.shuju.name,
								province:this.shuju.province,
								city:this.shuju.city,
								address:this.shuju.address,
								state:this.shuju.state,
								shzt:this.shuju.shzt,
								zip:this.shuju.zip
							}
						})
						break;
					case 'b':
				this.$router.push({
					path:'/homePage/page1/xiugai',
					query:{
						date:this.shuju.date,
						name:this.shuju.name,
						province:this.shuju.province,
						city:this.shuju.city,
						address:this.shuju.address,
						state:this.shuju.state,
						shzt:this.shuju.shzt,
						zip:this.shuju.zip
					}
				})
						break;
					case 'c':
	this.$router.push({
		path:'/homePage/page1/shenhe',
		query:{
			date:this.shuju.date,
			name:this.shuju.name,
			province:this.shuju.province,
			city:this.shuju.city,
			address:this.shuju.address,
			state:this.shuju.state,
			shzt:this.shuju.shzt,
			zip:this.shuju.zip
		}
	})
						break;
					case 'd':
					this.dialogVisible = true
						break;
					default:
						break;
				}
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
				shuju: [],
				dialogVisible: false,
				tableData: [{
					date: '007',
					name: '鲁班(宇宙级)',
					province: '100',
					city: '1399999999',
					address: '上海市普陀区金沙江路 1518 弄',
					state: '正常',
					zip: 200333,
					shzt:'已审核'
				}, {
					date: '007',
					name: '鲁班(宇宙级)',
					province: '100',
					city: '1399999999',
					address: '上海市普陀区金沙江路 1518 弄',
					state: '正常',
					zip: 200333,
					shzt:'已审核'
				}, {
					date: '007',
					name: '鲁班(宇宙级)',
					province: '100',
					city: '1399999999',
					address: '上海市普陀区金沙江路 1518 弄',
					state: '正常',
					zip: 200333,
					shzt:'已审核'
				}, {
					date: '007',
					name: '鲁班(宇宙级)',
					province: '100',
					city: '1399999999',
					address: '上海市普陀区金沙江路 1518 弄',
					state: '正常',
					zip: 200333,
					shzt:'已审核'
				}, {
					date: '007',
					name: '鲁班(宇宙级)',
					province: '100',
					city: '1399999999',
					address: '上海市普陀区金沙江路 1518 弄',
					state: '正常',
					zip: 200333,
					shzt:'已审核'
				}, {
					date: '007',
					name: '鲁班(宇宙级)',
					province: '100',
					city: '1399999999',
					address: '上海市普陀区金沙江路 1518 弄',
					state: '正常',
					zip: 200333,
					shzt:'已审核'
				}, {
					date: '007',
					name: '鲁班(宇宙级)',
					province: '112',
					city: '1399999999',
					address: '上海市普陀区金沙江路 1518 弄',
					state: '正常',
					zip: 200333,
					shzt:'已审核'
				}, {
					date: '007',
					name: '鲁班(宇宙级)',
					province: '129',
					city: '1399999999',
					address: '上海市普陀区金沙江路 1518 弄',
					state: '正常',
					zip: 200333,
					shzt:'已审核'
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

	.el-dropdown-link {
		cursor: pointer;
		color: #409EFF;
	}

	.el-icon-arrow-down {
		font-size: 12px;
	}

	.demonstration {
		display: block;
		color: #8492a6;
		font-size: 14px;
		margin-bottom: 20px;
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
