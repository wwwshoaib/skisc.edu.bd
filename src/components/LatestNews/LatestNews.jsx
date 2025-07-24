import Marquee from "react-fast-marquee";
import { Link } from "react-router";



const LatestNews = () => {
    return (
        <div className="flex  items-center gap-2 bg-base-200 p-2">
            <p className="bg-[#D72050] text-base-200 px-3 py-1">Notice</p>
            <Marquee pauseOnHover ={true} speed={100} className="text-gray-800" >
                <Link to="/news" className="mx-10" >
                    Lorem ipsum dolor sit amet consectetur adipisicing 
                </Link>
                <Link to="/news" className="mx-10" >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Link>
                <Link to="/news" className="mx-10" >
                    Lorem ipsum dolor, sit amet consectetur adipi Lorem ipsum dolor sit.
                </Link>
                <Link to="/news" className="mx-10" >
                     Suscipit ab itaque possim Lorem ipsum dolor.
                </Link>
            </Marquee>

        </div>
    );
};

export default LatestNews;