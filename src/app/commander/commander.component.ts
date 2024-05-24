import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-commander',
  templateUrl: './commander.component.html',
  styleUrls: ['./commander.component.css']
})
export class CommanderComponent implements OnInit {


  data :any
  userId:any
  p:any
  idProduit:any
  constructor(
    private http : HttpClient , private route: ActivatedRoute, private router: Router
  ) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('user')
    this.getCommande()
  }

  getCommande(){
    console.log(this.userId)
    this.http.get('http://localhost:3001/commande/'+this.userId).subscribe(res=>{
      this.data = res
      console.log(res)
 

    })
  }

}



