import { combineReducers } from "redux";

const songListReducers = () => {
    return [
      { title: "Lost on you", duration: "3:04" },
      { title: "One More Time", duration: "5:14" },
      { title: "Bad Romance", duration: "3:00" },
      { title: "Shallow", duration: "4:06" },
      { title: "Mad World", duration: "5:00" },
    ];
};

const selectedSongReducers = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return  action.payload;
    }
    return selectedSong;
}
//combine all Reducers.
export default combineReducers({
    songs: songListReducers,
    selectedSong: selectedSongReducers
});
