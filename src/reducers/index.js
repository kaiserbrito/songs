import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Sweet Child O'Mine", duration: "4:05" },
    { title: "Alive", duration: "3:50" },
    { title: "Enter Sandman", duration: "5:10" },
    { title: "Would?", duration: "3:20" },
  ];
};

const selectedSongReducer = (selectSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
