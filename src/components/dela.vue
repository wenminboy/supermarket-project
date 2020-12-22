<template>
	<div id="show">
		<el-dialog title="操作提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose()">
			<span>请确认是否删除此条记录</span>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="dialogVisible = false,ss()">确 定</el-button>

			</span>

		</el-dialog>
	</div>
</template>
<script>
	export default {
		methods: {
			handleClick() {},
			ss() {
				alert("删除成功")
			},
			handleClose(done) {
				this.$confirm('确认关闭？')
					.then(_ => {
						done();
					})
					.catch(_ => {});
			}
		},
		data() {
			return {
				dialogVisible: false,
			}
		}
	}
</script>
<style>
</style>
