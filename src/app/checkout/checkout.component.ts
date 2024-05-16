import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../core/service/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  checkoutForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private orderservice: OrderService) {
    this.checkoutForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      // Autres champs de la commande
    });
  }

  onSubmit() {
    if (this.checkoutForm.valid) {
      const formData = this.checkoutForm.value;
      // Envoyer les données au service API pour enregistrer la commande
      this.orderservice.createOrder(formData).subscribe(
        (response) => {
          console.log('Commande passée avec succès :', response);
          // Rediriger vers la page de confirmation de commande ou afficher un message de succès
        },
        (error) => {
          console.error('Erreur lors du passage de la commande :', error);
          // Afficher un message d'erreur à l'utilisateur
        }
      );
    } else {
      // Marquer les champs invalides pour afficher les messages d'erreur
      this.checkoutForm.markAllAsTouched();
    }
  }
}

