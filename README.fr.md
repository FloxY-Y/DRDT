<!-- omit in toc -->
# DRDT
dark reader detection tool est un script pour détecter les personnes qui utilisent des add-ons comme dark reader.

<!-- omit in toc -->
## table des matières
- [Note](#note)
  - [Pourquoi utiliser ce script](#pourquoi-utiliser-ce-script)
  - [informations qui seraient appréciées](#informations-qui-seraient-appréciées)
- [Licence](#licence)
- [Comment l'utiliser](#comment-lutiliser)
- [documentation](#documentation)
  - [exemple](#exemple)
- [avertissement](#avertissement)

## Note
Je suis un débutant en JS et sur GitHub, il y a donc de grandes chances qu'il y ait des problèmes dans mon script ou des éléments qui ne sont pas optimisés.

### Pourquoi utiliser ce script
Les add-ons comme darkreader peuvent pour certains sites créer des problèmes (informations cachées à cause d'un filtre trop violent) ou même faire le contraire de ce que veut l'utilisateur (exemple vous avez un site qui est déjà avec un thème sombre et dark reader ou autre le met en blanc).
le script peut également être utilisé si vous avez déjà un joli thème sombre et que vous souhaitez que l'utilisateur en profite.

### informations qui seraient appréciées
- veuillez ne pas utiliser le script pour bloquer les utilisateurs ou les traquer.
- veuillez utiliser ce script uniquement si ce type d'add-ons crée des problèmes sur votre site et uniquement pour afficher un popin pour avertir l'utilisateur que l'add-ons peut créer des problèmes.
- veuillez mentionner l'auteur dans la liste des librairies utilisées et donner le lien github de ce script.

Je tiens à vous rappeler que tous ceux qui est dit dans cette section ne sont pas légalement obligatoires mais seraient appréciés <3

## Licence
ce travail est dans le domaine public [CC0](https://creativecommons.org/publicdomain/zero/1.0/deed.fr) ^^

**Q:** Dois-je donner des informations sur les auteurs ?  
**A:** Vous n'êtes pas obligé de le faire, mais c'est très apprécié ! <3

**Q :** Puis-je utiliser le script à des fins commerciales ?  
**A :** Bien sûr. Mais ce serait cool si tu ne vendais pas le script même si tu peux le faire.

**Q :** je peux dire que c'est moi qui ai fait le script ?  
**A :** oui. mais ce n'est pas très gentil.

## Comment l'utiliser

Pour utiliser le script, vous devez placer la balise script avant le code qui l'utilisera.  
note : il est fortement recommandé de mettre le code dans une fonction setTimeout (environ 1000ms) ! ! !

## documentation

| Fonction          | Description                          | exemple                                       |
| ----------------- | ------------------------------------ | --------------------------------------------- |
| `DRDT.detected()` | détecter si le dark reader est actif | `DRDT.detected() ? "détecté" : "non détecté"` |

### exemple
```js
function detected() {
    if (DRDT.detected()) {
        // détecté
        console.log("détecté");
    } else {
        // no detected
        console.log("non détecté");
    }
}
setInterval(detected, 1000);
```

## avertissement
le script peut faire des faux positifs si vous mettez des filtres sur la balise html ou si dans votre css vous avez des règles `color` et `background-color` qui ciblent tous les `div`.