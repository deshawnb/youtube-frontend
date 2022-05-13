import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import PrivateRoute from "../utils/PrivateRoute";


const Pages = () => {
    return ( 
        <Router>
      <AuthProvider>
        <PrivateRoute><App /></PrivateRoute>
      </AuthProvider>
    </Router>
     );
}
 
export default Pages;
