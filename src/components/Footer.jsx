
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi'

const Footer = () => {
  return (
    <footer className=" bg-gray-800 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">





        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8 py-10 max-w-xs mx-auto sm:max-w-2xl lg:max-w-full">

          {/* Brand & Contact */}
          <div className="col-span-full lg:mb-10 max-lg:border-b max-lg:pb-8 lg:border-r border-gray-200 lg:col-span-2 lg:max-w-xs lg:mb-0">

            <ul className="grid gap-5">
              <h4 className='text-lg text-violet-600 font-medium mb-7 underline  hover:text-green-500'>Contact Information</h4>
              <li className="flex items-center justify-center gap-2 lg:justify-start">
                <HiOutlineMail className="w-5 h-5 text-green-500" />
                <a href="#" className=" hover:text-green-500">
                  <strong>Email:</strong> skiscedu@live.com
                </a>
              </li>
              <li className="flex items-center justify-center gap-2 lg:justify-start">
                <HiOutlinePhone className="w-5 h-5 text-green-500" />
                <a href="tel:+919456583256" className=" hover:text-green-500">
                  <strong>Phone:</strong> +880 1309 101086
                </a>
              </li>
              <li className="flex items-center justify-center gap-2 lg:justify-start">
                <HiOutlineLocationMarker className="w-5 h-5 text-green-500  hover:text-green-500" />
                <span className=' hover:text-green-500'>Nayasarak, Sylhet - 3100, Bangladesh</span>
              </li>
            </ul>
            {/* google map of SKISC */}
            <div className="w-[300px] h-[200px] m-5  mx-auto border-4 border-gray-300 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8607.588551656421!2d91.86989808819251!3d24.896440538568132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375054d443afe737%3A0x1ddde589db02baa4!2sThe%20Sylhet%20Khajanchibari%20International%20School%20and%20college!5e0!3m2!1sen!2sbd!4v1753502307540!5m2!1sen!2sbd"
                width="100%"
                height="300"
                className="w-full h-[300px]"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

          {/* Menu columns */}
          {[
            { title: 'Quick Links', links: ['Dhaka Education Board', 'Sylhet Education Board', 'DSHE (মাউশি)', 'EMIS', 'Ministry of Education', 'Ministry of Primary and Mass Education'], hrefs: ['https://www.dhakaeducationboard.gov.bd/site/', 'https://sylhetboard.gov.bd/', 'https://dshe.gov.bd/', 'https://www.emis.gov.bd/emis', 'https://moedu.portal.gov.bd/', 'https://mopme.gov.bd/'] },
            { title: 'Quick Links', links: ['জাতীয় তথ্য বাতায়ন', ' শিক্ষক বাতায়ন', 'মুক্তপাঠ', 'Directorate of Primary Education (DPE)', 'BANBEIS', 'NCTB'], hrefs: ['https://bangladesh.gov.bd/', 'https://www.teachers.gov.bd/', 'https://muktopaath.gov.bd/', 'https://www.dpe.gov.bd/', 'https://banbeis.gov.bd/', 'https://nctb.gov.bd/'] },
            { title: 'Quick Links', links: ['Pearson Edexcel', 'Pearson Edexcel Exam Timetables', 'British Council Bangladesh', 'Paper Lords', 'BITESIZE'], hrefs: ['https://qualifications.pearson.com/en/home.html', 'https://qualifications.pearson.com/en/support/support-topics/exams/exam-timetables.html', 'https://www.britishcouncil.org.bd/en', 'https://www.paperlords.org/', 'https://www.bbc.co.uk/bitesize'] },
            { title: 'Support', links: ['Contact', 'FAQs', 'Download', 'Notice', 'BD Education Board Results'], hrefs: ['/contact', '/faqs', '/download', '/notice', 'https://eboardresults.com/v2/home'] }
          ].map((col, idx) => (
            <div key={idx} className="lg:mx-auto text-left">
              <h4 className="text-lg text-violet-600 font-medium mb-7 underline  hover:text-green-500">{col.title}</h4>
              <ul className="text-sm transition-all duration-500">
                {col.links.map((link, i) => (
                  <li key={i} className={i < col.links.length - 1 ? 'mb-6' : ''}>
                    <a href={col.hrefs[i]} className="hover:text-green-500">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="py-7 border-t border-gray-200">
          <div className="flex items-center justify-center">
            <span className="text-sm">
              Design & Developed by: <br /> <a href="https://www.linkedin.com/in/shoaibahmed1971/" className="font-bold  hover:text-green-500 text-violet-600">Md. Shoaib Ahmed,</a>&nbsp; Chemistry Teacher, SKISC
            </span>

          </div>
        </div>
        {/* Design credit */}
        <div className="py-6 text-center text-sm font-medium text-gray-100">

        </div>
      </div>




    </footer>
  )
}

export default Footer
