
import Header from "../components/Header/Header";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import 'animate.css';
import Navbar from "../components/Navbar/Navbar";






const HomeLayout = () => {
    return (
        <div className="bg-blue-100">
            <Header></Header>
            <Navbar></Navbar>

            <div className="py-5 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-12 bg-green-50">
                <div className="col-span-8 border-4 border-double">
                    <Slider></Slider>
                </div>
                <div className="col-span-4 px-4 mt-5 md:mt-0 flex gap-4 h-full">
                     {/* Principal */}
                    <div className=" flex-1 border border-gray-300 rounded-xl shadow-md p-4 bg-white hover:shadow-lg transition duration-300">
                        <img
                            src="../../public/Rajumar-sir.jpg"
                            alt="principal-picture"
                            className="w-50 h-40 object-cover rounded-md mb-3"
                        />
                         <h1 className="font-semibold text-[14px] text-indigo-600 mb-1">
                            Rajkumar Singh
                        </h1>
                         <h1 className="font-semibold text-[12px] text-gray-800 mb-1">
                            Principal in Charge of SKISC
                        </h1>
                        <p className="text-sm text-gray-600">Message of Principal in Charge</p>
                    </div>
                    {/* DC */}
                    <div className="flex-1 border border-gray-300 rounded-xl shadow-md p-4 bg-white hover:shadow-lg transition duration-300">
                        <img
                            src="../../public/DC.jpeg"
                            alt="DC-picture"
                            className="w-50 h-40 object-cover rounded-md mb-3"
                        />
                         <h1 className="font-semibold text-[14px] text-indigo-600 mb-1">
                           Muhammad Sher Mahbub Murad
                        </h1>
                        <h1 className="font-semibold text-[12px] text-gray-800 mb-1">
                            Chairman of Board of Trustees of SKISC  & DC of Sylhet
                        </h1>
                       
                        <p className="text-sm text-gray-600">Message of DC</p>
                    </div>

                   
                </div>


            </div>

            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;