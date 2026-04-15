import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import About from './components/About/About'
import Menu from './components/Menu/Menu'
import Reviews from './components/Reviews/Reviews'
import Checkout from './components/Checkout/Checkout'
import Payment from './components/Payment/Payment'

function App() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/payment" element={<Payment />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    )
}

export default App