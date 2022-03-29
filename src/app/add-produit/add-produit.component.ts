import { Component, OnInit } from '@angular/core';
import {Produit} from "../model/produit.model";
import {ProduitService} from "../services/produit.service";
import {Categorie} from "../model/categorie";

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
})
export class AddProduitComponent implements OnInit {

    produit = new Produit();
    message!: string;
    categories!: Categorie[];
    newIdCat!: number;
    newCategorie!: Categorie;

  constructor(
      private produitService: ProduitService,
  ) { }

  ngOnInit(): void {
      this.categories = this.produitService.listeCategories();
  }

    addProduit(): void {
      this.newCategorie = this.produitService.consulterCategories(this.newIdCat);
      this.produit.categorie = this.newCategorie;
      this.produitService.ajouterProduit(this.produit);
      this.message = "Produit " + this.produit.nomProduit + " ajouté avec succès !";
    }

}
