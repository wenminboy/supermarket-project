<template>
	<div id="show">
		<div class="header">
			<p>商品类别</p>
		</div>
		<div class="big">
			<div class="left">
				<label>编码规则：</label><span>前缀+序号</span></br>
				</br>
				</br>
				</br>
				<label>编码位数：</label>
				<el-select v-model="value" placeholder="请选择">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select><br />
				
				</br>
				</br>
				
				<el-button type="primary" style="margin-left: 180px;">保存</el-button>
			</div>
			<div class="right">
				<img src="../../public/img/a1.png" v-if="value==9" />
				<img src="../../public/img/a2.png" v-if="value==10" />
				<img src="../../public/img/a3.png" v-if="value==11" />
			</div>

		</div>


	</div>
</template>

<script>
	export default {
		data() {
			return {
				options: [{
					value: '9',
					label: 9
				}, {
					value: '10',
					label: 10
				}, {
					value: '11',
					label: 11
				}],
				value: '9'
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
		height: 500px;
	}

	.big>div {
		float: left;
		width: 40%;
		margin-left: 120px;
		margin-top: 100px;
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
