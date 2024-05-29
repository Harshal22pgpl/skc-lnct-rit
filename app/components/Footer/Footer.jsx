import React from 'react'

export default function Footer() {
  return (
    <footer class="bg-gray-800 text-white py-12">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="item">
            <p class="text-center"><img src="/logo1.png" class="w-20 mx-auto mb-4" alt="Logo"></img></p>
            <p class="font-bold text-center mt-6">
                Lakshmi Narain College of Technology <br></br>
                Indore, Madhya Pradesh, India, 453555
            </p>
            <div class="contact-info text-center mt-8">
                <ul>
                    <li><i class="bi bi-telephone"></i> 0661-246-2020 / 2002</li>
                    <li> <i class="bi bi-envelope"></i> registrar@nitrkl.ac.in</li>
                </ul>
            </div>
            <div class="social-links flex justify-center mt-4">
                <a href="https://www.instagram.com/nitrourkela1961/" class="outside-link mr-2" target="_blank" title="Instagram"><i class="fab fa-instagram-square"></i></a>
                <a href="https://twitter.com/nitrourkela" class="outside-link mr-2" target="_blank" title="Twitter"><i class="fab fa-twitter-square"></i></a>
                <a href="https://www.facebook.com/nitrkl1" class="outside-link mr-2" target="_blank" title="Facebook"><i class="fab fa-facebook-square"></i></a>
                <a href="https://www.linkedin.com/school/national-institute-of-technology-rourkela/" class="outside-link mr-2" target="_blank" title="Linkedin"><i class="fab fa-linkedin"></i></a>
                <a href="https://www.youtube.com/@NITROURKELA1961" class="outside-link" target="_blank" title="Youtube"><i class="fab fa-youtube-square"></i></a>
            </div>
        </div>
        <div class="item">
            <h4 class="font-bold">IMPORTANT LINKS</h4>
            <div class="footer-link text-sm">
                <ul>
                    <li className='p-2'><a href="https://mail.nitrkl.ac.in/">Webmail</a></li>
                    <li className='p-2'><a href="https://eapplication.nitrkl.ac.in/nitris/"> NITRis</a></li>
                    <li className='p-2'><a href="/Academic/Holidays"> Holidays</a></li>
                    <li className='p-2'><a href="/Academic/AcademicCalendar"> Academic Calendar</a></li>
                    <li className='p-2'><a href="/Academic/AcademicTimeTable"> Academic TimeTable</a></li>
                    <li className='p-2'><a href="/Student/Advertisements"> Admission Advt. &amp; Notices</a></li>
                    <li className='p-2'><a href="https://website.nitrkl.ac.in/FacultyStaff/Career/"> Career</a></li>
                    <li className='p-2'><a href="https://website.nitrkl.ac.in/FacultyStaff/Stores-Purchase/Tender/">Tenders</a></li>
                    <li className='p-2'><a href="https://guesthouse.nitrkl.ac.in/">Guest House</a></li>
                </ul>
            </div>
        </div>
        <div class="item">
            <h4 class="font-bold">OTHER LINKS</h4>
            <div class="footer-link text-sm">
                <ul>
                    <li className='p-2'><a href="/Institute/NIRF">NIRF</a></li>
                    <li className='p-2'><a href="/Institute/NBA"> NBA</a></li>
                    <li className='p-2'><a href="https://www.ftbi-nitrkl.org/"> FTBI</a></li>
                    <li className='p-2'><a href="https://website.nitrkl.ac.in/Institute/NAD/"> NAD Cell</a></li>
                    <li className='p-2'><a href="https://nitrkl.ac.in/UBA/"> Unnat Bharat Abhiyan</a></li>
                    <li className='p-2'><a href="https://icc.nitrkl.ac.in/">Internal Complaint Cell</a></li>
                    <li className='p-2'><a href="https://www.ics-nitrkl.in/"> Institute Counselling Service</a></li>
                    <li className='p-2'><a href="https://nitrkl.ac.in/CRF/">Central Research Facility</a></li>
                    <li className='p-2'><a href="https://gati.nitrkl.ac.in/">GATI</a></li>
                </ul>
            </div>
        </div>
        <div class="item">
            {/* <h4 class="font-bold">Photo Gallery</h4> */}
            <div class="grid grid-cols-2 gap-2 p-2">
                <div class="item-img">
                    <a href="/assets/images/gallery1.jpg" data-fancybox="mygallery" data-caption="" title="">
                        <img src="/logo1.png" class="w-full" alt=""></img>
                    </a>
                </div>
                <div class="item-img">
                    <a href="/assets/images/gallery2.jpg" data-fancybox="mygallery" data-caption="" title="">
                        <img src="/logo1.png" class="w-full" alt=""></img>
                    </a>
                </div>
                <div class="item-img">
                    <a href="/assets/images/gallery3.jpg" data-fancybox="mygallery" data-caption="" title="">
                        <img src="/logo1.png" class="w-full" alt=""></img>
                    </a>
                </div>
                <div class="item-img">
                    <a href="/assets/images/gallery3.jpg" data-fancybox="mygallery" data-caption="" title="">
                        <img src="/logo1.png" class="w-full" alt=""></img>
                    </a>
                </div>
                <div class="item-img">
                    <a href="/assets/images/gallery3.jpg" data-fancybox="mygallery" data-caption="" title="">
                        <img src="/logo1.png" class="w-full" alt=""></img>
                    </a>
                </div>
                <div class="item-img">
                    <a href="/assets/images/gallery3.jpg" data-fancybox="mygallery" data-caption="" title="">
                        <img src="/logo1.png" class="w-full" alt=""></img>
                    </a>
                </div>
                <div class="item-img">
                    <a href="/assets/images/gallery3.jpg" data-fancybox="mygallery" data-caption="" title="">
                        <img src="/logo1.png" class="w-full" alt=""></img>
                    </a>
                </div>
                <div class="item-img">
                    <a href="/assets/images/gallery3.jpg" data-fancybox="mygallery" data-caption="" title="">
                        <img src="/logo1.png" class="w-full" alt=""></img>
                    </a>
                </div>
                <div class="item-img">
                    <a href="/assets/images/gallery3.jpg" data-fancybox="mygallery" data-caption="" title="">
                        <img src="/logo1.png" class="w-full" alt=""></img>
                    </a>
                </div>
                <div class="item-img">
                    <a href="/assets/images/gallery3.jpg" data-fancybox="mygallery" data-caption="" title="">
                        <img src="/logo1.png" class="w-full" alt=""></img>
                    </a>
                </div>
            </div>
        </div>

    </div>
    <hr class=" mb-2"></hr>
    <div class="copy-right-other-links container mx-auto">
        <div class="flex justify-between items-center">
            <div class="item-copy p-2 text-sm">
                Copyright © 2024 Lakshmi Narain College of Technology. All Rights Reserved.
            </div>
            <div class="item-othtes-links ">
                <ul className="flex px-4 gap-4 text-sm">
                    <li className='p-2'><a href="/Home/TermCondition">Terms &amp; Conditions</a></li>
                    <li className='p-2'><a href="/Home/HyperLink"> Hyperlinking Policy</a></li>
                    <li className='p-2'><a href="/Home/PrivacyPolicy"> Privacy Policy</a></li>
                </ul>
            </div>
        </div>
    </div>
    <hr class="mt-2"></hr>
    <section class="gov-logo">
        <div class="container mx-auto">
            <div class="owl-carousel owl-theme gov-slider owl-loaded owl-drag">
              
            </div>
        </div>
    </section>
</footer>

  )
}
