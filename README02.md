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

## Atomの作成 (ボタンのみ)

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

## Moleculeの作成 (検索ボタンとテキストボックス)

+ `src/components/molecules/`ディレクトリを作成<br>

+ `src/components/molecules/SearchInput.jsx`コンポーネントを作成<br>

```
import { PrimaryButton } from "../atoms/button/PrimaryButton"

export const SearchInput = () => {
    return (
        <div>
            <input />
            <PrimaryButton>検索</PrimaryButton>
        </div>
    )
}
```

+ `App.js`の編集<br>

```
import './App.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput'; // 追記

function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput /> // 追記
    </div>
  );
}

export default App;
```

+ `src/components/atoms/input/Input.jsx`コンポーネントを作成<br>

```
import styled from "styled-components"

export const Input = (props) => {
    const { placeholder = "" } = props;
    return (
        <SInput type="text" placeholder={placeholder} />
    )
}

const SInput = styled.input`
    padding: 8px 16px;
    border: solid #ddd 1px;
    border-radius: 9999px;
    outline: none;
`;
```

+ `src/components/molecules/SearchInput.jsx`を編集<br>

```
import styled from "styled-components"
import { PrimaryButton } from "../atoms/button/PrimaryButton"
import { Input } from "../atoms/input/Input"

export const SearchInput = () => {
    return (
        <SContainer>
            <Input placeholder="検索条件を入力" />
            <SButtonWrapper>
                <PrimaryButton>検索</PrimaryButton>
            </SButtonWrapper>
        </SContainer>
    )
}

const SContainer = styled.div`
    display: flex;
    align-items: center;
`;

const SButtonWrapper = styled.div`
    padding-left: 8px;
`;
```

## Organismの作成1 (ユーザーカード)

+ `src/components/organism`ディレクトリを作成<br>

+ `src/components/organism/user`ディレクトリを作成<br>

+ `src/components/organism/user/UserCard.jsx`コンポーネントを作成<br>

```
export const UserCard = () => {
    return (
        <div>
            <img alt="プロフィール" />
            <p>名前</p>
            <dl>
                <dt>メール</dt>
                <dd>11111@aaa.com</dd>
                <dt>TEL</dt>
                <dd>000-9999-88888</dd>
                <dt>会社名</dt>
                <dd>ああああああ会社</dd>
                <dt>WEB</dt>
                <dd>httttttttt.com</dd>
            </dl>
        </div>
    )
}
```

+ `App.js`の編集<br>

```
import './App.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organism/user/UserCard';

function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard />
    </div>
  );
}

export default App;
```

## Organismの作成2

+ `App.css`を空白にしてリセットする<br>

+ `index.css`も空白にする<br>

+ `https://unsplash.com/`で画像を入手<br>

+ `https://unsplash.com/photos/JBrbzg5N7Go`を`https://source.unsplash.com/JBrbzg5N7Go`に書き換える<br>

+ `src/components/atoms/card`ディレクトリを作成<br>

+ `src/components/atoms/card/Card.jsx`コンポーネントを作成<br>

```
import styled from "styled-components";

export const Card = (props) => {
    const { children } = props;
    return <SCard>{children}</SCard>
}

const SCard = styled.div`
    background-color: #fff;
    box-shadow: #ddd 0px 0px 4px 2px;
    border-radius: 8px;
    padding: 16px;
`;
```

+ `src/organinsm/user/UserCard.jsx`の編集<br>

```
import styled from "styled-components"
import { Card } from "../../atoms/card/Card";

export const UserCard = (props) => {
    const { user } = props;
    return (
        <Card>
            <img
                height={160}
                width={160}
                src={user.image}
                alt={user.name}
            />
            <p>{user.name}</p>
            <SDl>
                <dt>メール</dt>
                <dd>{user.email}</dd>
                <dt>TEL</dt>
                <dd>{user.phone}</dd>
                <dt>会社名</dt>
                <dd>{user.company.name}</dd>
                <dt>WEB</dt>
                <dd>{user.website}</dd>
            </SDl>
        </Card>
    )
}

const SDl = styled.dl`
    text-align: left;
    dt {
        float: left;
    }
    dd {
        padding-left: 32px;
        padding-bottom: 8px;
    }
`;
```

+ `App.css`を編集<br>

```
body {
  background-color: #e4f9f5;
}
```

+ `src/components/molecules/user`ディレクトリを作成<br>

