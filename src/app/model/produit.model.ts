import {Categorie} from "./categorie";

export class Produit {
    idProduit!: number;
    nomProduit!: string;
    prixProduit!: number;
    dateCreation!: Date;
    categorie!: Categorie;

/*    constructor(idProduit: number,nomProduit: string,prixProduit: number,dateCreation: Date) {
        this.idProduit = idProduit;
        this.nomProduit = nomProduit;
        this.prixProduit = prixProduit;
        this.dateCreation = dateCreation;
    }*/
}
