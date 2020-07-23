var villes =['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];
//affichage
villes.forEach(ville => console.log(ville));

//Utilisation de every()
lettreADansToutesLesVilles = villes.every(ville =>ville.includes("a"));
console.log('lettreADansToutesLesVilles = ' +lettreADansToutesLesVilles);

//Utilisation de some()
auMoinsUneVilleAvecUnTiret = villes.some(ville =>ville.includes("-"));
console.log('auMoinsUneVilleAvecUnTiret = ' +auMoinsUneVilleAvecUnTiret);

//Utilisation de filter()
console.log('villesSansTiretSansEspace: ' );
villesSansTiretSansEspace = villes.filter(v=>!v.includes("-")).filter( v=> !v.includes(" "));
villesSansTiretSansEspace.forEach(v =>console.log(v.toUpperCase()));

console.log('villesMajusculeSeTerminantParS: ' );
villesMajusculeSeTerminantParS = villes.filter(v => v.endsWith('s'));
villesMajusculeSeTerminantParS.forEach(v =>console.log(v.toUpperCase()));