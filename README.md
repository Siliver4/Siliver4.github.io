# Siliver4.github.io
site web vitrine famille
-> pour consulter le site, aller sur l'url suivante 'https://siliver4.github.io/family-showcase/book-homepage'

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
Pour que le formattage se lance automatiquement à la sauvegarde, ajouter ceci dans la configuration intellij `(CTRL + SHIFT + P)` rechercher le nom suivant `Preferences: Open User Settings (JSON)`, pour finalement ouvrir un fichier `settings.json`. Il suffit alors de sauvegarder un fichier avec une ligne mal indenté ou équivelent pour voir la magie de prettier opérer toute seule.

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
    "workbench.colorTheme": "Visual Studio Dark"
}
```

---
# other stuff leftovers :

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup
[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration
See [Vite Configuration Reference](https://vitejs.dev/config/).