import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/Unsplash";
import ImageList from "./ImageList";

class App extends React.Component {
  state = {
    images: []
  };

  onhandleTerm = async term => {
    console.log(term);
    const res = await unsplash.get("/search/photos", {
      params: {
        query: term
      }
    });

    console.log(res.data.results);
    this.setState({ images: res.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onhandleTerm} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
