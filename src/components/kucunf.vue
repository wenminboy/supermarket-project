<template>
	<div id="show">
		<div class="header">
			<p>商品库存明细</p>
		</div>
			<div class="top">
				<div>
				<el-dropdown  trigger="click">
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
				<el-dropdown  trigger="click">
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
				  <el-input
				    placeholder="请输入内容"
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
			

				<el-table-column prop="date" label="商品编码" width="150">
				</el-table-column>
				<el-table-column prop="name" label="商品名称" width="210">
				</el-table-column>
				<el-table-column prop="address" label="所属门店" width="140">
				</el-table-column>
				<el-table-column prop="jbman" label="出入库" width="70">
				</el-table-column>
				<el-table-column prop="crkzt" label="业务类型" width="80">
				</el-table-column>
				<el-table-column prop="zdman" label="业务单号" width="90">
				</el-table-column>
				<el-table-column prop="zddata" label="业务日期" width="160">
				</el-table-column>
				<el-table-column prop="shzt" label="入库数量" width="120">
				</el-table-column>
				<el-table-column prop="edit" label="出库数量" >
				</el-table-column>
				<el-table-column prop="edita" label="库存数量" >
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
					date: '6210000000001',
					name: '清风抽取式面巾纸150抽X2层',
					address: '鲁班（宇宙级）',
					jbman:'出库',
					zdman:'调拨入库',
					zddata:'IO2018042810101',
					shzt:'2018-04-28',
					crkzt:'100'	,
					edit:'---',
					edita:'2000'
				}, {
				date: '6210000000001',
				name: '清风抽取式面巾纸150抽X2层',
				address: '鲁班（宇宙级）',
				jbman:'入库',
				zdman:'其他入库',
				zddata:'IO2018042810101',
				shzt:'2018-04-28',
				crkzt:'100'	,
				edit:'---',
				edita:'2000'
				}, {
				date: '6210000000001',
				name: '清风抽取式面巾纸150抽X2层',
				address: '鲁班（宇宙级）',
				jbman:'入库',
				zdman:'其他入库',
				zddata:'IO2018042810101',
				shzt:'2018-04-28',
				crkzt:'200'	,
				edit:'---',
				edita:'1000'
				}, {
				date: '6210000000001',
				name: '清风抽取式面巾纸150抽X2层',
				address: '鲁班（宇宙级）',
				jbman:'入库',
				zdman:'其他入库',
				zddata:'IO2018042810101',
				shzt:'2018-04-28',
				crkzt:'100'	,
				edit:'---',
				edita:'2000'
				}, {
				date: '6210000000001',
				name: '清风抽取式面巾纸150抽X2层',
				address: '鲁班（宇宙级）',
				jbman:'入库',
				zdman:'其他入库',
				zddata:'IO2018042810101',
				shzt:'2018-04-28',
				crkzt:'100'	,
				edit:'---',
				edita:'1000'
				}, {
					date: '6210000000001',
					name: '清风抽取式面巾纸150抽X2层',
					address: '鲁班（宇宙级）',
					jbman:'入库',
					zdman:'其他入库',
					zddata:'IO2018042810101',
					shzt:'2018-04-28',
					crkzt:'100'	,
					edit:'---',
					edita:'2000'
				}, {
					date: '6210000000001',
					name: '清风抽取式面巾纸150抽X2层',
					address: '鲁班（宇宙级）',
					jbman:'入库',
					zdman:'其他入库',
					zddata:'IO2018042810101',
					shzt:'2018-04-28',
					crkzt:'100'	,
					edit:'---',
					edita:'2000'
				}, {
				date: '6210000000001',
				name: '清风抽取式面巾纸150抽X2层',
				address: '鲁班（宇宙级）',
				jbman:'入库',
				zdman:'其他入库',
				zddata:'IO2018042810101',
				shzt:'2018-04-28',
				crkzt:'100'	,
				edit:'---',
				edita:'2000'
				}],
				input1: '',
			}
		},created() {
			console.log(this.tableData[0].shzt)
			if(this.tableData[0].shzt=='审核失败'){
			}
			
		}
	}
</script>
