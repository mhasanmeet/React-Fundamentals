## React Architecture

## Folder Structure

```
└── /src
    ├── /assets
    ├── /components
    ├── /components
    │     ├── /forms
    │     │   ├── /TextField
    │     │   │   ├── TextField.js
    │     │   │   ├── TextField.styles.js
    │     │   │   ├── TextField.test.js
    │     │   │   └── TextField.stories.js
    │     │   ├── /Select
    │     │   │   ├── Select.js
    │     │   │   ├── Select.styles.js
    │     │   │   ├── Select.test.js
    │     │   │   └── Select.stories.js
    │     │   └── index.js
    │     ├── /routing
    │     │   └── /PrivateRoute
    │     │       ├── /PrivateRoute.js
    │     │       └── /PrivateRoute.test.js
    │     └── /layout
    │         └── /navigation
    │             └── /NavBar
    │                 ├── NavBar.js
    │                 ├── NavBar.styles.js
    │                 ├── NavBar.test.js
    │                 └── NavBar.stories.js
    ├── /context
    ├── /middleware
    ├── /services
    │     ├── /LocalStorage
    │     │   ├── LocalStorage.service.js
    │     │   └── LocalStorage.test.js
    │     └── index.js
    ├── /store
    │   ├── /authentication
    │   │   ├── /authentication.slice.js
    │   │   ├── /authentication.actions.js
    │   │   └── /authentication.test.js
    │   ├── /authors
    │   │   ├── /authors.slice.js
    │   │   ├── /authors.actions.js
    │   │   └── /authors.test.js
    │   └── /books
    │       ├── /books.slice.js
    │       ├── /books.actions.js
    │       └── /books.test.js
    ├── /utils
    │    ├── /constants
    │    │   └── countries.constants.js
    │    └── /helpers
    │        ├── validation.helpers.js
    │        ├── currency.helpers.js
    │        └── array.helpers.js
    ├── /views (or pages)
    │      ├── /Authors
    │      │   ├── /AuthorsPage
    │      │   │   ├── AuthorsPage.js
    │      │   │   └── AuthorsPage.test.js
    │      │   └── /AuthorBlurb
    │      │       ├── /AuthorBlurb.js
    │      │       └── /AuthorBlurb.test.js
    │      ├── /Books
    │      │   ├── /BooksPage
    │      │   │   ├── BooksPage.js
    │      │   │   └── BooksPage.test.js
    │      │   └── /BookForm
    │      │       ├── /BookForm.js
    │      │       └── /BookForm.test.js
    │      └── /Login
    │        ├── LoginPage
    │        │   ├── LoginPage.styles.js
    │        │   ├── LoginPage.js
    │        │   └── LoginPage.test.js
    │        └── LoginForm
    │            ├── LoginForm.js
    │            └── LoginForm.test.js
    ├── index.js
    └── App.js
```

## Alias Setup in vite.config.js 
alias setup in src folder so that we don't need to define file path, instead call as @

```js
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{
      find: '@', 
      replacement: path.resolve(__dirname, 'src')
    }]
  }
})
```

uses

```js
    import Data from '@/components/Data'
```

##

----
Read:
* https://www.taniarascia.com/react-architecture-directory-structure/
* 