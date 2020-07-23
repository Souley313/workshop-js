var log = console.log;

function Personne(nom, prenom, pseudo) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    
    this.getNomComplet = function(){
        return this.nom+ " "+this.prenom +" pseudo:"+this.pseudo;
    }
}

var jules = new Personne("LEMAIRE", "Jules", "jules77");
var paul = new Personne("LEMAIRE", "Paul", "paul44");

var afficherPersonne = function (Personne) {
    log(Personne.nom);
    log(Personne.prenom);
    log(Personne.pseudo);
    log(Personne.getNomComplet());
}
log("----");
afficherPersonne(jules);
log("----");
afficherPersonne(paul);
// modification
log("----");
jules.pseudo = " jules44 ";
log(jules.pseudo);
log(jules.getNomComplet());

log("Ajout de propriété age");
log(jules.age);
Personne.prototype.age = "NON DEFINI";
log(jules.age);
jules.age = 30;
log(jules.age);

log("Ajout de methode getInitiales ");
Personne.prototype.getInitiales = function(){
    var pr = this.prenom.charAt(0);
    var no = this.nom.charAt(0);
    return pr+no;
}
log(jules.getInitiales());

log("Objet sans fonction constructeur");
var robert = {
    prenom: "Robert",
    nom: "LEPREFET",
    pseudo: "robert77",
    getNomComplet : function(){
        return this.nom + " " + this.prenom + " " + this.pseudo;
    } 
};

afficherPersonne(robert);

log("Héritage via une fonction constructeur");
function Client(nom, prenom, pseudo, numeroClient){
    Personne.call(this,nom, prenom, pseudo);

    this.numClient = numeroClient;

    this.getInfos = function(){
        return this.numClient + " " + this.nom + " " + this.prenom;
    }
}

var steve = new Client("LUCAS", "Steve", "steve44", "A01");
afficherPersonne.call(this, steve);
log(steve.numClient);
log(steve.getInfos());