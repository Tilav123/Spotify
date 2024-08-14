import React, { useEffect, useState } from 'react'
import './App.css'
import Layout from './layout/Layout'
import songs from './components/album'
function App() {
  let [playlistData, setPlaylistData] = useState([])
  let [tracks, setTracks] = useState([]);
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
    }

    fetchPlaylistData()
  }, [])

  return (
    <>
      <Layout>
        <div className='.container'>
          <div className="box">
            <div className="up">
              <h1 className='category'>Только для вас</h1>
              <a className='show_all' href="#">Показать все</a>
            </div>

            <div className="item-box">
              {playlistData.length > 0 && playlistData.map((item) => songs(item))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default App