+ `src/components/molecules/user/UserIconWithName.jsx`コンポーネントを作成<br>

```
export const UserIconWithName = (props) => {
    const { image, name } = props;
    return (
        <div>
            <img height={160} width={160} src={image} alt={name} />
            <p>{name}</p>
        </div>
    )
}
```

+ `src/organinsm/user/UserCard.jsx`の編集<br>

```
import styled from "styled-components"
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

export const UserCard = (props) => {
    const { user } = props;
    return (
        <Card>
            <UserIconWithName image={user.image} name={user.name} />
            <SDl>
                <dt>メール</dt>
                <dd>{user.email}</dd>
                <dt>TEL</dt>
                <dd>{user.phone}</dd>
                <dt>会社名</dt>
                <dd>{user.company.name}</dd>
                <dt>WEB</dt>
                <dd>{user.website}</dd>
            </SDl>
        </Card>
    )
}

const SDl = styled.dl`
    text-align: left;
    dt {
        float: left;
    }
    dd {
        padding-left: 32px;
        padding-bottom: 8px;
    }
`;
```

+ `src/components/molecules/user/UserIconWithName.jsx`にスタイルを当てる<br>

```
import styled from "styled-components";

export const UserIconWithName = (props) => {
    const { image, name } = props;
    return (
        <SContainer>
            <SImg height={160} width={160} src={image} alt={name} />
            <SName>{name}</SName>
        </SContainer>
    )
}

const SContainer = styled.div`
    text-align: center;
`;
const SImg = styled.img`
    border-radius: 50%;
`;
const SName = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    color: #40514e;
`;
```

+ `src/organinsm/user/UserCard.jsx`の編集<br>

```
import styled from "styled-components"
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

export const UserCard = (props) => {
    const { user } = props;
    return (
        <Card>
            <UserIconWithName image={user.image} name={user.name} />
            <SDl>
                <dt>メール</dt>
                <dd>{user.email}</dd>
                <dt>TEL</dt>
                <dd>{user.phone}</dd>
                <dt>会社名</dt>
                <dd>{user.company.name}</dd>
                <dt>WEB</dt>
                <dd>{user.website}</dd>
            </SDl>
        </Card>
    )
}

const SDl = styled.dl`
    text-align: left;
    dt {
        float: left;
    }
    dd {
        padding-left: 32px;
        padding-bottom: 8px;
        overflow-wrap: break-word; // 追記
    }
`;
```

## Templateの作成 (headerとfooter)

+ `src/components/templates`ディレクトリを作成<br>

+ `src/components/templates/HeaderOnly.jsx`コンポーネントを作成<br>

```
export const HeaderOnly = (props) => {
    const { children } = props;
    return (
        <>
            <div style={{ height: "50px", backgroundColor: "red"}}></div>
            {children}
        </>
    )
}
```

+ `src/components/templates/DefaultLayout.jsx`コンポーネントを作成<br>

+ `App.js`を編集<br>

```
import './App.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organism/user/UserCard';
import { HeaderOnly } from './components/templates/HeaderOnly'; // 追記

const user = {
  name: "たかき",
  image: "https://source.unsplash.com/JBrbzg5N7Go",
  email: "takaki55730317@gmail.com",
  phone: "090-1111-2222",
  company: {
    name: "テスト株式会社",
  },
  website: "https://google.com"
}

function App() {
  return (
    <HeaderOnly> // 編集
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </HeaderOnly> // 編集
  );
}

export default App;
```

+ `src/components/atoms/layout`ディレクトリを作成<br>

+ `src/components/atoms/layout/Header.jsx`コンポーネントを作成<br>

```
import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header>
            <Link to="/">HOME</Link>
            <Link to="/users">USERS</Link>
        </header>
    )
}
```

+ `App.css`の編集<br>

```
body {
  background-color: #e4f9f5;
  margin: 0; // 追記
}
```

+ `src/components/templates/HeaderOnly.jsx`を編集<br>

```
import { Header } from "../atoms/layout/Header";

export const HeaderOnly = (props) => {
    const { children } = props;
    return (
        <>
            <Header />
            {children}
        </>
    )
}
```

+ `App.js`を編集<br>

```
import { BrowserRouter } from 'react-router-dom'; // 追記
import './App.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organism/user/UserCard';
import { HeaderOnly } from './components/templates/HeaderOnly';

