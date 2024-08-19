import React, { useEffect, useState } from 'react';
import './App.css';
import Layout from './layout/Layout';
import Home from './pages/Home';
import SearchCategories from './pages/SearchCategories';
import { Route, Routes } from 'react-router-dom';
import SearchAlbums from './pages/SearchAlbums';
import SearchArtists from './pages/SearchArtists';
import SearchPlaylists from './pages/SearchPlaylists';
import SearchTracks from './pages/SearchTracks';
import Search from './pages/Search';
import Playlist from './pages/Playlist';
import AlbumPage from './pages/AlbumPage';
import ArtistPage from './pages/ArtistPage';
import Genres from './pages/Genres';

function App() {
  let [playlistData, setPlaylistData] = useState([]);
  let [categories_arr, setCategoriesArr] = useState([]);
  const clientId = 'b3b941518f764b86b2d9ecf3a2a60701';
  const REDIRECT_URI = 'http://localhost:5173/';
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
  const RESPONSE_TYPE = 'token';
  let [userinfo, setUserinfo] = useState([])
  let [searchData,setSearchData] = useState([])
  let token = ''
  let [current_playing_data, setCurrentPlayingArr] = useState([])
  let [currentIndex, setCurrentIndex] = useState()
  let [currentTrackId, setCurrentTrackId] = useState(0)
  useEffect(() => {
    token = localStorage.getItem('token');
    let hash = location.hash;
    if (!token) {
      if (hash) {
        token = hash.split('access_token=')[1]?.split('&')[0];
        localStorage.setItem('token', token);
        window.location.assign('/');
      } else {
        window.location.href = `${AUTH_ENDPOINT}?client_id=${clientId}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=playlist-modify-public`;
      }
    } else {
      const fetchPlaylistData = async () => {
        const playlistId = [
          "37i9dQZF1E35TwTQyreQP8",
          "37i9dQZF1E36tF7169kWiP",
          '37i9dQZF1E3ad3ttkg1M4f',
          "37i9dQZF1E38nrjRsMh6Ax",
          "37i9dQZF1E3akJLzWMf504"
        ];
        try {
          for (let item of playlistId) {
            const playlistResponse = await fetch(`https://api.spotify.com/v1/playlists/${item}`, {
              headers: {
                'Authorization': `Bearer ${token}`,
              },
            });
            let playlist = await playlistResponse.json();
            playlist.tracks.items = playlist.tracks.items.filter(item => item.track.preview_url)
            setPlaylistData((prevPlaylistData) => [...prevPlaylistData, playlist]);
          }
          fetch('https://api.spotify.com/v1/me', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
            .then(response => response.json())
            .then(data => setUserinfo(data))
        } catch (error) {
          console.error('Error fetching playlist data:', error);
        }
        fetch('https://raw.githubusercontent.com/Tilav-232007-P/SpotifyGenres/main/genres.json')
          .then(response => response.json())
          .then((result) => {
            for (let item of result) {
              setCategoriesArr((prevCategoriesArr) => [...prevCategoriesArr, item]);
            }
          });
      };
      fetchPlaylistData();
    }
  }, []);
  function GiveData(link, data, currentIndex, currentTrackId) {
    let audio = document.querySelector('audio')
    setCurrentPlayingArr(data)
    console.log(data);
    setCurrentIndex(currentIndex)
    setCurrentTrackId(currentTrackId)
    audio.src = link
    audio.play()
  }
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout data={current_playing_data} ind={currentIndex} func={GiveData}/>}>
          <Route index element={<Home data={playlistData}></Home>} />
          <Route path='/search' element={<SearchCategories data={categories_arr} />}></Route>
          <Route path='/search/:id' element={<Search data={playlistData} />}></Route>
          <Route path='/search/:id/tracks' element={<SearchTracks />}></Route>
          <Route path='/search/:id/albums' element={<SearchAlbums />}></Route>
          <Route path='/search/:id/playlists' element={<SearchPlaylists />}></Route>
          <Route path='/search/:id/artists' element={<SearchArtists />}></Route>
          <Route path='/playlist/:id' element={<Playlist func={GiveData} currentIndex={currentIndex} currentTrackId={currentTrackId}/>}></Route>
          <Route path='/album/:id' element={<AlbumPage func={GiveData} currentIndex={currentIndex} currentTrackId={currentTrackId}/>}></Route>
          <Route path='/artist/:id' element={<ArtistPage func={GiveData} currentIndex={currentIndex} currentTrackId={currentTrackId}/>}></Route>
          <Route path='/genres/:id' element={<Genres/>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
