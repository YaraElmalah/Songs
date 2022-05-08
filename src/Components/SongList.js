import React, { Component } from "react";
import { connect } from "react-redux";

class SongList extends Component {
  render() {
      console.log(this.props); //to get the properties
    return <div>SongList</div>;
  }
}
 const mapStateToProps = (state) => {
   return {songs: state.songs}
 };

export default connect(mapStateToProps)(SongList);
