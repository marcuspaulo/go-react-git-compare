# GoReact - Módulo 2

#Instalação recomenda para gerenciamento de pacotes: Yarn https://yarnpkg.com/pt-BR/docs/install#windows-stable

Instalar através do Chocolatey
O Chocolatey é um gerenciador de pacotes para Windows. Você pode instalar o Chocolatey seguindo este guia.

Assim que você tiver instalado o Chocolatey, você pode instalar o Yarn executando o seguinte código no console:

```sh
$ choco install yarn
```

#Instalando o Yarn no macOS

Homebrew
Você pode instalar Yarn através do gerenciador de pacotes Homebrew.

```sh
$ brew install yarn
```

Você pode usar soluções como nvm ou similares, você deve evitar installar o Node.js diretamente, para a versão do Node.js instalada pelo nvm ser usada.

```sh
$ brew install yarn --without-node
```

---

#Criando um projeto em ReactJS (através do CLI)

#Instalando o create-react-app

```sh
$ yarn global add create-react-app
```

#Criando o projeto com o create-react-app

```sh
$ create-react-app goreact-modulo2
```

#iniciando a aplicação

```sh
$ yarn start
```

---

#Configurações iniciais

# 1 - Remover os seguintes arquivos:

1 - App.css, index.css
2 - App.test.js
3 - logo.svg
4 - registerServiceWorkers

# Ajustar os imports dos arquivos index.js e App.js

---

# Ajustando o eslint Airbnb (Desenvolvimento)

```sh
$ yarn add eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react -D
```

```json
{
    "parser": "babel-eslint",
    "extends": "airbnb",
    "env": {
        "browser": true,
        "jest": true
    },
    "plugins": ["react", "jsx-a11y", "import"],
    "rules": {
        "react/jsx-filename-extension": [
            "error",
            {
                "extensions": [".js", ".jsx"]
            }
        ],
        "global-require": "off",
        "import/prefer-default-export": "off",
        "no-unused-vars": [
            "error",
            {
                "argsIgnorePattern": "^_"
            }
        ]
    }
}
```

---

# Criar o arquivo .editorconfig

```js
root = true

[*]
indent_style = space
indent_size = 4
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

---

# Instalando as dependências de estilo (Styled-components) - Ferramenta mais adotada pela comunidade

#Instalando o styled-components

```sh
$ yarn add styled-components
```

# Instale a extensão do vscode-styled-components no Visual Code

#Exemplo styled components

```js
import React from "react";
import styled from "styled-components";

const Title = styled.h1`
    color: #f00;
    font-size: 32px;
`;

const App = () => (
    <div className="App">
        <Title>Git Compare</Title>
    </div>
);

export default App;
```

---

# Estilizando com o estilo Global (styles/global.js)

```js
import React, { Fragment } from "react";

import GlobalStyle from "./styles/global";

const App = () => (
    <Fragment>
        <GlobalStyle />
        <div className="App" />
    </Fragment>
);

export default App;
```

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
