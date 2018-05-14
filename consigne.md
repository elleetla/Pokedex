# Pokedex

### Installation
Place toi à la racine du dossier en ligne de commande et execute la commande suivante
``` ligne de commande
npm install
```

Ensuite execute la ligne suivante afin de générer un serveur
``` ligne de commande
npm run start-dev
```

Ouvre une nouvelle fenetre de ton terminal et execute la ligne suivante pour que webpack compile le fichier "app.js" pour le transformer en "bundle.js" dans le dossier "public/js"
``` ligne de commande
npm run build-dev
```

### Tu peux commencer :)

Le but de ce test est de créer un mini pokedex en récupérant la data provenant d'un fichier Json
et en l'affichant sur la page "index.html" présent à la racine du dossier.

Tu as un dossier "src" à la racine. Ce dossier contient d'autres dossier nommé de la façon suivante : 

- <strong>css</strong> : contient un fichier "app.css"
- <strong>js</strong> : contient un fichier "app.js"
- <strong>img</strong> : contient l'img du logo pokemon

La structure <strong>html</strong> et <strong>css</strong> sont déjà faite, tu n'as pas à t'en occuper. Pour effectuer l'exercice il te suffit
de te focaliser sur le dossier "js". C'est dans le fichier "app.js" que tu écrira ton code.

Pour récupérer la data das pokemons, il faut que fasse appel à ce fichier : 
https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json

Tu peux coder ce pokedex en ES15 ou en jQuery.
Si tu souhaites utiliser jQuery, il te suffira d'insérer la ligne suivante dans le fichier "app.js" 

``` javascript
let $ = require("jquery");
```

Une fois ton script terminé, tu peux executer la commande suivante
``` javascript
npm run build-prod
```