const user = {
  name: "たかき",
  image: "https://source.unsplash.com/JBrbzg5N7Go",
  email: "takaki55730317@gmail.com",
  phone: "090-1111-2222",
  company: {
    name: "テスト株式会社",
  },
  website: "https://google.com"
}

function App() {
  return (
    <BrowserRouter> // 追記
      <HeaderOnly>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </HeaderOnly>
    </BrowserRouter> // 追記
  );
}

export default App;
```

+ `src/components/atoms/layout/Header.jsx`を編集<br>

```
import { Link } from "react-router-dom"
import styled from "styled-components"

export const Header = () => {
    return (
        <SHeader>
            <SLink to="/">HOME</SLink>
            <SLink to="/users">USERS</SLink>
        </SHeader>
    )
}

const SHeader = styled.header`
    background-color: #11999e;
    color: #fff;
    text-align: center;
    padding: 8px 0;
`;
const SLink = styled(Link)`
    margin: 0 8px;
`
```

+ `src/components/atoms/layout/Footer.jsx`コンポーネントを作成<br>

```
import { Link } from "react-router-dom"
import styled from "styled-components"

export const Footer = () => {
    return (
        <SHeader>
            <SLink to="/">HOME</SLink>
            <SLink to="/users">USERS</SLink>
        </SHeader>
    )
}

const SHeader = styled.header`
    background-color: #11999e;
    color: #fff;
    text-align: center;
    padding: 8px 0;
`;
const SLink = styled(Link)`
    margin: 0 8px;
`
```

+ `src/components/templates/DefaultLayout.jsx`を編集<br>

```
import { Footer } from "../atoms/layout/Footer";
import { Header } from "../atoms/layout/Header";

export const DefaultLayout = (props) => {
    const { children } = props;
    return (
        <>
            <Header />
                {children}
            <Footer />
        </>
    )
}
```

+ `App.js`をテスト編集<br>

```
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organism/user/UserCard';
import { DefaultLayout } from './components/templates/DefaultLayout'; // 追記
import { HeaderOnly } from './components/templates/HeaderOnly';

const user = {
  name: "たかき",
  image: "https://source.unsplash.com/JBrbzg5N7Go",
  email: "takaki55730317@gmail.com",
  phone: "090-1111-2222",
  company: {
    name: "テスト株式会社",
  },
  website: "https://google.com"
}

function App() {
  return (
    <BrowserRouter>
      <DefaultLayout> // 編集
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter> // 編集
  );
}

export default App;
```

+ `App.css`を編集<br>

```
body {
  background-color: #e4f9f5;
  margin: 0;
  min-height: 100vh; // 追記
}
```

+ `src/components/atoms/layout/Footer.js`を編集<br>

```
import styled from "styled-components"

export const Footer = () => {
    return (
        <SFooter>
            &copy; 2021 test Inc.
        </SFooter>
    )
}

const SFooter = styled.footer`
    background-color: #11999e;
    color: #fff;
    text-align: center;
    padding: 8px 0;
    position: fixed;
    bottom: 0;
    width: 100%;
`;
```

## Pageの作成

+ `src/components/pages`ディレクトリを作成<br>

+ `src/components/pages/Top.jsx`コンポーネントを作成<br>

```
import styled from "styled-components"

export const Top = () => {
    return (
        <SContainer>
            <h2>TOPページです</h2>
        </SContainer>
    )
}

const SContainer = styled.div`
    text-align: center;
`
```

+ `src/components/pages/Users.jsx`コンポーネントを作成<br>

```
import styled from "styled-components"

export const Users = () => {
    return (
        <SContainer>
            <h2>ユーザー一覧</h2>
        </SContainer>
    )
}

const SContainer = styled.div`
    text-align: center;
`
```

+ `src/router`ディレクトリを作成<br>

+ `src/router/Router.jsx`コンポーネントを作成<br>

```
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Top } from "../components/pages/Top"
import { Users } from "../components/pages/Users"

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Top />
                </Route>
                <Route path="/users">
                    <Users />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
```

`App.js`を編集<br>

```
import './App.css';
import { Router } from './router/Router';

const user = {
  name: "たかき",
  image: "https://source.unsplash.com/JBrbzg5N7Go",
  email: "takaki55730317@gmail.com",
  phone: "090-1111-2222",
  company: {
    name: "テスト株式会社",
  },
  website: "https://google.com"
}

