<template>
	<div id="show">
		<div class="header">
			<p>终端销售交易明细</p>
		</div>
			<div class="top">
				<div>
				<el-dropdown  trigger="click">
				  <span class="el-dropdown-link">
				    促销状态<i class="el-icon-arrow-down el-icon--right"></i>
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
				  <el-input
				    placeholder="请输入促销编码"
				    suffix-icon="el-icon-search"
				    v-model="input1" style="width: 300px;">
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
			

				<el-table-column prop="date" label="促销编码" width="180">
				</el-table-column>
				<el-table-column prop="name" label="销售" width="220">
				</el-table-column>
				<el-table-column prop="address" label="促销日期" width="230">
				</el-table-column>
				<el-table-column prop="jbman" label="制单人员" width="80">
				</el-table-column>
				<el-table-column prop="crkzt" label="审核日期" width="170">
				</el-table-column>
				<el-table-column prop="zdman" label="审核状态" width="110">
				</el-table-column>
				<el-table-column prop="zddata" label="促销状态" width="110">
				</el-table-column>
				<el-table-column prop="edix" label="" >
				</el-table-column>
			</el-table>
	<div class="block" style="margin:30px 400px;">
		   
		    <el-pagination
		      :page-size="1"
		      layout="prev, pager, next, jumper"
		      :total="1">
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
	  .top{
		  height: 40px;
		
		   line-height: 30px;
	  }
	  
	  .top div{
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
					date: 'DB2018042810101',
					name: '销售',
					address: '2018-04-28 ~  2018-05-28',
					jbman:'aabb',
					zdman:'待审核',
					zddata:'待促销',
					edix:'...',
					crkzt:'2018-05-28'
				
				}, {
					date: 'DB2018042810101',
					name: '销售',
					address: '2018-04-28 ~  2018-05-28',
					jbman:'aabb',
					zdman:'待审核',
					zddata:'待促销',
					edix:'...',
					crkzt:'2018-05-28'
				}, {
					date: 'DB2018042810101',
					name: '销售',
					address: '2018-04-28 ~  2018-05-28',
					jbman:'aabb',
					zdman:'待审核',
					zddata:'待促销',	
					edix:'...',
					crkzt:'2018-05-28'
				}, {
					date: 'DB2018042810101',
					name: '销售',
					address: '2018-04-28 ~  2018-05-28',
					jbman:'aabb',
					zdman:'待审核',
					zddata:'待促销',
					edix:'...',
					crkzt:'2018-05-28'
				}, {
					date: 'DB2018042810101',
					name: '销售',
					address: '2018-04-28 ~  2018-05-28',
					jbman:'aabb',
					zdman:'待审核',
					zddata:'待促销',
					edix:'...',
					crkzt:'2018-05-28'
				}, {
				date: 'DB2018042810101',
				name: '销售',
				address: '2018-04-28 ~  2018-05-28',
				jbman:'aabb',
				zdman:'待审核',
				zddata:'待促销',
				edix:'...',
				crkzt:'2018-05-28'
				}, {
					date: 'DB2018042810101',
					name: '销售',
					address: '2018-04-28 ~  2018-05-28',
					jbman:'aabb',
					zdman:'待审核',
					zddata:'待促销',
					edix:'...',
					crkzt:'2018-05-28'
				}, {
					date: 'DB2018042810101',
					name: '销售',
					address: '2018-04-28 ~  2018-05-28',
					jbman:'aabb',
					zdman:'待审核',
					zddata:'待促销',
					edix:'...',
					crkzt:'2018-05-28'
				}],
				input1: '',
			}
		},methods: {
			handleClick(row) {
				console.log(row);
			},
			ss() {
				alert("删除成功")
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
	}
</script>
