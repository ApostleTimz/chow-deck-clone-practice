import { Component } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import ChowdeckBanner from "./components/HomePageComp/ChowdeckBanner";
import ScrollPhoneAnimation from "./components/HomePageComp/DeckAnimation";
import FAQComponent from "./components/HomePageComp/FAQsSection";
import Hero from "./components/HomePageComp/HeroSection";
import InfiniteScrollCards from "./components/HomePageComp/InfiniteScrollCards";
import JoinNetwork from "./components/HomePageComp/NetworkSection";
import PromoSection from "./components/HomePageComp/PromoSection";
import PromoCards from "./components/HomePageComp/Stories";
import ThemeSlider from "./components/HomePageComp/ThemeSlider";
import ChowdeckFooter from "./components/NavFootComp/Footer";
import Navbar from "./components/NavFootComp/Navbar";
import CompanyPage from "./pages/CompanyPage";

class AppErrorBoundary extends Component {
    state = { error: null };

    static getDerivedStateFromError(error) {
        return { error };
    }

    render() {
        if (this.state.error) {
            return <pre>{this.state.error.stack || this.state.error.message}</pre>;
        }

        return this.props.children;
    }
}

function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <ChowdeckFooter />
        </>
    );
}

export default function App() {
    return (
        <AppErrorBoundary>
            <Routes>
                <Route element={<Layout />}>
                    <Route
                        path="/"
                        element={
                            <main>
                                <Hero />
                                <ScrollPhoneAnimation />
                                <JoinNetwork />
                                <div className="bg-[#0c513f]">
                                    <ThemeSlider />
                                    <ChowdeckBanner />
                                    <InfiniteScrollCards />
                                </div>
                                <PromoCards />
                                <FAQComponent />
                                <PromoSection />
                            </main>
                        }
                    />
                    <Route path="/company" element={<CompanyPage />} />
                </Route>
            </Routes>
        </AppErrorBoundary>
    );
}