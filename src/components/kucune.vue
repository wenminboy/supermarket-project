<template>
	<div id="show">
		<div class="header">
			<p>商品库存</p>
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
						入库类型<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>采购入库</el-dropdown-item>
						<el-dropdown-item>调拨入库</el-dropdown-item>
						<el-dropdown-item>销售退货入库</el-dropdown-item>
						<el-dropdown-item>盘盈入库</el-dropdown-item>
						<el-dropdown-item>其他入库</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
			<div>
				<el-input placeholder="请输入内容" suffix-icon="el-icon-search" v-model="input1" style="width: 300px;">
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
		<el-table :data="tableData" border style="width: 95%;margin:auto;margin-top: 30px;">


			<el-table-column prop="date" label="商品编码" width="150">
			</el-table-column>
			<el-table-column prop="name" label="商品名称" width="220">
			</el-table-column>
			<el-table-column prop="address" label="所属门店" width="220">
			</el-table-column>
			<el-table-column prop="jbman" label="库存上限" width="80">
			</el-table-column>
			<el-table-column prop="crkzt" label="库存下限" width="80">
			</el-table-column>
			<el-table-column prop="zdman" label="预售数量" width="80">
			</el-table-column>
			<el-table-column prop="zddata" label="库存数量" width="110">
			</el-table-column>
			<el-table-column prop="shzt" label="可用库存" width="130">
			</el-table-column>

		<el-table-column label="操作">
			<template slot-scope="scope">
				<el-button type="text" size="small" @click="handleClick(scope.row)">
					<el-dropdown @command="handleCommand" trigger="click">
						<span class="el-dropdown-link">
							<i class="el-icon-more"></i>
						</span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item command="b">修改</el-dropdown-item>
						
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
</template>
<style scoped>
	#show {
		width: 90%;
		height: 700px;
		background: white;
		margin: auto;
	}

	.header {
		height: 40px;
		width: 100%;
		background: white;
		margin-top: 0px;
	}

	.header p {
		border-left: 5px solid blue;
		padding-left: 10px;
		height: 40px;
		line-height: 40px;
	}

	.el-dropdown-link {
		cursor: pointer;
		color: #409EFF;
	}

	.el-icon-arrow-down {
		font-size: 12px;
	}

	.top {
		height: 40px;

		line-height: 30px;
	}

	.top div {
		line-height: 30px;
		float: left;
		padding-left: 40px;
	}
</style>
<script>
	export default {
		data() {
			return {
				tableData: [{
					date: '6210000000001',
					name: '清风抽取式面巾纸150抽X2层',
					address: '野王（村里打野佼佼者）',
					jbman: '---',
					zdman: '---',
					zddata: '0',
					shzt: '100',
					crkzt: '100',
					edit: '修改'
				}, {
					date: '6210000000001',
					name: '清风抽取式面巾纸150抽X2层',
					address: '野王（村里打野佼佼者）',
					jbman: '---',
					zdman: '---',
					zddata: '0',
					shzt: '100',
					crkzt: '100',
					edit: '修改'
				}, {
					date: '6210000000001',
					name: '清风抽取式面巾纸150抽X2层',
					address: '野王（村里打野佼佼者）',
					jbman: '---',
					zdman: '---',
					zddata: '0',
					shzt: '100',
					crkzt: '100',
					edit: '修改'
				}, {
					date: '6210000000001',
					name: '清风抽取式面巾纸150抽X2层',
					address: '野王（村里打野佼佼者）',
					jbman: '---',
					zdman: '---',
					zddata: '0',
					shzt: '100',
					crkzt: '100',
					edit: '修改'
				}, {
					date: '6210000000001',
					name: '清风抽取式面巾纸150抽X2层',
					address: '野王（村里打野佼佼者）',
					jbman: '---',
					zdman: '---',
					zddata: '0',
					shzt: '100',
					crkzt: '100',
					edit: '修改'
				}, {
					date: '6210000000001',
					name: '清风抽取式面巾纸150抽X2层',
					address: '野王（村里打野佼佼者）',
					jbman: '---',
					zdman: '---',
					zddata: '0',
					shzt: '100',
					crkzt: '100',
					edit: '修改'
				}, {
					date: '6210000000001',
					name: '清风抽取式面巾纸150抽X2层',
					address: '野王（村里打野佼佼者）',
					jbman: '---',
					zdman: '---',
					zddata: '0',
					shzt: '100',
					crkzt: '100',
					edit: '修改'
				}, {
					date: '6210000000001',
					name: '清风抽取式面巾纸150抽X2层',
					address: '野王（村里打野佼佼者）',
					jbman: '---',
					zdman: '---',
					zddata: '0',
					shzt: '100',
					crkzt: '100',
					edit: '修改'
				}],
				input1: '',
			}
		},methods: {
			ss() {
				alert("删除成功")
			},
			handleClick(row) {
				this.shuju = row
				console.log(this.shuju)
			},
			handleCommand(co) {
				switch (co) {
					case 'b':
						this.$router.push({
							path: '/homePage/page1/xiugai',
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
		}
	}
</script>
