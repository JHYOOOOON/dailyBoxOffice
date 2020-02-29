import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContentContainer from "./container/ContentContainer";
function App() {
  return (
    <div className="body_wrap">
      <Header />
      <ContentContainer />
      <Footer />
    </div>
  );
}

export default App;