function App() {
  return (
    <Router />
  );
}

export default App;
```

+ `src/route/Router.jsx`を編集<br>

```
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Top } from "../components/pages/Top"
import { Users } from "../components/pages/Users"
import { DefaultLayout } from "../components/templates/DefaultLayout"
import { HeaderOnly } from "../components/templates/HeaderOnly"

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <DefaultLayout>
                        <Top />
                    </DefaultLayout>
                </Route>
                <Route path="/users">
                    <HeaderOnly>
                        <Users />
                    </HeaderOnly>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
```

+ `src/components/pages/Users.jsx`を編集<br>

```
import styled from "styled-components"
import { SearchInput } from "../molecules/SearchInput"

export const Users = () => {
    return (
        <SContainer>
            <h2>ユーザー一覧</h2>
            <SearchInput />
        </SContainer>
    )
}

const SContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
`
```

`App.js`を編集<br>

```
import './App.css';
import { Router } from './router/Router';

function App() {
  return (
    <Router />
  );
}

export default App;
```

+ `src/components/pages/Users.jsx`を編集<br>

```
import styled from "styled-components"
import { SearchInput } from "../molecules/SearchInput"
import { UserCard } from "../organism/user/UserCard"

const users = [...Array(10).keys()].map((val) => {
    return {
        id: val,
        name: `たかき${val}`,
        image: "https://source.unsplash.com/JBrbzg5N7Go",
        email: "takaki55730317@gmail.com",
        phone: "090-1111-2222",
        company: {
            name: "テスト株式会社",
        },
        website: "https://google.com"
    }
})

export const Users = () => {
    return (
        <SContainer>
            <h2>ユーザー一覧</h2>
            <SearchInput />
            <SUserArea>
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </SUserArea>
        </SContainer>
    )
}

const SContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
`
const SUserArea = styled.div`
    padding-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
`
```

## Atomic Designに取り組む時のポイント

+ `あくまでベース`<br>
  Atomic Designはあくまで概念だと認識し、プロジェクトやチームに合わせてカスタマイズしていく<br>

+ `初めから分けない`<br>
  慣れないうちに無理にコンポーネントに分けようとするとしんどい。まずは書いて定期的にリファクタリング<br>

+ `要素の関心を意識`<br>
  「何に関心があるコンポーネントなのか」を意識しながら分割したりpropsを定義したりする<br>

## State管理のツライ例

+ `src/components/pages/Top.jsx`を編集<br>

```
import React from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import { SecondaryButton } from "../atoms/button/SecondaryButton"


export const Top = () => {
    const history = useHistory();

    const onClickAdmin = () => history.push({ pathname: "/users", state: { isAdmin: true } })
    const onClickGeneral = () => ({ pathname: "/users", state: { isAdmin: false } })

    return (
        <SContainer>
            <h2>TOPページです</h2>
            <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
            <br />
            <br />
            <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
        </SContainer>
    )
}

const SContainer = styled.div`
    text-align: center;
`
```

+ `src/components/atoms/SecondaryButton.jsx`を編集<br>

```
import styled from "styled-components";
import React from "react";
import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = (props) => {
    const { children, onClick } = props;
    return (
        <SButton onClick={onClick}>{children}</SButton>
    )
}

const SButton = styled(BaseButton)`
    background-color: #11999e;
`;
```

+ `src/components/pages/Users.jsx`を編集<br>

```
import React from "react"
import styled from "styled-components"
import { useLocation } from "react-router-dom"
import { SearchInput } from "../molecules/SearchInput"
import { UserCard } from "../organism/user/UserCard"

const users = [...Array(10).keys()].map((val) => {
    return {
        id: val,
        name: `たかき${val}`,
        image: "https://source.unsplash.com/JBrbzg5N7Go",
        email: "takaki55730317@gmail.com",
        phone: "090-1111-2222",
        company: {
            name: "テスト株式会社",
        },
        website: "https://google.com"
    }
})

export const Users = () => {
    const { state } = useLocation();
    // console.log(state);
    const isAdmin = state ? state.isAdmin : false;
    return (
        <SContainer>
            <h2>ユーザー一覧</h2>
            <SearchInput />
            <SUserArea>
                {users.map((user) => (
                    <UserCard key={user.id} user={user} isAdmin={isAdmin} />
                ))}
            </SUserArea>
        </SContainer>
    )
}

const SContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
`
const SUserArea = styled.div`
    padding-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
`
```

+ `src/components/organism/user/UserCard.jsx`を編集<br>

```
import React from "react";
import styled from "styled-components"
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

export const UserCard = (props) => {
    const { user, isAdmin } = props;
    return (
        <Card>
            <UserIconWithName image={user.image} name={user.name} isAdmin={isAdmin} /> // 編集
            <SDl>
                <dt>メール</dt>
                <dd>{user.email}</dd>
                <dt>TEL</dt>
                <dd>{user.phone}</dd>
                <dt>会社名</dt>
                <dd>{user.company.name}</dd>
                <dt>WEB</dt>
                <dd>{user.website}</dd>
            </SDl>
        </Card>
    )
}

const SDl = styled.dl`
    text-align: left;
    dt {
        float: left;
    }
    dd {
        padding-left: 32px;
        padding-bottom: 8px;
        overflow-wrap: break-word;
    }
`;
```

+ `src/components/molecules/user/UserIconWithName.jsx`を編集<br>

```
import React from "react";
import styled from "styled-components";

export const UserIconWithName = (props) => {
    const { image, name, isAdmin } = props;
    return (
        <SContainer>
            <SImg height={160} width={160} src={image} alt={name} />
            <SName>{name}</SName>
            {isAdmin && <SEdit>編集</SEdit>}
        </SContainer>
    )
}

const SContainer = styled.div`
    text-align: center;
`;
const SImg = styled.img`
    border-radius: 50%;
`;
const SName = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    color: #40514e;
`;
const SEdit = styled.span`
    text-decoration: underline;
    color: #aaa;
    cursor: pointer;
`
```

## ContextでのState管理(基本的な使い方)

+ `src/providers`ディレクトリを作成<br>

+ `src/providers/UserProvider.jsx`コンポーネントを作成<br>

```
import React, { createContext } from "react"

export const UserContext = createContext({});

export const UserProvider = (props) => {
    const { children } = props;
    const contextName = "たかき"

    return (
        <UserContext.Provider value={{ contextName }}>
            {children}
        </UserContext.Provider>
    )
}
```

+ `src/App.js`の編集<br>

```
import React from 'react';
import './App.css';
import { UserProvider } from './providers/UserProvider';
import { Router } from './router/Router';

function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}

export default App;
```

+ `src/components/molecules/user/UserIconWithName.jsx`を編集<br>

```
import React, { useContext } from "react"; // 編集
import styled from "styled-components";
import { UserContext } from "../../../providers/UserProvider"; // 追記

export const UserIconWithName = (props) => {
    const { image, name, isAdmin } = props;
    const context = useContext(UserContext); // 追記
    // console.log(context);

    return (
        <SContainer>
            <SImg height={160} width={160} src={image} alt={name} />
            <SName>{name}</SName>
            {isAdmin && <SEdit>編集</SEdit>}
        </SContainer>
    )
}

const SContainer = styled.div`
    text-align: center;
`;
const SImg = styled.img`
    border-radius: 50%;
`;
const SName = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    color: #40514e;
`;
const SEdit = styled.span`
    text-decoration: underline;
    color: #aaa;
    cursor: pointer;
`
```

## Contextでのstate管理(ユーザー情報の設定と参照)

+ `src/providers/UserProvider.jsx`を編集<br>

```
import React, { createContext, useState } from "react" // 編集

export const UserContext = createContext({});

export const UserProvider = (props) => {
    const { children } = props;
    const [userInfo, setUserInfo] = useState(null); // 追記

    return (
        <UserContext.Provider value={{ userInfo, setUserInfo }}> // 編集
            {children}
        </UserContext.Provider>
    )
}
```

+ `src/components/pages/Top.jsx`を編集<br>

```
import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import { UserContext } from "../../providers/UserProvider"
import { SecondaryButton } from "../atoms/button/SecondaryButton"


export const Top = () => {
    const history = useHistory();
    const { setUserInfo } = useContext(UserContext);

    const onClickAdmin = () => {
        setUserInfo({ isAdmin: true })
        history.push("/users")
    }
    const onClickGeneral = () => {
        setUserInfo({ isAdmin: false })
        history.push("/users")
    }

    return (
        <SContainer>
            <h2>TOPページです</h2>
            <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
            <br />
            <br />
            <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
        </SContainer>
    )
}

const SContainer = styled.div`
    text-align: center;
