import { Component, OnInit } from '@angular/core';
import {Produit} from "../model/produit.model";
import {ProduitService} from "../services/produit.service";

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
})
export class AddProduitComponent implements OnInit {

    produit = new Produit();

    message!: string;

  constructor(
      private produitService: ProduitService,
  ) { }

  ngOnInit(): void {
  }

    addProduit(): void {
      this.produitService.ajouterProduit(this.produit);
      this.message = "Produit " + this.produit.nomProduit + " ajouté avec succès !";
    }

}
