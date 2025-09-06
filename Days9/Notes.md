```````````````````````````````````
Chunking
Code Splitting
Dynamic Boundling
Lazy loading
on demand loading
dynamic import
````````````````````````````````````````
Lazy loading - Optemize our large scale application. Breack in small..small chunk..its lazy loading.
like- grocerry assume manny component. when user do not need why its load..so create a lazy loading when user click on it grocerry load.
name import lazy on react.suspense-in fallback is used when grocery are not loading then show another page.


````````````````````````````````````````````````````````
const Grocerry = lazy(()=>import('./components/Grocerry'))
 {
    path:"/grocerry",
    element:<Suspense fallback={<h1>Loading...</h1>}><Grocerry/></Suspense>
  },

````````````````````````````````````````````````````````````


Topics Taught
⦁	Custom Hooks
⦁	Modularity in Code
⦁	Modular Bundling
⦁	Code Splitting
⦁	Lazy Loading