`
```

+ `src/components/molecules/user/UserIconWithName.jsx`を編集<br>

```
import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../../providers/UserProvider";

export const UserIconWithName = (props) => {
    const { image, name } = props;
    const { userInfo } = useContext(UserContext);
    const isAdmin = userInfo ? userInfo.isAdmin : false

    return (
        <SContainer>
            <SImg height={160} width={160} src={image} alt={name} />
            <SName>{name}</SName>
            {isAdmin && <SEdit>編集</SEdit>}
        </SContainer>
    )
}

const SContainer = styled.div`
    text-align: center;
`;
const SImg = styled.img`
    border-radius: 50%;
`;
const SName = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    color: #40514e;
`;
const SEdit = styled.span`
    text-decoration: underline;
    color: #aaa;
    cursor: pointer;
`
```

+ `src/components/organism/user/UserCard.jsx`を編集<br>

```
import React from "react";
import styled from "styled-components"
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

export const UserCard = (props) => {
    const { user } = props; // 編集
    return (
        <Card>
            <UserIconWithName image={user.image} name={user.name} />
            <SDl>
                <dt>メール</dt>
                <dd>{user.email}</dd>
                <dt>TEL</dt>
                <dd>{user.phone}</dd>
                <dt>会社名</dt>
                <dd>{user.company.name}</dd>
                <dt>WEB</dt>
                <dd>{user.website}</dd>
            </SDl>
        </Card>
    )
}

const SDl = styled.dl`
    text-align: left;
    dt {
        float: left;
    }
    dd {
        padding-left: 32px;
        padding-bottom: 8px;
        overflow-wrap: break-word;
    }
`;
```

+ `src/components/pages/Users.jsx`を編集<br>

```
import React from "react"
import styled from "styled-components"
import { SearchInput } from "../molecules/SearchInput"
import { UserCard } from "../organism/user/UserCard"

const users = [...Array(10).keys()].map((val) => {
    return {
        id: val,
        name: `たかき${val}`,
        image: "https://source.unsplash.com/JBrbzg5N7Go",
        email: "takaki55730317@gmail.com",
        phone: "090-1111-2222",
        company: {
            name: "テスト株式会社",
        },
        website: "https://google.com"
    }
})

export const Users = () => {
    return (
        <SContainer>
            <h2>ユーザー一覧</h2>
            <SearchInput />
            <SUserArea>
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </SUserArea>
        </SContainer>
    )
}

const SContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
`
const SUserArea = styled.div`
    padding-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
`
```

## Contextでのstate管理(再レンダリングの最適化)

+ `src/components/pages/Users.jsx`を編集<br>

```
import React, { useContext } from "react"
import styled from "styled-components"
import { UserContext } from "../../providers/UserProvider"
import { SecondaryButton } from "../atoms/button/SecondaryButton"
import { SearchInput } from "../molecules/SearchInput"
import { UserCard } from "../organism/user/UserCard"

const users = [...Array(10).keys()].map((val) => {
    return {
        id: val,
        name: `たかき${val}`,
        image: "https://source.unsplash.com/JBrbzg5N7Go",
        email: "takaki55730317@gmail.com",
        phone: "090-1111-2222",
        company: {
            name: "テスト株式会社",
        },
        website: "https://google.com"
    }
})

export const Users = () => {
    const { userInfo, setUserInfo } =  useContext(UserContext)
    const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });
    return (
        <SContainer>
            <h2>ユーザー一覧</h2>
            <SearchInput />
            <br />
            <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
            <SUserArea>
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </SUserArea>
        </SContainer>
    )
}

const SContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
`
const SUserArea = styled.div`
    padding-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
`
```

+ `src/components/molecules/SearchInput.jsx`を再レンダリングチェック<br>

```
import styled from "styled-components"
import { PrimaryButton } from "../atoms/button/PrimaryButton"
import { Input } from "../atoms/input/Input"

export const SearchInput = () => {
    console.log('SearchInput'); // 常時レンダリングされてしまっている
    return (
        <SContainer>
            <Input placeholder="検索条件を入力" />
            <SButtonWrapper>
                <PrimaryButton>検索</PrimaryButton>
            </SButtonWrapper>
        </SContainer>
    )
}

const SContainer = styled.div`
    display: flex;
    align-items: center;
`;

