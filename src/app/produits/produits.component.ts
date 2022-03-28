import { Component, OnInit } from '@angular/core';
import {Produit} from "../model/produit.model";
import {ProduitService} from "../services/produit.service";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
})
export class ProduitsComponent implements OnInit {

    produits : Produit[];

    constructor(
        private produitService: ProduitService
    ) {
        this.produits = this.produitService.listeProduit();
    }
  ngOnInit(): void {
  }

    supprimerProduit(produit: Produit) {
        let conf = confirm("Etes-vous sûr ?");
        if (conf) {
            this.produitService.supprimerProduit(produit);
        }
    }
}
