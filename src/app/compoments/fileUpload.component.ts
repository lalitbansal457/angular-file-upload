import { Component } from '@angular/core';
import {HttpClient, HttpEventType} from '@angular/common/http'

@Component({
  selector: 'file-uplopad',
  templateUrl: './fileUpload.component.html',
})
export class FileUpload {
	selectedFile: File ;
	profileUrl:string = "./assets/images/no-photo.jpg";

	constructor(private http:HttpClient) {

	}

	onFileChanged(event) {
	  	this.selectedFile = event.target.files[0];
	  	console.log(this.selectedFile);

	  	if (event.target.files && event.target.files[0]) {
  	      var reader = new FileReader();
  	      reader.onload =  (e:any) => {
  	          this.profileUrl = e.target.result;
  	      };
  	      reader.readAsDataURL(event.target.files[0]);
  	  	}
	  	  //this.infoForm.controls['entityImageCtrl'].setValue(event.target.files ? event.target.files[0].name : '' )
	}

	// As Binary
	/*uploadFile() {
		this.http.post('my-backend.com/file-upload', this.selectedFile)
		    .subscribe();
	}*/

	// as formData
	uploadFile() {
		const uploadData = new FormData();

	  	uploadData.append('myFile', this.selectedFile, this.selectedFile.name);

	  	this.http.post('my-backend.com/file-upload', uploadData, {reportProgress: true,
    observe: 'events'}).subscribe(event => {
    	if(event.type == HttpEventType.UploadProgress) {
    		console.log(Math.round(event['loaded']/event['total']* 100)  + '%' );
    	} else if (event.type == HttpEventType.Response) {
    		console.log(event);
    	}
    	

    });
 	}
	

	



}
