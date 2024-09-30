# React JS Tutorial
### why we learn the ReactJS

## How to Create React-app Through CMD
- npm create-react-app file_name 
- not using capital letter

## How to create ViteReact app Through CMD
- npm create vite@latest
- Project name: ... vitereact
- √ Select a framework: » React
- √ Select a variant: » JavaScript

## Best react hooks
- useState() 

 - const [val , setval] = useState('intialvalue')

 - val is a variable setval is a function

- useCallback() is a React Hook that lets you cache a function definition between re-renders.
- useCallback(fn, dependencies)

- useEffect()  is a React Hook that lets you synchronize a component with an external system.
- useEffect(setup, dependencies?)
- useEffect(() => {
    PasswordGenerator();
  }, [length, numallow, charallow, PasswordGenerator]);

  - useRef() useRef is a React Hook that lets you reference a value that’s not needed for rendering.
  - const ref = useRef(initialValue)







## For random coponents 
- use Devui because here devlopment components ara aviable to enhance you development experience


``` javascript 
 code likhne ka trika 

 ```

 ### a tag isliye use ni krte h react mai kyoki wo refresh hota h click krne mai hum react mai link use krte h wo refresh ni hota h click krne mai

 # React Router DOM

 ## Outlet
 - An <Outlet> should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route.

 ## usePrams()
 - The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>. Child routes inherit all params from their parent routes.

 ### The Redux Toolkit package is intended to be the standard way to write Redux logic. It was originally created to help address three common concerns about Redux: