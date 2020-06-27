import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from "@angular/common/http"
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myDate:any = new Date();

  sequencenumber:string = "";

    maseterdetails:any = {Header:[{BID:'B002',BDATE:'22/02/2020'}],
                          Details:[ {DID:'D001',DITEM:'item1',DBID:'B001',DDATE:'22/02/2020'},
                                    {DID:'D001',DITEM:'item1',DBID:'B001',DDATE:'22/02/2020'},
                                    {DID:'D001',DITEM:'item1',DBID:'B001',DDATE:'22/02/2020'},
                                    {DID:'D001',DITEM:'item1',DBID:'B001',DDATE:'22/02/2020'}]}


  constructor(private rout:Router,private http:HttpClient,private datePipe: DatePipe) { }

  ngOnInit() {
    this.myDate = this.datePipe.transform(this.myDate, 'dd-MM-yyyy');
    // this.inserdata();
    this.getallrecords();
  }
  gonextpage()
  {
    this.rout.navigate(['/home']);

  }
  inserdata(){
    let serviceBase = "http://localhost:8080/api/gettnumber.php";
    var data = {TNUMBER:this.sequencenumber,PTNUMBER:"1",CNUMBER:"2",DDATE:this.myDate,STATUS:'1'}
    this.http.post(serviceBase,JSON.stringify(data) ).subscribe(data => {
        if(typeof data['records'] == 'undefined'){
          this.sequencenumber = '1';
        }else
        {
          this.sequencenumber = data['records'][0]['TNUMBER'];
        }
      console.log(data);  

    },(err)=>{
      console.log(err)
    })

  }

  getallrecords(){
    let serviceBase = "http://localhost:8080/api/gettnumber.php";
    var data = {TNUMBER:'getall',PTNUMBER:"",CNUMBER:"",DDATE:this.myDate,STATUS:''}
    this.http.post(serviceBase,JSON.stringify(data) ).subscribe(data => {
        
      console.log(data);  

    },(err)=>{
      console.log(err)
    })

  }

  insermasterdetails(){
    let serviceBase = "http://localhost:8080/api/billdetails.php";
    this.http.post(serviceBase,JSON.stringify(this.maseterdetails) ).subscribe(data => {
      
      console.log(data);  

    },(err)=>{
      console.log(err)
    })
  }

}
