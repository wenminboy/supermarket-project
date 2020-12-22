<template>
	<div id="show">
		<div class="header">
			<p>商品档案</p>
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
				<el-link :underline="false" @click="loading= true">高级搜索</el-link>
			</div>
			<div style="margin-left: 244px;">
				<el-button @click="loading=false">导出</el-button>
				<el-button type="primary">新增</el-button>
			</div>
		</div>


		<div class="big">
			<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange"
			 v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading"> v-loading="loading"
				element-loading-text="拼命加载中"
				element-loading-spinner="el-icon-loading"
				<el-table-column type="selection" width="55">
				</el-table-column>
				<el-table-column label="会员卡号" width="170">
					<template slot-scope="scope">{{ scope.row.date }}</template>
				</el-table-column>
				<el-table-column prop="name" label="发卡门店" width="250">
				</el-table-column>
				<el-table-column prop="phone" label="手机号码" width="170">
				</el-table-column>
				<el-table-column prop="num" label="可用积分" width="170">
				</el-table-column>
				<el-table-column prop="address" label="账户余额" width="170">
				</el-table-column>
				<el-table-column prop="type" label="最后消费日期" width="150">
				</el-table-column>
				<el-table-column label="操作">
					<template slot-scope="scope">
						<el-button type="text" size="small" @click="dialogFormVisible = true,xiugai()">修改</el-button>
						<el-button type="text" size="small" @click="dialogVisible = true">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
			<div style="margin-top: 20px;margin-left: 10px;">
				<el-button @click="toggleSelection()">取消选择</el-button>
			</div>
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
					<el-button type="primary" @click="dialogVisible = false,open1()">确 定</el-button>

				</span>

			</el-dialog>

		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			// f5(){
			// 	var url = 'http://localhost:8080/#/homePage/page1/index';
			// 	var F5_KEY_CODE = 116;
			// 	document.addEventListener('keydown', function(e) {
			// 	  if (e.keyCode === F5_KEY_CODE) {
			// 	    document.location.href = url
			// 	  }
			// 	})
			// },
			xiugai() {
				this.$router.push({
					path: '/homePage/page1/xiugai',
					query: {
						// name:this.tableData.name,
						// date:this.tableData.date,
						// city:this.tableData.city,
						// address:this.tableData.address,
						// state:this.tableData.state,
						// shzt:this.tableData.shzt,
						// zip:this.tableData.zip
					}
				})
			},
			toggleSelection(rows) {
				if (rows) {
					rows.forEach(row => {
						this.$refs.multipleTable.toggleRowSelection(row);
					});
				} else {
					this.$refs.multipleTable.clearSelection();
				}
			},
			handleSelectionChange(val) {
				this.multipleSelection = val;
			},
			open1() {
				this.$notify({

					message: '成功将该数据删除',
					type: 'success'
				});
			},
			handleClick(row) {
				this.shuju = row
				console.log(this.shuju)
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
					date: '888888888',
					name: '黄忠（地表最强）',
					phone: '18899999999',
					type: '2018-12-22',
					money: '7.00',
					address: '23.00',
					num: '2865'
				}, {
					date: '888888888',
					name: '黄忠（地表最强）',
					phone: '18899999999',
					type: '2018-12-22',
					money: '7.00',
					address: '23.00',
					num: '2865'
				}, {
					date: '888888888',
					name: '黄忠（地表最强）',
					phone: '18899999999',
					type: '2018-12-22',
					money: '7.00',
					address: '23.00',
					num: '2865'
				}, {
					date: '888888888',
					name: '黄忠（地表最强）',
					phone: '18899999999',
					type: '2018-12-22',
					money: '7.00',
					address: '23.00',
					num: '2865'
				}, {
					date: '888888888',
					name: '黄忠（地表最强）',
					phone: '18899999999',
					type: '2018-12-22',
					money: '7.00',
					address: '23.00',
					num: '2865'
				}, {
					date: '888888888',
					name: '黄忠（地表最强）',
					phone: '18899999999',
					type: '2018-12-22',
					money: '7.00',
					address: '23.00',
					num: '2865'
				}, {
					date: '888888888',
					name: '黄忠（地表最强）',
					phone: '18899999999',
					type: '2018-12-22',
					money: '7.00',
					address: '23.00',
					num: '2865'
				}],
				multipleSelection: [],
				loading: ''
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
