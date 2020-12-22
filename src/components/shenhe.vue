<template>
	<div id="show">
		<div class="header">
			<p>审核采购单</p>

		</div>
		<div class="big">
		
			<div class="inp">
				<div>
					<label>采购单号：</label><input v-model="date" :disabled="true">
					<br>
					<label>审核状态：</label><input v-model="shzt" :disabled="true">
					<br>
					<label>采购门店：</label><input v-model="name" :disabled="true">
				</div>
				<div>
					<label>供应商：</label><input v-model="name" :disabled="true">
					<br>
					<label>采购人员：</label><input v-model="name" :disabled="true">
					<br>
					<label>备注：</label><input v-model="aa" :disabled="true">
				</div>
			</div>
			<div class="big">
				<el-table :data="tableData" border height="310" :summary-method="getSummaries" show-summary style="width: 80%;margin: auto;">

					<el-table-column prop="name" label="编码">
					</el-table-column>
					<el-table-column prop="amount1" label="商品名称">
					</el-table-column>
					<el-table-column prop="amount2" label="单位">
					</el-table-column>
					<el-table-column prop="amount3" label="采购数量">
					</el-table-column>
					<el-table-column prop="amount4" label="采购单价">
					</el-table-column>
					<el-table-column prop="amount5" label="小计金额">
					</el-table-column>
				</el-table>

			</div>

			<div class="hedui">
				<label>制单人员：</label><input class="oo" v-model="name" :disabled="true">
				<label>制单日期：</label><input class="oo" v-model="zip" :disabled="true">
				<label>采购单号：</label><input class="oo" v-model="date" :disabled="true">
				<label>是否核审：</label><input class="oo" v-model="shzt" :disabled="true">
			</div>
			<el-button plain style="margin:30px 0px 30px 140px;width: 120px;" @click="backa()">取消</el-button>
			<el-button type="primary"  @click="backa()" style="margin:30px 0px 30px 40px;width: 120px;">保存</el-button>
		</div>

	<!-- 	<dela></dela>
 -->
<div class="panduan" >
	<el-dialog
	  title="操作提示"
	  :visible.sync="dialogVisible"
	  width="30%"
	  :before-close="handleClose">
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
	// import dela from '@/src/components/dela.vue'
	export default {
		// components:{
		// 	dela
		// },
		data() {
			return {
				 dialogVisible: false,
				tableData: [{
					id: '1',
					name: '6210000000001',
					amount1: '清风抽取式面巾纸150抽X2层',
					amount2: '包',
					amount3: '1000',
					amount4: '3.00',
					amount5: '3000'
				}, {
					id: '2',
					name: '6210000000001',
					amount1: '清风抽取式面巾纸150抽X2层',
					amount2: '包',
					amount3: '1000',
					amount4: '3.00',
					amount5: '3000'
				}, {
					id: '3',
					name: '6210000000001',
					amount1: '清风抽取式面巾纸150抽X2层',
					amount2: '包',
					amount3: '1000',
					amount4: '3.00',
					amount5: '3000'
				}],
				name: this.$route.query.name,
				date: this.$route.query.date,
				shzt: this.$route.query.shzt,
				zip: this.$route.query.zip,
				aa: '很菜且狗屎',
			}
		},
		created() {
			console.log(this.name)
		},
		methods: {
			handleClick(row) {
				console.log(row);
			},
			ss() {
				alert("删除成功");
				this.$router.go(-1)
			},
			handleClose(done) {
			
				this.$confirm('确认关闭？')
					.then(_ => {
						done();
					})
					.catch(_ => {
			
					});
			},
			backa() {
				this.$router.go(-1)
			},
			getSummaries(param) {
				const {
					columns,
					data
				} = param;
				const sums = [];
				columns.forEach((column, index) => {
					if (index === 0) {
						sums[index] = '总价';
						return;
					}
					const values = data.map(item => Number(item[column.property]));
					if (!values.every(value => isNaN(value))) {
						sums[index] = values.reduce((prev, curr) => {
							const value = Number(curr);
							if (!isNaN(value)) {
								return prev + curr;
							} else {
								return prev;
							}
						}, 0);
						sums[index] += ' 元';
					} else {
						sums[index] = 'N/A';
					}
				});

				return sums;
			}
		}
	}
</script>

<style scoped>
	.big {
		background: #FFFFFF;
	}

	.oo {
		width: 80px;
		border-bottom: 1px solid gray;
		border-top: none;
		border-left: none;
		border-right: none;
		background: white;
	}

	.header {
		height: 40px;
		width: 100%;
		background: white;
		margin-top: 0px;
	}

	.hedui label {
		margin-left: 120px;
	}

	input {
		height: 40px;
		width: 300px;
		margin-top: 30px;
	}

	.inp {
		width: 80%;
		margin: auto;
		text-align: right;

		height: 300px;
	}

	.inp div {
		float: left;
		margin-left: 60px;
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
