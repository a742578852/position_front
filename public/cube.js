/**
 * 正方体类
 */
 import * as Three from 'three'
 import * as commonFunction from '../public/CommonFunction'
function Cube(option){
    this.length = option.length || 1;
    this.width = option.width || 1;
    this.height = option.height || 1;

    this.Name = option.objName;

    this.positionX = option.position.x || 0;
    this.positionY = option.position.y || 0;
    this.positionZ = option.position.z || 0;

    this.style=option.style || {color:0xFF0000};
    //调用创建材质
    let curmaterial = commonFunction.createMaterial(this.height,this.width,this.style);
    //创建集合体
    let cubeGeometry = new Three.BoxGeometry(this.length,this.height,this.width);

    let cube = new Three.Mesh(cubeGeometry,curmaterial);
    cube.name = this.Name;
    cube.position.x = this.positionX;
    cube.position.y = this.positionY;
    cube.position.z = this.positionZ;
    return cube;
}
