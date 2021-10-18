# wp-idg-ufr__block-components

> Componentes utilizados nos blocos do tema WP da Universidade Federal de Rondonópolis <br />
> Depende de github.com/juniorjmm/wp-idg-ufr__block_dependencies

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Instalação

```bash
npm install https://github.com/juniorjmm/wp-idg-ufr__block-components.git
```

## Uso

```jsx
import React, { Component } from 'react'

import { UFRComponente } from 'wp-idg-ufr__block-components'
import 'wp-idg-ufr__block-components/dist/index.css'

class Example extends Component {
  render() {
    return <UFRComponente />
  }
}
```

## Desenvolvimento

```bash
# Instala dependências e compila ao observar mudanças
npm i && npm run start

# Instala dependencias e inicia servidor para visualizar componentes
cd ./example && npm i && npm start
```
