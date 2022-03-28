import { Injectable } from '@angular/core';
import {Produit} from "../model/produit.model";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
    produits : Produit[];

    constructor() {
        this.produits = [
            {idProduit : 1, nomProduit : "PC Asus", prixProduit : 3000.600,dateCreation : new Date("01/14/2011")},
            {idProduit : 2, nomProduit : "Tablette Ipad", prixProduit : 7500.50, dateCreation : new Date("09/30/2018")},
            {idProduit : 3, nomProduit : "Téléphone Iphone", prixProduit : 6505.99,dateCreation : new Date("07/17/2021")},
            {idProduit : 4, nomProduit : "Télévision connectée", prixProduit : 11560.75,dateCreation : new Date("05/20/2018")}
        ];
    }

    listeProduit(): Produit[] {
        return this.produits;
    }

    ajouterProduit(produit: Produit): void {
        this.produits.push(produit);
    }

    supprimerProduit( produit: Produit){
        //supprimer le produit prod du tableau produits
        const index = this.produits.indexOf(produit, 0);
        if (index > -1) {
            this.produits.splice(index, 1);
        }
    }
    //ou Bien
    // /* this.produits.forEach((cur, index) => {
    // if(prod.idProduit === cur.idProduit) {
    // this.produits.splice(index, 1);
    // }
    // }); */ }

    consulterProduit(id: number): Produit {
        return <Produit>this.produits.find(p => p.idProduit == id);
    }

    updateProduit(produit: Produit) {
        this.supprimerProduit(produit);
        this.ajouterProduit(produit);
        this.trierProduits();
    }

    trierProduits(){
        this.produits = this.produits.sort((n1,n2) => {
            if (n1.idProduit > n2.idProduit) {
                return 1;
            } if (n1.idProduit < n2.idProduit) {
                return -1;
            } return 0;
        })
        ; }
}
