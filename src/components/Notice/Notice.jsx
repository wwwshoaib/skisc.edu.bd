import Marquee from "react-fast-marquee";




const Notice = () => {
    return (
        <div className="w-full md:w-11/12 mx-auto  flex items-center gap-2  p-2">
            <p className="bg-[#D72050] text-base-200 px-3 mx-auto py-1 font-semibold">Notice</p>
            <Marquee pauseOnHover={true} speed={80} className="text-gray-800">
                <a
                    href="/public/notice/notice-for-result-publication.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-10 hover:text-green-600 text-[18px]  font-medium"
                >
                    Result Publication of the Half Yearly Examination 2025
                </a>
                <a
                    href="/public/notice/revised routine for the postponed exams.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-10 hover:text-green-600 text-[18px]  font-medium"
                >
                    Routine for the Postponed Exams of the Half Yearly Examination 2025
                </a>
                 <a
                    href="/public/notice/notice-for-result-publication.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-10 hover:text-green-600 text-[18px]  font-medium"
                >
                    Result Publication of the Half Yearly Exam 2025
                </a>
                <a
                    href="/public/notice/view-answer-scripts.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-10 hover:text-green-600 text-[18px]   font-medium"
                >
                  Announcement: Viewing of Answer Scripts – Half-Yearly Examination 2025
                </a>
            </Marquee>
        </div>
    );
};

export default Notice;
