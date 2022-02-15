import { Component, OnInit } from '@angular/core';
import { PhotoComparisonService } from '../photo-comparison.service';

@Component({
  selector: 'app-photo-comparision',
  templateUrl: './photo-comparision.component.html',
  styleUrls: ['./photo-comparision.component.scss']
})
export class PhotoComparisionComponent implements OnInit {
  photoList: any =[];
  photolistCompareData : any =[];

  constructor(private  photoService:PhotoComparisonService) { }

  ngOnInit(): void {
    this.getPhotoList();

  }

  getPhotoList () {
  this.photoService.getPhotos().subscribe(data =>{
    console.log("data ===" ,JSON.stringify(data))
    for(let i =0;i < data.length ;i++){
      data[i].isAdded = false;
      this.photoList.push(data[i]);
      if (this.photoList.length == 8) {
        break;
      }
    }   
  }
    )
  }

  addCompare (photo :any) {
    photo.isAdded =true
   this.photolistCompareData.push(photo)
  }

  removeCompare (photo:any) {
    for( var i = 0; i < this.photolistCompareData.length; i++){ 
      if ( this.photolistCompareData[i].id == photo.id) { 
        this.photolistCompareData.splice(i, 1); 
      }
  }


  this.photoList.forEach((element:any )=> {
    if(element.id == photo.id) {
      element.isAdded = false
    }
  });
  }

 

  
}
