This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

Just `git clone` & `npm install`:

## Then use it with the following commands

Run the dev server:

     npm run start

It will open automatically localhost:3000.


Build project (in dist directory by default):


    npm run build


### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


  ## Getting started

  This project is using React 16+, Material UI and React bootsrap.

## Structure

```

├── src                      # Application source code
│   ├── components           # Generic React Components (generally Dumb components)
│   ├── reducers             # Redux reducers
│   ├── store                # Redux store configuration
│   ├── actions              # Actions dispatchers
│   ├── services             # Services for API calls
│   ├── utils                # Generic utilities
│   └── index.js             # Application bootstrap and rendering
|
└── __tests__                # Tests folder

```

# Eslint Config for Vs Code 

   * Install Eslint Extension (Dirk Baeumer)
   * Install AutoFix Toggle Extentsion (Lwlz)
   * add the following Json in your Settings.json (vs code file)
   ```
   {
  "window.zoomLevel": 0,
  "git.autofetch": true,
  "diffEditor.ignoreTrimWhitespace": false,
  "git.enableSmartCommit": true,
  "workbench.iconTheme": "material-icon-theme",
  "emmet.showSuggestionsAsSnippets": true,
  "editor.suggestSelection": "first",
  "editor.formatOnPaste": true,
  "editor.formatOnType": false,
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "[javascriptreact]": {
    "editor.formatOnSave": false,
  },
  "[typescript]": {
    "editor.formatOnSave": false
  },
  "[typescriptreact]": {
    "editor.formatOnSave": false,
  },
  "eslint.alwaysShowStatus": true,
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "typescript",
      "autoFix": true
    },
    {
      "language": "typescriptreact",
      "autoFix": true
    }
  ]
   }
   
   ```
   * After this you'll see in the statusbar of VsCode  EsLint | AutoFix 
   * Happy Coding 
