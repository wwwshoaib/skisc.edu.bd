import DonationForm from "../components/DonationForm";
import Header from "../components/Header/Header";
import Slider from "../components/Slider";
import About from "../components/About";
import HowItWorks from "../components/HowItWorks";
import Video from "../components/Video";
import Footer from "../components/Footer";
import 'animate.css';
import Navbar from "../components/Navbar/Navbar";
import LatestNews from "../components/LatestNews/LatestNews";





const HomeLayout = () => {
    return (
        <div className="bg-green-50">
            <Header></Header>
            <LatestNews></LatestNews>
            
            <Navbar></Navbar>
           
            <div className="py-5 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-12 bg-green-50">
                <div className="col-span-9 border-4 border-double">
                    <Slider></Slider>
                </div>
                <div className="col-span-3">
                    <DonationForm></DonationForm>
                </div>
            </div>
            {/* about */}
            <div>
                <About></About>
            </div>
            {/* How it works */}
            <div>
                <HowItWorks></HowItWorks>
            </div>
            {/* Latest News */}
            <div>
             
            </div>
            {/* video */}
            <div>
                <Video></Video>
            </div>
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;