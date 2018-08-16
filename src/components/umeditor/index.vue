<template>
  <div class="editor-um">
    <script :id=id type="text/plain"></script>

    <el-dialog title="上传图片" :visible.sync="dialogVisible" width="50%" :close-on-click-modal=false :before-close="handleClose">
      <el-upload :action="uploadSmall" :before-upload="uploadImage" :multiple="true" :file-list="imageList" list-type="picture-card" :on-preview="handlePictureCardPreview"
        :on-success="uploadFileSuccess" :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="handleConfirm">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="上传视频" :visible.sync="videoDialogVisible" width="50%" :close-on-click-modal=false :before-close="handleCloseVideo">
      <!-- <el-upload :action="uploadSmall" :before-upload="uploadImage" :file-list="imageList" list-type="picture-card" :on-preview="handlePictureCardPreview"
        :on-success="uploadFileSuccess" :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload> -->
      <video v-if="video" :src="video" controls="controls"></video>
      <el-upload v-if="!video" class="upload-demo" drag :before-upload="uploadVideo" action="">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将视频拖到此处，或
          <em>点击上传</em>
        </div>
        <div v-show="showLoading" slot="tip" class="el-upload__tip">上传文件中，请稍候...</div>
      </el-upload>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleCloseVideo">取 消</el-button>
        <el-button type="primary" @click="handleConfirmVideo">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog :visible.sync="preViewVisible" size="tiny">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>
<script>

 let getUploadImgSrc = function(){alert(123)};
  export default {
    name: 'UM',
    data() {
      return {
        editor: null,
        dialogVisible: false,
        dialogImageUrl: '',
        preViewVisible: false,
        videoDialogVisible: false,
        uploadSmall: '',
        //      uploadSmall: infourl + "uploadSmall",
        imageList: [],
        video: '',
        showLoading: false,
        // config: {
        //   uploadPasteImg: true,
        //   uploadPasteImgFn: (file)=>{
        //       console.log('upload img fn ', file);
        //   }
        // }
      }
    },
    props: {
      defaultMsg: {
        type: String
      },
      config: {
        type: Object
      },
      id: {
        type: String
      },
    },
    mounted() {
      console.log(this.uploadSmall);
      const _this = this;
 	
      UM.registerUI('addUploadImg',
        function (name) {
          var me = this;
          var $btn = $.eduibutton({
            icon: 'image',
            click: function () {
              _this.imageList = [];
              _this.dialogVisible = true;
            },
            title: '上传图片'
          });
          this.addListener('selectionchange', function () {
            //切换为不可编辑时，把自己变灰
            var state = this.queryCommandState(name);
            $btn.edui().disabled(state == -1).active(state == 1)
          });
          return $btn;
        }
      );
      
      UM.registerUI('addUploadVideo',
        function (name) {
          var me = this;
          var $btn = $.eduibutton({
            icon: 'video',
            click: function () {
              _this.video = '';
              _this.videoDialogVisible = true;
            },
            title: '上传视频'
          });

          this.addListener('selectionchange', function () {
            //切换为不可编辑时，把自己变灰
            var state = this.queryCommandState(name);
            $btn.edui().disabled(state == -1).active(state == 1)
          });
          return $btn;
        }
      );
      let dealPaste = {
        uploadPasteImg: true,
        uploadPasteImgFn: (file) => {
          console.log('upload img fn ', file);
          let needRename = true;
          let needCDN = true;
          //							uploadFile(file, needRename, needCDN).then(res => {
          //            console.log('file name ', res);
          //              // _this.editor.execCommand('inserthtml', '<img src="'+res+ '" alt="图片">' +'<p><br></p>');
          //              _this.editor.execCommand('insertimage', {src: res, alt:'图片'});
          //
          //							})
        },
      };
      let config = Object.assign({}, this.config, dealPaste);
      this.editor = UM.getEditor(this.id, config); // 初始化UM
      
      
      this.editor.addListener("ready", function () {
        _this.editor.setContent(_this.defaultMsg); // 确保UM加载完成后，放入内容。
      });
    },
    methods: {
      getUMContent() { // 获取内容方法
        return this.editor.getContent()
      },
      handleClose(done) {
        this.imageList = [];
        this.dialogVisible = false;
      },
      handleCloseVideo(done) {
        this.video = '';
        this.videoDialogVisible = false;
      },
      handleConfirmVideo() {
        this.editor.execCommand('inserthtml', '<video src=' + this.video + ' controls="controls" ' + ' poster="' + this
          .video + '?vframe&offset=0&type=jpg"></video><p><br></p>');
        this.video = '';
        this.videoDialogVisible = false;
      },
      hasContents() {
        return this.editor.hasContents();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
        this.imageList = this.imageList.filter(x=>x.uid!==file.uid);
      },
      uploadFileSuccess(response, file, fileLis) {
        console.log('success ', response, file, fileLis);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.preViewVisible = true;
      },
      handleConfirm() {
        console.log('inser image');
        if(this.imageList.length===0){
        this.editor.execCommand('inserthtml', '<p><br></p>');
        } else {
          let imgsTag = this.imageList.map(img => {
          return '<img src="' + img.url + '" alt="图片">'
        });
        this.editor.execCommand('inserthtml', '<p><br></p>' + imgsTag.join('') + '<p><br></p>');
        }
        
        this.imageList = [];
        this.dialogVisible = false;
        // this.setContent(true,imgsTag.join(''));
      },
      uploadImage(file) {
        console.log('upload start ', file);
        const isLt3M = file.size / 1024 / 1024 < 3;
        if(!isLt3M){
 						 this.$message.error('上传图片不可大于3M，请重新选择上传');
 						 return false;
        }
        getUploadImgSrc(file).then(res => {
          this.imageList.push({
            name: file.name,
            url: res
          });
        });
        return false;
      },
      uploadVideo(file) {
        this.showLoading = true;
        getUploadImgSrc(file).then(res => {
          this.video = res;
          this.showLoading = false;
        });
        return false;
      },
      setContents(isAppendTo, info) {
        this.editor.setContent(info, isAppendTo);
      }
    },
    destroyed() {
      this.editor.destroy();
    }
  }

</script>
<style lang="scss" scoped>
  .upload-demo {
    text-align: center;
  }

  video {
    width: 100%;
  }
i.el-icon-plus{
  font-style: normal;
}
</style>
