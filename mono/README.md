# Stack
1) Stenciljs
2) React + React Router
3) Vue + Vue Router
4) Tailwind CSS
5) Lerna for workspace

# Overview of the project

Project
```javascript
src 
    -- Assets (images)
    -- Components (Reusable components)
    -- Services (Axions client and Endpoints)
    -- Store (Stencil Store)
    -- types (interfaces)
    -- Util (common tool)
    -- dist (build folder)
```

# Key Features of Project
1) Built with Stencil js.
2) Typescript for static type checking.
3) Redux persist is used to persist the user state in local storage on any change and will hydrate the app on reload.
5) Web components build , can be used in any application
6) React output target added to embed in any react application
7) Vue output target added to embed in any react application
8) Stencil builtin state management used to communicate with internal components
9) Vercel CI/CD Deployment

# Web components
##### Usage 
   After creating the components , add output target libraries etc (React,Vue,javascript) check this documentation how to setup integrations in different frameworks
   https://stenciljs.com/docs/overview

##### Available components
1) cart-component
   1) prop submitCallBack ( this callback will get trigger when proceed to shipping clicks) 
   2) prop headerProps (this prop will extend current header props) 

2) shipping-component
    1) prop submitCallBack ( this callback will get trigger when submit clicks)
    2) prop backCallback ( this callback will get trigger when top back button clicks)
    3) prop headerProps (this prop will extend current header props)
3) submit-component
    1) prop returnToStoreHandler ( this callback will get trigger when back to store clicks)

# State management 

```javascript
   const initialState = {
      currency: 'SAR',
      isLoading: false,
      isCoupon: false,
      selectedCoupon: {},
      selectedShipping: {},
   }
```

1) Currency represents store currency
2) isLoading represents loading state of API calls (we can multiple flags for different components)
3) isCoupon represents if coupon is applied or not so we will get the total based on this flag in shipping component.
4) selectedCoupon represents current selected valid coupon
5) selectedShipping represents current selected shipping method

# Limitations
1) Web components architecture setup based on the needs as through callbacks for now but it can be extend in future based on actual requirments.

# Things I wish , I could have implemented because of time
1) System design.
2) caching.
3) Complete unit testing


# Getting Started with Stencil and Lerna
#### Steps to setup
1) Clone this repository and `cd /mono`
2) Install dependencies `npm install` (it will install all dependencies in packages folder on the root as a workspace)
3) Creating Stencil production build `cd packages/stencil-library && npm run build` (it will build components in React and Vue libraries as a wrappers)
4) Create React-app build to consume the web components. `cd ../react-app && npm run build`
5) Create vue-app build to consume the web components. `cd ../vue-app && npm run build`
6) To serve these build locally `npm run preview` in respective app folder
7) To run development `npm run dev`  in respective app folder
