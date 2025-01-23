import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Footer, Header } from "./components/Common";
import { CartScreen, HomeScreen, LoginScreen, ProductScreen, RegisterScreen } from "./screens";

function App() {
  return (
    <Router>
      <Header />
      <main>

        <Route path="/" component={HomeScreen} exact />
        <Container>
          <Route path="/login" component={LoginScreen} exact />
          <Route path="/register" component={RegisterScreen} exact />
          <Route path="/product/:id" component={ProductScreen} exact />
          <Route path="/cart/:id?" component={CartScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
