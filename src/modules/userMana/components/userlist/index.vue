<template>
	<section>
		<div class="tap">
			<el-button>导出用户</el-button>
		</div>
		<div class="formContent">
	        <el-form :inline="true" :model="searchForm" class="demo-form-inline">   
	          <el-form-item label="手机">
	            <el-input size="medium" class="input_150" v-model="searchForm.phone" placeholder="请输入用户手机"></el-input>
	          </el-form-item>
	          <el-form-item label="姓名"> 
	            <el-input size="medium" class="input_150" v-model="searchForm.name" placeholder="请输入用户姓名"></el-input>
	          </el-form-item>  
	          <el-form-item label="注册时间"> 
			    <el-date-picker
			      v-model="searchForm.regdate"
			      type="daterange"
			      range-separator="至"
			      start-placeholder="开始日期"
			      end-placeholder="结束日期">
			    </el-date-picker>
	          </el-form-item>  	          
	          <el-form-item>
	            <el-button type="primary" size="medium"  icon="el-icon-search" >搜索</el-button>
	            <el-button size="medium"  icon="el-icon-refresh">重置</el-button>
	          </el-form-item>
	        </el-form>			
		</div>
		<div class="tableContent">
		  <el-table :data="tableData" border style="width: 90%">
		    <el-table-column  prop="id" label="ID" >
		    </el-table-column>
		    <el-table-column  prop="phone" label="手机号码">
			</el-table-column>
		    <el-table-column  prop="name" label="姓名">
			</el-table-column>			
		    <el-table-column  prop="regAdd" label="注册区域">
			</el-table-column>
		    <el-table-column  prop="status" label="状态">
			</el-table-column>			
		    <el-table-column  prop="yunbeiBalance" label="云贝余额">
			</el-table-column>	
		    <el-table-column  prop="balance" label="账号余额">
			</el-table-column>		    
		    <el-table-column  prop="regDate" label="注册时间">
			</el-table-column>			        
		    <el-table-column  label="操作">
		      <template slot-scope="scope">
		        <el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>
		      </template>		    		
		    </el-table-column>
		  </el-table>			
		</div>
	   <div class="pagi">
		   <el-pagination
		      @size-change="handleSizeChange"
		      @current-change="handleCurrentChange"
		      :current-page="currentPage4"
		      :page-sizes="[10, 20, 30, 40]"
		      :page-size="100"
		      layout="total, sizes, prev, pager, next, jumper"
		      :total="400">
		    </el-pagination>	   	
	   </div>


	</section>
</template>

<script>
  export default {
    data() {
      return {
      	searchForm:{
      		phone:'',
      		name:'',
      		regdate:'',
      	},
      	currentPage4:1,
        tableData: [{
          id:"9527",
          phone:'18378401067',
          regAdd:'广州',
          status:'启用',
          yunbeiBalance:'5305',
          balance:'1200',
          regDate: '2016-05-02',
          name: '王小虎',
        }],      	
      	
      	
      }
    },
    /*列表全选*/
    watch: {

    },
    methods: {
	 handleClick(row){
	 	 this.$router.push({ path: '/userdetail' });
	 },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }	
    },
    mounted(){
    }
  }
</script>

<style lang="scss" scoped="scoped">
	.tap{
		height: 60px;
		line-height: 60px;
		width: 100%;
	}
	.el-table__header{
		text-align: center;
	}
	.pagi{
		width: 90%;
		text-align: center;
		margin-top: 30px;
	}
</style>