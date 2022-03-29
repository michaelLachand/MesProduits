import { Component, OnInit } from '@angular/core';
import {Produit} from "../model/produit.model";
import {ProduitService} from "../services/produit.service";
import {Categorie} from "../model/categorie";

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styles: [
  ]
})
export class RechercheParCategorieComponent implements OnInit {

    produits!: Produit[];
    categories!: Categorie[];
    IdCategorie!: number;


  constructor(
      private produitService: ProduitService,
  ) { }

  ngOnInit(): void {
      this.categories = this.produitService.listeCategories();
      this.produits = [];
  }

    onChange() {
        console.log(this.IdCategorie)
        this.produits = this.produitService.rechercherParCategorie(this.IdCategorie);
    }

    supprimerProduit(produit: Produit) {
        let conf = confirm("Etes-vous sûr ?");
        if (conf) {
            this.produitService.supprimerProduit(produit);
            this.produits = this.produitService.rechercherParCategorie(this.IdCategorie);
        }
    }


}
