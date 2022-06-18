## Features
    - Typescript
    - Nextjs
    - Material UI
    - Redux (Redux RTK & Query)  
    - Cypress
    
## File Structure    
    ├── components              # reusable UI components
    ├── constants               # app-wide constants
    ├── coverage                # test coverage
    ├── cypress                 # testing solution
        ├── e2e                 # e2e test suite
        ├── fixtures            # mock data for testing
    ├── declarations            # typing
    ├── mocks                   # mock data
    ├── models                  # application models which handling business logics
    ├── pages                   # ui pages
        ├── api                 # mock api provided by nextjs (https://nextjs.org/docs/api-routes/introduction) 
    ├── public                  # public assets files
    ├── services                # services
        ├── redux
            ├── apis            # apis service
            ├── slices          # redux store
    ├── styles                  # global css styles
    ├── utils                   # util functions
        |-- adapters            # data transform functions
        |-- hooks               # React Hooks


## Getting Started
First, run the development server:
```bash 
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.  
## Cypress Testing
Run test
```bash
yarn test
```

Run single spec file
```bash
yarn cy:run --spec "cypress/e2e/home.cy.ts"
```

To see code coverage
```bash
yarn open:coverage
```
## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

