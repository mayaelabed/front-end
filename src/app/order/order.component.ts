import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderService } from '../core/service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  constructor(private orderService: OrderService) { }

  placeOrder(orderDetails: any): void {
    this.orderService.placeOrder(orderDetails)
      .subscribe(
        response => {
          console.log('Commande passée avec succès:', response);
          // Afficher un message de confirmation à l'utilisateur
        },
        error => {
          console.error('Erreur lors du passage de la commande:', error);
          // Afficher un message d'erreur à l'utilisateur
        }
      );
  }
}
