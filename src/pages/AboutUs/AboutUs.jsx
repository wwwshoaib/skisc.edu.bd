import NoticePage from "../../components/NoticePage/NoticePage";

const AboutUs = () => {
    return (
        <div className="w-11/12 mx-auto">
            {/* Clean Title Section */}
            <div className="text-center py-5 mb-2">
                <h1 className="text-2xl md:text-4xl font-extrabold text-gray-800 tracking-wide mb-4">
                    About <span className="text-purple-600">Us</span>
                </h1>

                {/* Underline / Divider */}
                <div className="w-24 h-1 mx-auto bg-purple-600 rounded-full mb-4"></div>

                <p className="text-md md:text-lg font-medium text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    Discover our mission, vision, and the passionate team committed to shaping bright futures through quality education.
                </p>
            </div>

            {/* Content Section */}
            <div className=" grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-6 py-5">
                {/* content */}
                <div className="col-span-8  p-2 ">
                    {/* image */}
                    <div>
                        <img src="../../../public/skisc-campus.jpg" alt="skisc-picture" className="w-full h-[350px]" />
                    </div>
                    {/* about us */}
                    <div className="mt-5">
                        <h1 className="text-xl md:text-2xl font-extrabold text-gray-800 tracking-wide mb-4">
                            About <span className="text-purple-600">Us</span>
                        </h1>
                        <p>
                            The Sylhet Khajanchibari International School & College (SKISC) is the largest and first English-medium educational institution in the Sylhet division of Bangladesh. Established with a vision to provide world-class education, SKISC offers a rigorous academic program from the foundational years up to A-Level, blending both the British and National Curricula. The institution is committed to nurturing global citizens by fostering academic excellence, critical thinking, and moral values. With a team of highly qualified educators, state-of-the-art facilities, and a supportive environment, SKISC creates an ideal setting for holistic learning. Students are encouraged to explore their talents in academics, the arts, sports, and leadership through a wide range of extracurricular activities. The school emphasizes discipline, innovation, and cultural pride, helping students build confidence and prepare for success in both national and international arenas. SKISC continues to set benchmarks in quality education within the region.

                            Following the National Curriculum regulated by Bangladesh’s National Curriculum and Textbook Board (NCTB), SKISC prepares students for the Secondary School Certificate (SSC) and Higher Secondary Certificate (HSC) examinations. The SSC curriculum equips students with essential knowledge in subjects like Bangla, English, Mathematics, Science, and Social Science, building critical thinking and analytical skills. At the HSC level, students specialize in Science and Business Studies, preparing them for higher education and professional success. This dual curriculum approach ensures that students are well-rounded and competitive both nationally and internationally.


                        </p>
                    </div>



                </div>
                {/* Notice Board */}
                <div className="w-full col-span-4 p-2">
                    <div>
                        <NoticePage></NoticePage>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default AboutUs;