const SButtonWrapper = styled.div`
    padding-left: 8px;
`;
```

+ `src/components/organism/User/UserCard.jsx`を再レンダリングチェック<br>

```
import React from "react";
import styled from "styled-components"
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

export const UserCard = (props) => {
    console.log('UserCard'); // 常時レンダリングされてしまっている

    const { user } = props;
    return (
        <Card>
            <UserIconWithName image={user.image} name={user.name} />
            <SDl>
                <dt>メール</dt>
                <dd>{user.email}</dd>
                <dt>TEL</dt>
                <dd>{user.phone}</dd>
                <dt>会社名</dt>
                <dd>{user.company.name}</dd>
                <dt>WEB</dt>
                <dd>{user.website}</dd>
            </SDl>
        </Card>
    )
}

const SDl = styled.dl`
    text-align: left;
    dt {
        float: left;
    }
    dd {
        padding-left: 32px;
        padding-bottom: 8px;
        overflow-wrap: break-word;
    }
`;
```

+ `src/compoenents/molecures/user/UserIconWithName.jsx`を再レンダリングチェック<br>

```
import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../../providers/UserProvider";

export const UserIconWithName = (props) => {
    console.log("UserIconWithName"); // 再レンダリングされてしまっている
    const { image, name } = props;
    const { userInfo } = useContext(UserContext);
    const isAdmin = userInfo ? userInfo.isAdmin : false

    return (
        <SContainer>
            <SImg height={160} width={160} src={image} alt={name} />
            <SName>{name}</SName>
            {isAdmin && <SEdit>編集</SEdit>}
        </SContainer>
    )
}

const SContainer = styled.div`
    text-align: center;
`;
const SImg = styled.img`
    border-radius: 50%;
`;
const SName = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    color: #40514e;
`;
const SEdit = styled.span`
    text-decoration: underline;
    color: #aaa;
    cursor: pointer;
`
```

+ `src/components/molecules/SearchInput.jsx`の再レンダリング防止処理<br>

```
import React, { memo } from "react"; // 追記
import styled from "styled-components"
import { PrimaryButton } from "../atoms/button/PrimaryButton"
import { Input } from "../atoms/input/Input"

export const SearchInput = memo(() => { // 編集
    console.log('SearchInput');
    return (
        <SContainer>
            <Input placeholder="検索条件を入力" />
            <SButtonWrapper>
                <PrimaryButton>検索</PrimaryButton>
            </SButtonWrapper>
        </SContainer>
    )
})

const SContainer = styled.div`
    display: flex;
    align-items: center;
`;

const SButtonWrapper = styled.div`
    padding-left: 8px;
`;
```

+ `src/components/organism/user/UserCard.jsx`の再レンダリング防止処理<br>

```
import React, { memo } from "react"; // 編集
import styled from "styled-components"
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

export const UserCard = memo((props) => { // 編集
    console.log('UserCard');
    const { user } = props;
    return (
        <Card>
            <UserIconWithName image={user.image} name={user.name} />
            <SDl>
                <dt>メール</dt>
                <dd>{user.email}</dd>
                <dt>TEL</dt>
                <dd>{user.phone}</dd>
                <dt>会社名</dt>
                <dd>{user.company.name}</dd>
                <dt>WEB</dt>
                <dd>{user.website}</dd>
            </SDl>
        </Card>
    )
})

const SDl = styled.dl`
    text-align: left;
    dt {
        float: left;
    }
    dd {
        padding-left: 32px;
        padding-bottom: 8px;
        overflow-wrap: break-word;
    }
`;
```

+ `src/components/modlecules/user/UserIconWithName.jsx`の再レンダリング防止処理<br>

```
import React, { memo, useContext } from "react"; // 編集
import styled from "styled-components";
import { UserContext } from "../../../providers/UserProvider";

export const UserIconWithName = memo((props) => { // 編集
    console.log("UserIconWithName");
    const { image, name } = props;
    const { userInfo } = useContext(UserContext);
    const isAdmin = userInfo ? userInfo.isAdmin : false

    return (
        <SContainer>
            <SImg height={160} width={160} src={image} alt={name} />
            <SName>{name}</SName>
            {isAdmin && <SEdit>編集</SEdit>}
        </SContainer>
    )
})

const SContainer = styled.div`
    text-align: center;
`;
const SImg = styled.img`
    border-radius: 50%;
