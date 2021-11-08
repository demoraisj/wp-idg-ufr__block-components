# wp-idg-ufr__block-components

> Componentes utilizados nos blocos do tema WP da Universidade Federal de Rondonópolis <br />
> !Importante -> Depende de github.com/juniorjmm/wp-idg-ufr__block_dependencies, que deve estar instalado como um plugin no WP

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Instalação

```bash
npm install https://github.com/juniorjmm/wp-idg-ufr__block-components.git#<version>
```

## Uso

### Importe e use
```jsx
import React, { Component } from 'react'

import { UFRComponente } from 'wp-idg-ufr__block-components'

class Example extends Component {
  render() {
    return <UFRComponente prop1={var1} />
  }
}
```

### Componente ```<UFRBlockHeader /> ```
Atributos:
  - title: string // Para exibição no título
  - subtitle: string // Para exibição no subtítulo

### Componente ```<UFRGaleryBtn /> ```
Atributos:
- selection: number[] // Necessário para lembrar a seleção de mídia. Deve ser passado o valor de um atributo de mesmo nome 'selection', listado em block.json na seção 'attributes'.
- text: string // Texto para exibição no título do botão, opcional
- icon: string // Classe de icone font-awesome para o botão, opcional
- allowedTypes: string[] // Tipos permitidos para upload, opcional
- multiple: boolean // Se o upload deve ser multiplo
- setter: function // Função 'setAttributes' provida nos parâmetros do método 'edit' no ambiente @wodpress/create-block
- attrs: Record<string, string> // Objeto onde as chaves (keys) indicam o attr para ser alterado com o setter, listado em block.json na seção 'attributes', e os valores indicam qual a informação desejada da mídia escolhida

##### Sobre os atributos e seleção
Exemplo de uso:
```jsx
<UFRGaleryBtn multiple selection={selection} setter={setAttributes} attrs={{ linkDaImagem: 'url', tituloDaImagem: 'title' }} />
```
O componente irá procurar pelos atributos 'url' e 'title' da midia selecionada e salvar, usando o setter,
nos atributos 'linkDaImagem' e 'tituloDaImagem', estes devem estar listados em block.json na seção 'attributes'.

O attributo 'selection' deve constar em block.json e ser do tipo array.
Se não houver valor no atributo 'attrs', o componente tentará salvar no atributo 'img' o valor do link selecionado.

Se 'multiple' for true, os atributos em block.json para salvar os valores devem ser do tipo array.

Lista de atributos de mídia disponíveis para obtenção:

|---|
|---|
|alt|
|author|
|authorLink|
|authorName|
|caption|
|date|
|dateFormatted|
|description|
|editLink|
|filename|
|filesizeHumanReadable|
|filesizeInBytes|
|height|
|icon|
|id|
|link|
|meta|
|mime|
|modified|
|name|
|orientation|
|sizes|
|status|
|subtype|
|title|
|type|
|uploadedTo|
|uploadedToLink|
|uploadedToTitle|
|url|
|width|

### Componente ```<UFRIconPicker /> ```
Atributos:
- attr : string // Atributo para ser alterado com o setter, listado em block.json na seção 'attributes'. Se não informado, tenta usar como default um atributo de nome "icon"
- setter: function // Função 'setAttributes' provida nos parâmetros do método 'edit' no ambiente @wodpress/create-block

### Componente ```<UFRInput /> ```
Atributos:
- label: string // atributo label nativo do input
- type: string // atributo type nativo do input, defaults to 'text'
- value: string // atributo value nativo do input
- className: string // attributo className nativo do React
- setter: function // Função 'setAttributes' provida nos parâmetros do método 'edit' no ambiente @wodpress/create-block
- attr: string // Atributo para ser alterado com o setter, listado em block.json na seção 'attributes'

### Componente ```<UFRTextarea /> ```
Atributos:
- label: string // atributo label nativo do textarea
- value: string // conteúdo innerText do textarea
- className: string // attributo className nativo do React
- setter: function // Função 'setAttributes' provida nos parâmetros do método 'edit' no ambiente @wodpress/create-block
- attr: string // Atributo para ser alterado com o setter, listado em block.json na seção 'attributes'

### Componente ```<UFRSelect /> ```
Atributos:
- options: { label: string, value: string | boolean | number }[] // Array de opções para o select
- value: string | boolean | number // atributo value nativo do input
- setter: function // Função 'setAttributes' provida nos parâmetros do método 'edit' no ambiente @wodpress/create-block
- attr: string // Atributo para ser alterado com o setter, listado em block.json na seção 'attributes'

### Componente ```<UFRCheckbox /> ```
Atributos:
- label: string // Atributo label nativo do input
- checked: boolean // Se o checkbox deve estar por padrão marcado. Deve acompanhar o default do atributo em block.json
- valWhenChecked: any // Valor para ser atribuído ao atributo alvo quando o checkbox for marcado
- valWhenUnchecked: any // Valor para ser atribuído ao atributo alvo quando o checkbox for desmarcado
- setter: function // Função 'setAttributes' provida nos parâmetros do método 'edit' no ambiente @wodpress/create-block
- attr: string // Atributo para ser alterado com o setter, listado em block.json na seção 'attributes'

### Componente ```<UFRListBuilder /> ```
Atributos:
- items: string // JSON encoded type { text: string, link: string, isChild: false, children: { text: string, link: string, isChild: true }[] }[]
- setter: function // Função 'setAttributes' provida nos parâmetros do método 'edit' no ambiente @wodpress/create-block
- attr: string // Atributo para ser alterado com o setter, listado em block.json na seção 'attributes'
