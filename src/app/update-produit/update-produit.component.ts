import { Component, OnInit } from '@angular/core';
import {Produit} from "../model/produit.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ProduitService} from "../services/produit.service";

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styles: [
  ]
})
export class UpdateProduitComponent implements OnInit {

    produit = new Produit();

  constructor(
      private activateRoute: ActivatedRoute,
      private produitService: ProduitService,
      private router: Router,
  ) { }

  ngOnInit(): void {
     // console.log(this.activateRoute.snapshot.params['id']);
      this.produit = this.produitService.consulterProduit(this.activateRoute.snapshot.params['id']);
      //console.log(this.produit);
  }

    updateProduit() {
      this.produitService.updateProduit(this.produit);
      this.router.navigate(['produits']);
    }
}
