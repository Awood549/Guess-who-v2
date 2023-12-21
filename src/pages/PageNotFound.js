import {Link} from 'react-router-dom';
const PageNotFound = () => {
    return (
      <>
    <h1>Oops!</h1>;
    <h2>Looks like there was an error, click <Link to="/">Here</Link> to return to the home page.</h2>
      </>
    )
  };
  
  export default PageNotFound;