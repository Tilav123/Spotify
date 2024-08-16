import React, { useEffect, useState } from 'react'
import './App.css'
import Layout from './layout/Layout'
import Home from './pages/Home'
import SearchCategories from './pages/SearchCategories'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import SearchAlbums from './pages/SearchAlbums'
import SearchArtists from './pages/SearchArtists'
import SearchPlaylists from './pages/SearchPlaylists'
import SearchTracks from './pages/SearchTracks'
import Search from './pages/Search'
import Playlist from './pages/Playlist'
function App() {
  let [playlistData, setPlaylistData] = useState([])
  let [categories_arr, setCategoriesArr] = useState([])
  useEffect(() => {
    const fetchPlaylistData = async () => {
      const clientId = 'b3b941518f764b86b2d9ecf3a2a60701'
      const clientSecret = '5e9e481c82cf4ac9956487ca21d6c5bf'
      const playlistId = ["37i9dQZF1E35TwTQyreQP8", "37i9dQZF1E36tF7169kWiP", '37i9dQZF1E3ad3ttkg1M4f', "37i9dQZF1E38nrjRsMh6Ax", "37i9dQZF1E3akJLzWMf504"]
      try {
        const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret),
          },
          body: 'grant_type=client_credentials',
        });
        const tokenData = await tokenResponse.json();
        const accessToken = tokenData.access_token;

        for (let item of playlistId) {
          const playlistResponse = await fetch(`https://api.spotify.com/v1/playlists/${item}`, {
            headers: {
              'Authorization': `Bearer ${accessToken}`,
            },
          })
          const playlist = await playlistResponse.json()
          setPlaylistData((prevPlaylistData) => [...prevPlaylistData, playlist]);
        }
      } catch (error) {
        console.error('Error fetching playlist data:', error);
      }
      fetch('https://rakhimv.github.io/spotify/server/janres.json')
        .then(response => response.json())
        .then((result) => {
          for (let item of result.items) {
            setCategoriesArr((prevCategoriesArr) => [...prevCategoriesArr, item.data.data.cardRepresentation])
          }
        })
    }
    fetchPlaylistData()
  }, [])
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home data={playlistData}></Home>} />
          <Route path='/search' element={<SearchCategories data={categories_arr}></SearchCategories>}></Route>
          <Route path='/search/:id' element={<Search></Search>}></Route>
          <Route path='/search/:id/tracks' element={<SearchTracks></SearchTracks>}></Route>
          <Route path='/search/:id/albums' element={<SearchAlbums></SearchAlbums>}></Route>
          <Route path='/search/:id/playlists' element={<SearchPlaylists></SearchPlaylists>}></Route>
          <Route path='/search/:id/artists' element={<SearchArtists></SearchArtists>}></Route>
          <Route path='/playlist/:id' element={<Playlist data={playlistData}/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App