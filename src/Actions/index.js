//Action Creator (this is called named export, we call it with {})
export const selectSong = (song) => {
    //Return an action.
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}