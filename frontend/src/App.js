import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components/Common";
import { CartScreen, HomeScreen, LoginScreen, ProductScreen, RegisterScreen, SearchProductScreen } from "./screens";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          {/* Home route without Container */}
          <Route path="/" element={<HomeScreen />} />

          {/* Wrap all other routes in a Container */}
          <Route
            path="*"
            element={
              <Container>
                <Routes>
                  <Route path="/login" element={<LoginScreen />} />
                  <Route path="/register" element={<RegisterScreen />} />
                  <Route path="/product/:id" element={<ProductScreen />} />
                  <Route path="/cart/:id?" element={<CartScreen />} />
                  <Route path="/search" element={<SearchProductScreen />} />
                </Routes>
              </Container>
            }
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
