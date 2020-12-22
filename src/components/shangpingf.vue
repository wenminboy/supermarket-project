<template>
	<div id="show">
		<div class="header">
			<p>图片库管理</p>
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
				<el-table-column prop="date" label="编码" width="100">
				</el-table-column>
				<el-table-column prop="name" label="相册名称" width="120">
				</el-table-column>
				<el-table-column prop="province" label="联系人" width="120">
				</el-table-column>
				<el-table-column prop="city" label="联系电话" width="120">
				</el-table-column>
				<el-table-column  label="精品图片">
				        <template slot-scope="scope">
				            <el-popover placement="top-start" title="" trigger="hover">
				              <img :src="carousels" alt="" style="width: 150px;height: 150px">
				              <img slot="reference" :src="carousels" style="width: 30px;height: 30px">
							
				            </el-popover>
				        </template>
				      </el-table-column>
				<el-table-column prop="address" label="所属区域" width="250">
				</el-table-column>
				<el-table-column prop="zip" label="详细地址" width="80">
				</el-table-column>
				<el-table-column prop="state" label="状态" width="80">
				</el-table-column>

				<el-table-column label="操作" >
					<template slot-scope="scope">
						<el-button @click="handleClick(scope.row),chakan()" type="text" size="small">查看</el-button>
						<el-button type="text" size="small" @click="handleClick(scope.row),xiugai()">修改</el-button>
						<el-button type="text" size="small" @click="dialogVisible = true">删除</el-button>
					</template>
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
<div class="panduan" >
	<el-dialog
	  title="操作提示"
	  :visible.sync="dialogVisible"
	  width="30%"
	  :before-close="handleClose">
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
			
			handleClick(row) {
				this.shuju=row
			},open1() {
				this.$notify({

					message: '成功将该数据删除',
					type: 'success'
				});
			},chakan(){
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
			},xiugai(){
				this.$router.push({
					path:'/homePage/page1/xiugai',
					query:{	
						name:this.shuju.name,
						date:this.shuju.date,
						city:this.shuju.city,
						address:this.shuju.address,
						state:this.shuju.state,
						shzt:this.shuju.shzt,
						zip:this.shuju.zip
					}
				})
			} ,handleClose(done) {
				    
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
				num:'1',
				 dialogVisible: false,
				 shuju:[],
				 imga:'../assets/dd.png',
				 carousels: [
				 require("../assets/dd.png"),
				 ],
				tableData: [{
					date: '007',
					name: '家居家纺图片',
					province: '鲁班(宇宙级)',
					city: '1399999999',
					address: '上海市普陀区金沙江路 1518 弄',
					state: '正常',
					
					zip: 200333
				}, {
					date: '007',
					name: '家居家纺图片',
					province: '鲁班(宇宙级)',
					city: '1399999999',
					address: '上海市普陀区金沙江路 1518 弄',
					
					state: '正常',
					zip: 200333
				}, {
					date: '007',
					name: '家居家纺图片',
					province: '鲁班(宇宙级)',
					city: '1399999999',
					address: '上海市普陀区金沙江路 1518 弄',
					state: '正常',
					zip: 200333
				}, {
					date: '007',
					name: '家居家纺图片',
					province: '鲁班(宇宙级)',
					city: '1399999999',
					address: '上海市普陀区金沙江路 1518 弄',
					state: '正常',
					zip: 200333
				}, {
					date: '007',
					name: '鲁班(宇宙级)',
					province: '鲁班(宇宙级)',
					city: '1399999999',
					address: '上海市普陀区金沙江路 1518 弄',
					state: '正常',
					zip: 200333
				}, {
					date: '007',
					name: '家居家纺图片',
					province: '鲁班(宇宙级)',
					city: '1399999999',
					address: '上海市普陀区金沙江路 1518 弄',
					state: '正常',
					zip: 200333
				}, {
					date: '007',
					name: '家居家纺图片',
					province: '鲁班(宇宙级)',
					city: '1399999999',
					address: '上海市普陀区金沙江路 1518 弄',
					state: '正常',
					zip: 200333
				}, {
					date: '007',
					name: '家居家纺图片',
					province: '鲁班(宇宙级)',
					city: '1399999999',
					address: '上海市普陀区金沙江路 1518 弄',
					state: '正常',
					zip: 200333
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
