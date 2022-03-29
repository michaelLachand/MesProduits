import { Component, OnInit } from '@angular/core';
import {Produit} from "../model/produit.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ProduitService} from "../services/produit.service";
import {Categorie} from "../model/categorie";

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styles: [
  ]
})
export class UpdateProduitComponent implements OnInit {

    produit = new Produit();
    categories!: Categorie[];
    updatedCategorie!: Categorie;

  constructor(
      private activateRoute: ActivatedRoute,
      private produitService: ProduitService,
      private router: Router,
  ) { }

  ngOnInit(): void {
      this.categories = this.produitService.listeCategories();
      this.produit = this.produitService.consulterProduit(this.activateRoute.snapshot.params['id']);
      //console.log(this.produit);
  }

    updateProduit() {
      this.updatedCategorie = this.produitService.consulterCategories(this.produit.categorie.idCat);
      this.produit.categorie = this.updatedCategorie;
      this.produitService.updateProduit(this.produit);
      this.router.navigate(['produits']);
    }
}
