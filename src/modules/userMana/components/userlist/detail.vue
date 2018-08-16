<template>
	<section>
		<h1 class="userName">孙悟空</h1>
		<div class="userInfoCon">
			<el-tabs type="border-card" v-model="activeName" @tab-click="handleClick" >
			  <el-tab-pane label="基本资料" name="1">
				<ul class="infoList">
					<li class="infoItem">
						<span class="infoLable">上次登录：</span>
						<p class="info">2018-05-15 18:16:00</p>
					</li>
					<li class="infoItem">
						<span class="infoLable">用户状态：</span>
						<p class="info">启用</p>
					</li>
					<li class="infoItem">
						<span class="infoLable">注册时间：</span>
						<p class="info">2018-05-15 18:16:00</p>
					</li>
					<li class="infoItem">
						<span class="infoLable">客户组：</span>
						<p class="info">普通会员</p>
					</li>
					<li class="infoItem">
						<span class="infoLable">所属区域：</span>
						<p class="info">广州</p>
					</li>
					<li class="infoItem">
						<span class="infoLable">手机号码：</span>
						<p class="info">18378401067</p>
					</li>		
					<li class="infoItem">
						<span class="infoLable">姓名：</span>
						<p class="info">孙悟空</p>
					</li>						
				</ul>
				     
			  </el-tab-pane>
			  <el-tab-pane label="余额记录" name="2">余额记录</el-tab-pane>
			  <el-tab-pane label="云贝记录" name="3">云贝记录</el-tab-pane>
			  <el-tab-pane label="订单记录" name="4">订单记录</el-tab-pane>
			  <el-tab-pane label="名片信息" name="5">名片信息</el-tab-pane>
			  <el-tab-pane label="传单信息" name="6">传单记录</el-tab-pane>
			  <el-tab-pane label="收藏记录" name="7">收藏记录</el-tab-pane>
			  <el-tab-pane label="分享记录" name="8">分享记录</el-tab-pane>
			  <el-tab-pane label="评论记录" name="9">评论记录</el-tab-pane>
			</el-tabs>

			
		</div>
		
	</section>
</template>

<script>
  export default {
    data() {
      return {
    	activeName:'1',
    	
      	
      	
      }
    },
    methods: {
		handleClick(){
			alert(this.activeName);
		}

    },
    mounted(){
    }
  }
</script>

<style lang="scss" scoped="scoped">
	.userName{
		height: 60px;
		line-height: 60px;
		font-size: 26px;
	}
	.userInfoCon{
		width: 100%;
	
	}
	.infoList{
		list-style: none;
		width: 100%;
		height: auto;
		.infoItem{
			list-style: none;
			height: 40px;
			line-height: 40px;
			.infoLable{
				float: left;
				width: 100px;
				text-align: right;
			}
			.info{
				text-align: left;
				width: 74%;
				overflow: hidden;
			}
		}		
	}

	
</style>