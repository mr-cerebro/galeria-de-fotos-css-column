# Galeria de Fotos Dinâmica (Estilo Pinterest)

Este projeto consiste em uma galeria de imagens responsiva que utiliza JavaScript para renderizar conteúdos de forma dinâmica e aleatória. O layout é inspirado no design do Pinterest, utilizando colunas que se adaptam ao tamanho das imagens.

## 🚀 Funcionalidades

* **Renderização Dinâmica:** As imagens não estão fixas no HTML; são injetadas via JavaScript a partir de um array de dados.
* **Algoritmo de Randomização:** Utiliza o método *Fisher-Yates* para embaralhar as fotos toda vez que a página é carregada ou a função é disparada.
* **Layout Pinterest:** Organização visual em colunas (Masonry layout) via CSS.
* **Escalabilidade:** Fácil de adicionar novas fotos apenas atualizando a lista de URLs no script.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica do container da galeria.
* **CSS3:** Estilização de colunas utilizando `column-count` e `column-gap`.
* **JavaScript (ES6+):** Manipulação de arrays, lógica de sorteio e criação dinâmica de elementos no DOM.

## 📁 Estrutura de Arquivos

```text
├── index.html    # Estrutura principal e container da galeria
├── main.css      # Estilização e comportamento das colunas
└── script.js     # Lógica de embaralhamento e inserção das imagens
```

## ⚙️ Como Funciona o Código

JavaScript: A lógica Random
Para garantir que a galeria nunca exiba a mesma ordem, o script utiliza uma função de embaralhamento:

```js
function shuffle(list) {
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}
```

## CSS: O efeito de colunas

O visual estilo "mural" é alcançado através da propriedade `column-count`, que divide o container em colunas verticais sem a necessidade de frameworks externos.

## 📖 Como Usar

Clone este repositório.

Abra o arquivo `index.html` em qualquer navegador.

Para alterar as imagens, basta editar o array `linksImages` dentro do arquivo `script.js`.