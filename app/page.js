import { BookingProvider } from "../components/BookingContext";
import BookingModal from "../components/BookingModal";
import LandingPage from "../components/LandingPage";

export default function HomePage() {
  return (
    <BookingProvider>
      <LandingPage />
      <BookingModal />
    </BookingProvider>
  );
}
