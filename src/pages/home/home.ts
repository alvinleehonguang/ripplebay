import { Component } from '@angular/core';
import { NavController,AlertController,ToastController } from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';

declare var cordova: any; // global variable for paths

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
//Setup parameters for Camera and Picture
picture: any

cameraPreviewOpts: CameraPreviewOptions = {
    x: 0,
    y: 0,
    width: window.screen.width,
    height: window.screen.height,
    camera: 'back',
    toBack: true, //Use the rear camera
    tapPhoto: false,
    tapFocus: true,
    previewDrag: true
  };

pictureOpts: CameraPreviewPictureOptions = {
  width: 1000,
  height: 1000,
  quality: 85
}

constructor(public navCtrl: NavController,private cameraPreview: CameraPreview, private camera : Camera, private alertCtrl : AlertController, public toastCtrl: ToastController) {
  this.startCamera();
}

//run once app is fully loaded
startCamera(){
  this.cameraPreview.startCamera(this.cameraPreviewOpts).then(
      (res) => {
        console.log("camera res:" +  res);
      },
      (err) => {
        console.log("camera err:" + err);
  });
}

takePic(){
  this.cameraPreview.takePicture(this.pictureOpts).then((imageData) => {
    var picture = 'data:image/jpeg;base64,' + imageData;
}, (err) => {
  console.log(err);
  this.picture = 'assets/img/test.jpg';
});

// Switch camera
this.cameraPreview.switchCamera();

// set color effect to negative
this.cameraPreview.setColorEffect('negative');

// Stop the camera preview
this.cameraPreview.stopCamera();

}
}