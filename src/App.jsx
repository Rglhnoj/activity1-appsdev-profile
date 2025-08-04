import Header from "./components/Header";
import Profile from "./components/Profile";
import Footer from "./components/Footer";


function App(){
    return(
        <div className="app">
  <div className="card-wrapper">
    <Header />
    <Profile />
    <Footer />
  </div>
</div>
    );
}
export default App;