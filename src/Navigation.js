import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom'

import { Home } from './pages/Home'
import { Property } from './pages/Property'
import { NotFound } from './pages/NotFound'
import { Account } from './pages/Account'
import { Login } from './pages/Login'
import { Favorities } from './pages/Favorities'
import { Signup } from './pages/Signup'

export const Navigation =()=>(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/property' element={<Property />} />
            <Route path='/account' element={<Account />} />
            <Route path='/login' element={<Login />} />
            <Route path='/favorities' element={<Favorities />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </BrowserRouter>
)
