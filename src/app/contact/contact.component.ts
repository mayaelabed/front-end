import { Component, OnInit } from '@angular/core';
import { contact } from '../model/contact.model';
import { ContactService } from '../core/service/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: contact = new contact();
  constructor(private contactservice: ContactService,
    private router: Router) { }

  ngOnInit(): void {
  }

  save(){
    this.contactservice.createcontact(this.contact).subscribe( data =>{
      console.log(data);
      this.goTocontactList();
    },
    error => console.log(error));
  }

  goTocontactList(){
    this.router.navigate(['/contact']);
  }
  
  onSubmit(){
    console.log(this.contact);
    this.save();
  }
}