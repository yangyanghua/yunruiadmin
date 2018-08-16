<template>
  <div class="sub-block">
    <el-form ref="ruleForm" label-width="120px" class="demo-ruleForm">
      <el-form-item label="商品描述" required>
        <p class="com-tip">
          上传图片宽度建议750px，单张图片最大不能超过1M，支持jpg/gif/png/bmp图片格式
        </p>
        <div class="editor-container">
          <UM :config="config" :id="um1" ref="um"></UM>

          <!-- <UE :defaultMsg=defaultMsg :config=config :id=ue1 ref="ue"></UE> -->
        </div>

      </el-form-item>
      
    </el-form>
              <div v-show="error1" class="el-form-item__error">{{error1}}</div>
    
    <!-- <div class="com-btngroup">
      <el-button type="primary" @click="gotoProduct(0)">上一步，选择商品分类</el-button>
      <el-button type="primary" @click="gotoProduct(2)">下一步，填写商品规格</el-button>

    </div> -->
  </div>
</template>
<script>
  import UM from '@/components/umeditor/index.vue';
  export default {
    data() {
      return {
        error1: '',
        um1: "um1", // 不同编辑器必须不同的id
        config: {
          initialFrameWidth: null,
          // initialFrameHeight: 350,
          autoHeightEnabled: false,
          // 		uploadPasteImg: true,
          // uploadPasteImgFn: (file)=>{
          // 	console.log('upload img fn ', file);
          // 	let needRename = true;
          // 	let needCDN = true;
          // 	uploadFile(file, needRename, needCDN).then(res => {
          // 	console.log('file name ', res);
          // 	})
          // },
          toolbar: [
            'undo redo | paragraph bold italic underline strikethrough | superscript subscript | forecolor backcolor | removeformat |',
            'selectall cleardoc',
            '| justifyleft justifycenter justifyright justifyjustify |',
            'addUploadImg addUploadVideo',
            '| '
          ]
        },
      }
    },
//  props: {
//    next: {
//      type: Function,
//      required: true,
//    },
//    detailInfo:{
//      type: String,
//      required: true
//    }
//  },
    components: {
      UM
    },
    methods: {

    checkForm() {
              console.log('detail has contents: ', this.hasContents())
        if(this.hasContents()){
          this.error1 = '';
          return true;
        
        } else {
            this.error1 = '请填写详情';
          return false;
        }
      },
      getUMContent() {
        let content = this.$refs.um.getUMContent(); // 调用子组件方法
        // this.$notify({
        //   title: '获取成功，可在控制台查看！',
        //   message: content,
        //   type: 'success'
        // });
        console.log(content);
        return content;
      },
      hasContents() {
        return this.$refs.um.hasContents();
      },
      setContent(info) {
        console.log(info);
        this.$refs.um.setContents(false, info);
      },
    },
    mounted(){
    //  this.setContent(this.detailInfo);
    }
  }

</script>
<style lang="scss" scoped>

.sub-block{
  position: relative;
}
.el-form-item__error{
  position: absolute;
  bottom: -15px;
  padding-top: 15px;
  left: 120px;
}
</style>