`;
const SName = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    color: #40514e;
`;
const SEdit = styled.span`
    text-decoration: underline;
    color: #aaa;
    cursor: pointer;
`
```

## Recoiでのstate管理

+ `$ npm install recoilnpm install --save recoil` or `$ yarn add recoil --save recoil`でインストール<br>

+ `src/store`ディレクトリを作成<br>

+ `src/store/userState.js`ファイルを作成<br>

```
import { atom } from "recoil";

export const userState = atom({
    key: "userState",
    default: { isAdmin: false }
});
```

+ `App.js`を編集<br>

```
import React from 'react';
import { RecoilRoot } from 'recoil'; // 追記
import './App.css';
import { UserProvider } from './providers/UserProvider';
import { Router } from './router/Router';

function App() {
  return (
    <RecoilRoot> // 追記
      <UserProvider>
        <Router />
      </UserProvider>
    </RecoilRoot> // 追記
  );
}

export default App;
```

+ `src/components/pages/Users.jsx`を編集<br>

```
import React from "react" // 編集
import styled from "styled-components"
// import { UserContext } from "../../providers/UserProvider" // 削除
import { SecondaryButton } from "../atoms/button/SecondaryButton"
import { SearchInput } from "../molecules/SearchInput"
import { UserCard } from "../organism/user/UserCard"
import { useRecoilState } from "recoil" // 追記
import { userState } from "../../store/userState" // 追記

const users = [...Array(10).keys()].map((val) => {
    return {
        id: val,
        name: `たかき${val}`,
        image: "https://source.unsplash.com/JBrbzg5N7Go",
        email: "takaki55730317@gmail.com",
        phone: "090-1111-2222",
        company: {
            name: "テスト株式会社",
        },
        website: "https://google.com"
    }
})

export const Users = () => {
    // const { userInfo, setUserInfo } =  useContext(UserContext)
    const [userInfo, setUserInfo] = useRecoilState(userState); // 追記

    const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });
    return (
        <SContainer>
            <h2>ユーザー一覧</h2>
            <SearchInput />
            <br />
            <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
            <SUserArea>
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </SUserArea>
        </SContainer>
    )
}

const SContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
`
const SUserArea = styled.div`
    padding-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
`
```

+ `src/components/molecules/user/UserIconWithName.jsx`を編集<br>

```
import React, { memo } from "react"; // 編集
import styled from "styled-components";
import { useRecoilValue } from "recoil"; // useRecoilValueは値を参照することしかしない
// import { UserContext } from "../../../providers/UserProvider"; // 必要なし
import { userState } from "../../../store/userState"; // 追記

export const UserIconWithName = memo((props) => {
    // console.log("UserIconWithName");
    const { image, name } = props;
    // const { userInfo } = useContext(UserContext); // 必要なし
    const userInfo = useRecoilValue(userState) // 追記
    const isAdmin = userInfo ? userInfo.isAdmin : false

    return (
        <SContainer>
            <SImg height={160} width={160} src={image} alt={name} />
            <SName>{name}</SName>
            {isAdmin && <SEdit>編集</SEdit>}
        </SContainer>
    )
})

const SContainer = styled.div`
    text-align: center;
`;
const SImg = styled.img`
    border-radius: 50%;
`;
const SName = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    color: #40514e;
`;
const SEdit = styled.span`
    text-decoration: underline;
    color: #aaa;
    cursor: pointer;
`
```

+ `src/components/pages/Top.jsx`を編集<br>

```
import React from "react"
import { useHistory } from "react-router-dom" // 編集
import { useSetRecoilState } from "recoil" // useSetRecoilStateはset関数のみを適用
import styled from "styled-components"
// import { UserContext } from "../../providers/UserProvider" // 必要なし
import { userState } from "../../store/userState" // 追記
import { SecondaryButton } from "../atoms/button/SecondaryButton"


export const Top = () => {
    const history = useHistory();
    // const { setUserInfo } = useContext(UserContext); // 必要なし
    const setUserInfo = useSetRecoilState(userState); // 追記

    const onClickAdmin = () => {
        setUserInfo({ isAdmin: true })
        history.push("/users")
    }
    const onClickGeneral = () => {
        setUserInfo({ isAdmin: false })
        history.push("/users")
    }

    return (
        <SContainer>
            <h2>TOPページです</h2>
            <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
            <br />
            <br />
            <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
        </SContainer>
    )
}

const SContainer = styled.div`
    text-align: center;
`
```