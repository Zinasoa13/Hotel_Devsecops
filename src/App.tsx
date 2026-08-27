import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { BookingModal, Footer, Header, PageNotFound } from './components';

import {
  Home,
  RoomsPage,
  RoomDetails,
  RestaurantPage,
  SpaPage,
  AboutPage,
  ContactPage,
  MyBookingsPage,
} from './pages';

/**
 * Root app: React Router routes for Home, Rooms, RoomDetails,
 * Restaurant, Spa, About, Contact, MyBookings, and 404.
 */
function App() {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<RoomsPage />} />
          <Route path="/room/:id" element={<RoomDetails />} />
          <Route path="/restaurant" element={<RestaurantPage />} />
          <Route path="/spa" element={<SpaPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/my-bookings" element={<MyBookingsPage />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <Footer />
        <BookingModal />
      </BrowserRouter>
    </main>
  );
}

export default App;