import React from "react";
import logo from "../../assets/dev-ed-wave.png";
import profile from '../../assets/profile.jpg'
import web from '../../assets/web.png'
import { Link } from 'react-router-dom'
import resume from '../../assets/neil-denver-olida-resume.pdf'
import "./Home.css";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <div className="flex justify-center h-4/5 mt-16">
        <div className="flex w-9/12 ">

          <div className="w-1/5 flex justify-center items-center">
            <ul className="space-y-4">
              <li>
                <a target="https://github.com/neilolida"><i className="fa-brands fa-github text-2xl"></i></a>
              </li>

              <li>
                <a target="https://github.com/neilolida"><i className="fa-brands fa-facebook-messenger text-2xl"></i></a>
              </li>

              <li>
                <a target="https://github.com/neilolida"><i className="fa-brands fa-linkedin text-2xl"></i></a>
              </li>
            </ul>
          </div>

          <div className="w-2/5 flex justify-center items-center px-7">
            <div className="">

              <h1 className="text-2xl"> Hi there, I'm Neil, a developer who enjoys trying out new things.</h1>

              <Link to='/contact'>
                <button className="rounded-lg bg-indigo-500 px-5 py-1.5 mt-">Say Hello</button>
                
              </Link>
              
            </div>
          </div>

          <div className="flex justify-center w-2/5">
            <img src={logo} alt="" className="img" />
          </div>

        </div>
      </div>

      <div className="text-center my-36">
        scroll down <i className="fa-solid fa-arrow-down"></i>
      </div>

      <div className="flex-col w-3/5 m-auto">
        <div className="my-9 font-semibold self-end"><span className="text-indigo-500 font-semibold">01.</span> ABOUT ME</div>
        <div className="flex">
          <img src={profile} alt="..." className="rounded-full border-8 border-indigo-500 mr-4" style={{ width: '240px'}}/>
          <div className="self-center p-5">
            <p className="text-4xl font-bold self-center leading-loose">That's me in the photo.</p>
            <p className="text-xl leading-relaxed">I'm a web developer, focusing on front-end and currently equiping myself to be a full-stack web developer.</p>
            <a href={resume} download>
            <button className="flex gap-2 rounded-lg bg-indigo-500 px-4 py-2">Download CV <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16"> <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/> <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/></svg>
            </button>
            </a>
          </div> 
        </div>

        <div className="py-4">
          <div className="mt-24 font-semibold"> <span className="text-indigo-500 font-semibold">02.</span> WEBSITE DEVELOPMENT</div>
          <div className="flex">
            <div className="self-center p-5">
              <p className="text-xl leading-relaxed p-2"> I build websites using the latest technologies to ensure your website is fast, robust, provides a great user experience, and ensures great SEO for your business growth. Get in touch to hire me for your next development project.</p>
            </div>
            <img src={web} alt="..." style={{ width: '440px'}}/>
          </div>
        </div>
      </div>

      <Footer />  
    </div>
  );
};

export default Home;
