<template>
	<div id="show">
		<div class="header">
			<p>商品品牌</p>
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
				<el-button type="primary">新增</el-button>
			</div>
		</div>
		<div class="big">
			<el-table :data="tableData" border style="width: 90%;margin: 20px auto; ">
				<el-table-column prop="num" label="序号" width="250">
				</el-table-column>
				<el-table-column prop="date" label="编码" width="250">
				</el-table-column>
				<el-table-column prop="name" label="供应商名称" width="420">
				</el-table-column>
				<el-table-column label="操作">
					<template slot-scope="scope">
						<el-button type="text" size="small" @click="dialogFormVisible = true">修改</el-button>
						<el-button type="text" size="small" @click="dialogVisible = true">删除</el-button>
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
					<el-button type="primary" @click="dialogVisible = false,open1()">确 定</el-button>

				</span>

			</el-dialog>
			<el-dialog title="商品品牌-新增/编辑" :visible.sync="dialogFormVisible" style="width:60%;margin-left: 300px;top: 100px;">
				<el-form :model="form" style="margin-left: -80px;">
					<el-form-item label="编码" :label-width="formLabelWidth" >
						<el-input v-model="form.region" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="名称" :label-width="formLabelWidth">
						<el-input v-model="form.name" autocomplete="off"></el-input>
					</el-form-item>
				
				</el-form>
				<div slot="footer" class="dialog-footer">
					<el-button @click="dialogFormVisible = false">取 消</el-button>
					<el-button type="primary" @click="dialogFormVisible = false">保存</el-button>
				</div>
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
			open1() {
			this.$notify({
			  message: '成功将该数据删除',
			  type: 'success'
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
				dialogVisible: false,
				shuju: [],
				dialogFormVisible: false,
				form: {
					name: '鲁班(宇宙级)',
					region: '007',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				formLabelWidth: '120px',
				tableData: [{
					num: '1',
					date: '011',
					name: '鲁班(宇宙级)'
				}, {
					num: '2',
					date: '091',
					name: '鲁班(宇宙级)',
				}, {
					num: '3',
					date: '022',
					name: '鲁班(宇宙级)',

				}, {
					num: '4',
					date: '098',
					name: '鲁班(宇宙级)',

				}, {
					num: '5',
					date: '072',
					name: '鲁班(宇宙级)',
				}, {
					num: '6',
					date: '003',
					name: '鲁班(宇宙级)',
				}, {
					num: '7',
					date: '022',
					name: '鲁班(宇宙级)',

				}, {
					num: '8',
					date: '007',
					name: '鲁班(宇宙级)',
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
