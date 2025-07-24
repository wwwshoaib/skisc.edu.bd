import Marquee from "react-fast-marquee";



const LatestNews = () => {
    return (
        <div className="flex items-center gap-2 bg-base-100 p-2">
            <p className="bg-[#D72050] text-base-200 px-3 py-1 font-semibold">Notice</p>
            <Marquee pauseOnHover={true} speed={100} className="text-gray-800">
                <a
                    href="/public/notice/notice-for-result-publication.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-10 hover:text-green-600 text-md md:text-xl font-medium"
                >
                    Notice for the Result Publication of the Half Yearly Exam 2025
                </a>
                <a
                    href="/public/notice/revised routine for the postponed exams.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-10 hover:text-green-600 text-md md:text-xl font-medium"
                >
                    Revised Routine for the Postponed Exams
                </a>
                 <a
                    href="/public/notice/notice-for-result-publication.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-10 hover:text-green-600 text-md md:text-xl font-medium"
                >
                    Notice for the Result Publication of the Half Yearly Exam 2025
                </a>
                <a
                    href="/public/notice/view-answer-scripts.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-10 hover:text-green-600 text-md md:text-xl font-medium"
                >
                    Notice for Viewing Answer Scripts
                </a>
            </Marquee>
        </div>
    );
};

export default LatestNews;
