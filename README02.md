## Atomic Design概要

### Atomic Designとは

+ `Brad Frost氏が考案したデザインシステム`<br>
+ `画面要素を5段階に分け、組み合わせることでUIを実現`<br>
+ `コンポーネント化された要素が画面を構成しているという考え方`<br>
+ `React、Vue用といわけではない`<br>
+ `モダンJavaScriptと相性が良い`<br>

<h5>5段階のコンポーネント</h5>

```
ATOMS(原子的な) -> MOLECULES(ATOMSを組み合わせた少し大きめのコンポーネント) -> ORGANISMS(ATOMSとMOLECULESを組み合わせたコンポーネント) -> TEMPLATES(ページの枠を構成するテンプレート) -> PAGES(最終的に表示しているページ)
```

<h5>ATOMS -原子-</h5>

+ 最も小さくそれ以上分解できない要素<br>

+ `Twitterの例`<br>
  + ボタン<br>
  + ツイート入力テキストボックス<br>
  + アイコン 等<br>

<h5>MOLECULES -分子-</h5>

+ Atomの組み合わせで意味を持つデザインパーツ<br>

+ `Twitterの例`<br>
  + アイコン + メニュー名<br>
  + プロフィール画像 + テキストボックス<br>
  + アイコンセット 等<br>

<h5>ARGANISMS -有機体-</h5>

+ AtomやMoleculeの組み合わせで構成される単体である程度の意味を持つ要素群<br>

+ `Twitterの例`<br>
  + ツイート入力エリア<br>
  + サイドメニュー<br>
  + １つのツイートエリア 等<br>

<h5>TEMPLATES -テンプレート</h5>

+ ページのレイアウトのみを表現する要素(実際のデータはもたない)<br>

+ `Twitterの例`<br>
  + サイドメニュー、ツイートエリア、トピックエリア等のレイアウト情報 等<br>

<h5>PAGES -ページ-</h5>

+ 最終的に表示される1画面<br>

+ `Twitterの例`<br>
  + 頁遷移毎に表示される各画面<br>

## Atomの作成

+ `$ yarn add react-router-dom@5.3.0 or $ npm install react-router-dom@5.3.0`のインストール<br>

+ `$ npm install --save styled-components or $ yarn add styled-components`のインストール<br>

+ `src/components`ディレクトリを作成<br>

+ `src/comonents/atoms`ディレクトリを作成<br>

+ `src/compoents/atoms/button`ディレクトリを作成<br>

+ `src/compoents/atoms/button/PrimaryButton.jsx`コンポーネントを作成<br>

```
import styled from "styled-components";

export const PrimaryButton = (props) => {
    const { children } = props;
    return(
        <SButton>{children}</SButton>
    )
}

const SButton = styled.button`
    background-color: #40514e;
    color: #fff;
    padding: 6px 24px;
    border: none;
    margin-top: 1rem;
    border-radius: 9999px;
    outline: none;
    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;
```

+ `App.js`の編集<br>

```
import './App.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';

function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <PrimaryButton>検索</PrimaryButton>
    </div>
  );
}

export default App;
```

+ `src/compoents/atoms/button/SecondaryButton.jsx`コンポーネントを作成<br>

```
import styled from "styled-components";

export const SecondaryButton = (props) => {
    const { children } = props;
    return (
        <SButton>{children}</SButton>
    )
}

const SButton = styled.button`
    background-color: #11999e;
    color: #fff;
    padding: 6px 24px;
    border: none;
    border-radius: 9999px;
    outline: none;
    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;
```

+ `App.js`の編集<br>

```
import './App.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton'; // 追記

function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton> // 編集
    </div>
  );
}

export default App;
```

+ `src/compoents/atoms/button/BaseButton.jsx`コンポーネントを作成<br>

```
import styled from "styled-components";

export const BaseButton = styled.button`
    color: #fff;
    padding: 6px 24px;
    border: none;
    border-radius: 9999px;
    outline: none;
    margin-top: 1rem;
    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;
```

+ `src/compoents/atoms/button/PrimaryButton.jsx`の編集<br>

```
import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
    const { children } = props;
    return(
        <SButton>{children}</SButton>
    )
}

const SButton = styled(BaseButton)`
    background-color: #40514e;
`;
```

+ `src/compoents/atoms/button/SecondaryButton.jsx`の編集<br>

```
import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = (props) => {
    const { children } = props;
    return (
        <SButton>{children}</SButton>
    )
}

const SButton = styled(BaseButton)`
    background-color: #11999e;
`;
```