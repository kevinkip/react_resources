import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Kevin";
  /* jsx stands for javascript xml */
  /* jsx provides a template for the component layout */
  /* jsx renders data as text as it displays it */

  const handleNameChange = () => {
    const names = ['Moose', 'Holly', 'Kevin'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {handleNameChange()}!
         {/*  Hello {name}! */} {/* Hello Kevin! */}
          {/* changes what's on the page immediately from here */}
        </p>

        {/* <p>{ [1,2,3] }</p> */} {/* 123 . Curly braces says this is a JS expression*/}
       {/*  <p> [1,2,3] </p> */} {/* [1,2,3] */}
        {/* <p>{{a:1, b:2}}</p> */}  {/*ERROR
Objects are not valid as a React child (found: object with keys {a, b}). If you meant to render a collection of children, use an array instead.*/}
        {/* <p>{ true === false }</p> */} {/* react will not render a boolean */}
       {/*  <p>{name}</p>  */}{/* Kevin */}
      </header>
    </div>
  );
}

export default App;
