// hooks
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useState } from "react"

// style
import './App.css'

//pages
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"

import News from "./pages/News"
import NewPaper from "./pages/NewPaper"

//Notices Pages
import Notices from "./pages/Notices/Current"
import NoticePre from "./pages/Notices/PreNotice"
import Favorite from "./pages/Notices/Favorite"
import Old from "./pages/Notices/Old"
import CreateNotice from "./pages/Notices/CreateNotice"
import Notice from "./pages/Notice"

// Article Pages
import Articles from "./pages/Articles/Current"
import ArticlesFavorite from "./pages/Articles/Favorite"
import ArticlesCreate from "./pages/Articles/Create"
import Article from "./pages/Article"

// Profile Pages
import Profile from "./pages/Profile/Profile"
import EditProfile from "./pages/EditProfile"
import UserProfile from "./pages/UserProfile"

// Search page
import Search from "./pages/Search"

//components
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Searchinput from "./components/SearchInput"
import Messages from "./components/Messages"
import { useSelector } from "react-redux"
//const url = window.location.pathname
function App() {

  // View the message component
  const [messagePainel, setMessagePainel] = useState(false)
  const activeMessage = () => {
    setMessagePainel(true)
  }
  const closeMessage = () => {
    setMessagePainel(false)
  }
  const user = useSelector((state) => state.authReducer.authData)
  return (
    <div className="App">
      <BrowserRouter>

        {/*url == "/" || url == "/login" || url == "/register" ? <></> : <Navbar/>*/}
        <Navbar handleMessageActive={activeMessage} />
        <Searchinput handleActiveMessage={activeMessage} />
        <div className="container_app">
          <Messages active={messagePainel} handleClose={closeMessage} />
          <Routes>
            <Route path="/" element={user ? <Navigate to="profile" /> : <Home />} />
            <Route path="/login" element={user ? <Navigate to="../profile" /> : <Login />} />
            <Route path="/register" element={user ? <Navigate to="../profile" /> : <Register />} />

            <Route path="/news" element={user ? <News /> : <Navigate to="../" />} />
            <Route path="/news/:id" element={user ? <NewPaper /> : <Navigate to="../" />} />

            {/* Articles Pages */}
            <Route path="/articles" element={user ? <Navigate to="/articles/current" /> : <Navigate to="../" />} />
            <Route path="/articles/current" element={user ? <Articles /> : <Navigate to="../" />} />
            <Route path="/articles/favorite" element={user ? <ArticlesFavorite /> : <Navigate to="../" />} />
            <Route path="/articles/create" element={user ? <ArticlesCreate /> : <Navigate to="../" />} />
            <Route path="/articles/:id" element={user ? <Article /> : <Navigate to="../" />} />

            {/* Notice Pages */}
            <Route path="/notices/:id" element={user ? <Notice /> : <Navigate to="../" />} />
            <Route path="/notices" element={user ? <Navigate to="/notices/current" /> : <Navigate to="../" />} />
            <Route path="/notices/current" element={user ? <Notices /> : <Navigate to="../" />} />
            <Route path="/notices/old" element={user ? <Old /> : <Navigate to="../" />} />
            <Route path="/notices/prenotice" element={user ? <NoticePre /> : <Navigate to="../" />} />
            <Route path="/notices/favorite" element={user ? <Favorite /> : <Navigate to="../" />} />
            <Route path="/notices/create" element={user ? <CreateNotice /> : <Navigate to="../" />} />

            {/* Profile Pages*/}
            <Route path="/profile" element={user ? <Profile /> : <Navigate to="../" />} />
            <Route path="/profile/edit" element={user ? <EditProfile /> : <Navigate to="../" />} />
            <Route path="/profile/:username" element={user ? <UserProfile /> : <Navigate to="../" />} />

            {/* Search Page */}
            <Route path="/search" element={user ? <Search /> : <Navigate to="../" />} />

          </Routes>

        </div>

        <Footer />
        {/*url == "/login" || url == "/register" ? <></> : <Footer/>*/}
      </BrowserRouter>
    </div>
  )
}

export default App
