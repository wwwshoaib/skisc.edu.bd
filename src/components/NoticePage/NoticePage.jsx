const NoticePage = () => {
  return (
    <div className="w-full md:w-11/12 mx-auto p-4 bg-white rounded shadow-md">
      {/* Header */}
      <div className="bg-[#D72050] text-white px-4 py-2 font-semibold text-center rounded-t">
        Notice Board
      </div>

      {/* Vertical Scroll Container */}
      <div className="overflow-hidden h-36 relative">
        <div className="animate-marquee-up space-y-4 text-gray-800 text-[17px] font-medium absolute w-full">
          <a
            href="/public/notice/notice-for-result-publication.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-green-600 text-center"
          >
            Result Publication of the Half Yearly Examination 2025
          </a>
          <a
            href="/public/notice/revised routine for the postponed exams.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-green-600 text-center"
          >
            Routine for the Postponed Exams – Half Yearly Examination 2025
          </a>
          <a
            href="/public/notice/notice-for-result-publication.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-green-600 text-center"
          >
            Result Publication of the Half Yearly Exam 2025
          </a>
          <a
            href="/public/notice/view-answer-scripts.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-green-600 text-center"
          >
            Viewing of Answer Scripts – Half-Yearly Examination 2025
          </a>
        </div>
      </div>
    </div>
  );
};

export default NoticePage;
