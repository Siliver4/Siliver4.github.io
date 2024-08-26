# Siliver4.github.io
site web vitrine famille
-> pour consulter le site, aller sur l'url suivante 'https://siliver4.github.io/family-showcase/book-homepage'

## libraries doc
| [Style library : 'Bootstrap5'](https://getbootstrap.com/docs/5.0)  | [PDF JS library : 'pdfjs-dist'](https://github.com/mozilla/pdf.js) | [Cache library : 'Pinia'](https://pinia.vuejs.org/core-concepts/) | [Utility String/Array library : 'Lodash'](https://lodash.com/docs/) | [Date library : 'Momentjs'](https://momentjs.com/docs/) |
| ------------- | ------------- | ------------- | ------------- | ------------- |

## Project Setup
```sh
npm install
```

### Compile and Hot-Reload for Development
access here http://localhost:3000/

```sh
npm run dev
```

### Compile and Minify for Production
```sh
npm run build
```

### Deploy the dist folder on the gh-pages branch on github
NB : it takes around 50seconds before it's finally up on the url :
access here https://siliver4.github.io/

```sh
npm run deploy
```

### Build & Deploy in a single command
```sh
npm run bd
```

### Lint with [ESLint](https://eslint.org/), to check errors
```sh
npm run lint
```

# ALEX prettier :
### En Mode Manuel :
Commande à lancer pour prettier tous les fichiers du projet sauf ceux spécifier dans le fichier .prettierignore

```sh
npx prettier . --write
```

### En Mode Auto Save :
Pour que le formattage se lance automatiquement à la sauvegarde, ajouter ceci dans la configuration VSC (Visual Studio Code) `(CTRL + SHIFT + P)` rechercher le nom suivant `Preferences: Open User Settings (JSON)`, pour finalement ouvrir un fichier `settings.json`. Il suffit alors de sauvegarder un fichier avec une ligne mal indenté ou équivelent pour voir la magie de prettier opérer toute seule.

```js
{
    // config par défaut, empêche tout reformartage pour tous les languages (sauf ceux listé plus bas).
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": false,
    // config spécifique par language.
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.formatOnSave": true
    },
    "[vue]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.formatOnSave": true
    },
    "[html]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.formatOnSave": true
    },
    "workbench.colorTheme": "Visual Studio Dark",
    "window.openFoldersInNewWindow": "on",
    "sonarlint.rules": {
        "Web:S6851": {
            "level": "on"
        }
    }
}
```

---
# other stuff leftovers :

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup
[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration
See [Vite Configuration Reference](https://vitejs.dev/config/).


---
# petite todo liste d'idée potentielle à garder au chaud sous un coude :
- un fichier qui liste d'un millier d'annecdotes en lien avec les livres ou présentes dans les livres.
  - fichier json.
  - système d'affichage basé sur le fait de prendre par exemple 5 annecdotes de la liste de manière aléatoire, différente à chaque F5.
  - éventuellement placer dans le json des liens vers les id des livres concernés, afin de pouvoir ouvrir une page listant ces derniers.
  - recherche d'annecdotes via un champ / page prévu pour.
  - notion d'annecdote qui pourrait aider au référencement du site.
- gestion des styles à revoir sur Safari/Mac pour de grands écrans
- Refacto/Nettoyage/Rangement du code overall (le css notamment)
- Voir pour une utilisation plus avancée de la lib de lecteur pdf 'pdfjs-dist' (même si incompatible avec Safari/Mac sadly)
- Voir pour la notion de référencement via balise/tag html, le jour où l'on aura enfin de vraie données/livres éditées et non plus de simple mock de moutons :)
- Faire un logo ou bien garder notre old bluebird ?
- implémenter la mécaniques de thumbnails à afficher, et des images en qualité maximale via de grandes popin/modal.
