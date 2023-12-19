import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard.js';
import Personal from './Components/Login/Personal-Details/Personal.js';
import SignIn from './Components/Login/SignIn/SignIn';
import SignUp from './Components/Login/SignUp/SignUp';
import Start from './Components/Login/Start/Start.js';
import Home1 from './Components/Home1/Home1/Home1.js'
import Songs from './Components/Home1/Songs/Songs.js'
import Title from './Components/Home1/Title/Title.js'
import Library from './Components/Home1/Library/Library.js';
import Content from './Components/Home1/Content/Content.js'
import Edit from './Components/Home1/Edit/Edit.js'

function App() {
    return (
        <Routes>
            <Route path='/' element={<Dashboard/>}>
                <Route index element={<Start/>}/>
                <Route path='/signIn' element={<SignIn/>}/>
                <Route path='/signUp' element={<SignUp/>}/>
                <Route path='/personalInfo' element={<Personal/>}/>
            </Route>
            <Route path="/home1" element={<Home1/>}>
                <Route index element={<Content/>}/>
                <Route path="library" element={<Library/>}/>
                <Route path="songs" element={<Songs/>}/>
                <Route path="edit" element={<Edit/>}/>
            </Route>
            {/* <Route path="/home" element={<Home/>}>
                <Route index element={<Cover/>}/>
                <Route path="search" element={<Search/>}/>
                <Route path="userSong" element={<UserSong/>}/>
                <Route path="edit" element={<Edit/>}/>
                <Route path="playlist" element={<Playlist/>}/>
                <Route path="add" element={<Add/>}/>
            </Route> */}
        </Routes>
    )
}

export default App