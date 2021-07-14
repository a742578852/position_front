<template >
<div>
  <!-- <input v-model="val">
  {{val}} -->
  <div id="mains">
  </div>
  </div>
</template>

<script>

import * as Three from 'three'
import OrbitControls from 'three-orbitcontrols'
import  {MTLLoader,OBJLoader} from 'three-obj-mtl-loader'
import $ from 'jquery'
  export default {
    data(){
      return {
        scene:null,
        camera:null,
        renderer:null,
        controls:null,
        val:'100',
        object:null,
        timer:'',
        timers:'',
      }
    },
methods:{
  init(){
      //获取实例
    const container = document.getElementById('mains');
    const width = window.innerWidth-240
    const height = window.innerHeight-110
    // 创建场景
    this.scene = new Three.Scene()

    // 加载辅助坐标系 实际应用的时候需要注释此代码
     const axisHelper = new Three.AxisHelper(1000)
     this.scene.add(axisHelper)
    
    //创建相机
    this.camera = new Three.PerspectiveCamera(65,width/height,0.1,10000)
    this.camera.position.y = -300
    this.camera.position.z = 1000
    this.camera.lookAt(0,0,0)
    this.scene.add(this.camera)

    //创建渲染器
    this.renderer = new Three.WebGLRenderer({
        antialias: true,//是否开启反锯齿，设置为true开启反锯齿。
        alpha: true,//是否可以设置背景色透明。
        logarithmicDepthBuffer: true//模型的重叠部位便不停的闪烁起来。这便是Z-Fighting问题，为解决这个问题，我们可以采用该种方法
    })
        this.renderer.setSize(width, height);//渲染器的尺寸与windows的尺寸相同
         this.renderer.setClearColor(0x00ffff);//设置渲染的背景颜色
        this.renderer.setPixelRatio(window.devicePixelRatio);//设置渲染器的分辨率与浏览器电脑本身的分辨率相同
        //将渲染器添加到我们的网页中，可以将渲染的内容在网页中显示出来
        container.appendChild(this.renderer.domElement);

        //加载相机控件
         this.controls = new OrbitControls(this.camera,this.renderer.domElement);
        
        

        //初始化灯光
        // 环境光
        const ambient = new Three.AmbientLight(0xffffff,1)
        ambient.name = '环境光'
        this.scene.add(ambient)
        //添加平行光
        let directionalLight = new Three.DirectionalLight(0xffffff,0.3);
        directionalLight.position.set(0,200,0);
        this.scene.add(directionalLight)

      //创建主地面
      const floorMain = new Three.BoxGeometry(2000,1000,10)
      const floorMeterial = new Three.MeshLambertMaterial({
        color:7377883,
        transparent:true,
        opacity:0.4
      })
      const floorMesh = new Three.Mesh(floorMain,floorMeterial)
      floorMesh.position.set(0,0,0)
      this.scene.add(floorMesh)
  },
  getStoreData  () {
    $.ajax({
        url: "http://192.168.199.216:8888/location-position/test/getLocation",
        type: 'GET',
        dataType: 'JSON',
        data: {},
        success: function (data) {
            window.localStorage.setItem('Store3DData',JSON.stringify(data.data[0].x));
        }
        
    });
    var s = window.localStorage.getItem('Store3DData')
    this.getObj(s)
    //删除重复小车
      var allChildren = this.scene.children;
      var lastObject = allChildren[allChildren.length-1];
      this.scene.remove(lastObject);
    
},
        //渲染动画
        animate() {
          requestAnimationFrame(this.animate)
        
          // 更新加载器
          this.renderer.render(this.scene, this.camera)
      },
      //加载外部模型
      
      getObj(val) {
        const mtlLoader = new MTLLoader()// 材质文件加载器
        const objLoader = new OBJLoader()// obj加载器
        
        mtlLoader.load('../../static/AGV.mtl', (materials) => {
        // materials.preload()
        objLoader.setMaterials(materials)
        objLoader.load('../../static/AGV.obj', (object) => {
          object.name = '小车'
           object.position.set(val,1,40)
          object.rotateX(-29.8)
          object.scale.set(0.1,0.1,0.1)
          this.scene.add(object)
        })
      })
      },
     
},
mounted(){
  this.init()
  this.animate()
  // this.getObj(this.val)
  this.timer = setInterval(this.getStoreData, 3000);
},
beforeDestroy() {
      clearInterval(this.timer);
     
    },
    
// watch:{
//   val:function(newVal,oldVal){
//     console.log('111 '+newVal+'  222'+oldVal)
//     if(newVal!=oldVal){
//       this.getObj(newVal)
//       //删除重复小车
//       var allChildren = this.scene.children;
//       var lastObject = allChildren[allChildren.length-1];
//       this.scene.remove(lastObject);
//     }
//   }
  
// }
  }
</script>

<style lang="scss">
</style>