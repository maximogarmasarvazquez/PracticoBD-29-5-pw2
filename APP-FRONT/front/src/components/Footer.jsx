import { Link } from "react-router-dom";
// import logo from "../imagenes/descarga.svg";
import  "../estilos/Footer.css";
function Footer ()
{

    return (
   <div className="footer-container">
      <footer className="bg-white shadow dark:bg-gray-900 ">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
              <div className="sm:flex sm:items-center sm:justify-between">
                  <a href="/" className="flex items-center mb-4 sm:mb-0">
                    <svg version="1.1" className="h-[6rem] "  xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 253.000000 199.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <metadata>
                    Created by potrace 1.16, written by Peter Selinger 2001-2019
                    </metadata>
                    <g transform="translate(0.000000,199.000000) scale(0.100000,-0.100000)"
                    fill="#fff" stroke="none">
                    <path d="M1698 1777 l-337 -92 -103 -125 c-56 -69 -205 -250 -331 -404 l-229
                    -278 178 92 c175 92 177 93 157 59 -27 -44 -523 -871 -531 -884 -5 -9 1303
                    1282 1432 1413 l59 60 -109 -30 c-60 -16 -120 -32 -134 -35 -18 -4 19 39 135
                    156 88 88 158 161 155 160 -3 0 -157 -42 -342 -92z"/>
                    <path d="M1125 1663 c-267 -35 -465 -256 -465 -518 0 -79 18 -185 31 -185 5 0
                    9 4 9 8 0 5 33 48 74 96 60 71 75 96 80 132 15 115 111 226 227 263 27 9 57
                    36 114 104 l78 92 -29 6 c-32 7 -74 8 -119 2z"/>
                    <path d="M1603 1157 c-58 -58 -93 -103 -97 -122 -19 -81 -114 -178 -208 -211
                    -30 -10 -70 -42 -130 -102 -49 -47 -88 -90 -88 -93 0 -17 129 -19 200 -5 201
                    42 367 194 414 380 17 67 22 212 8 233 -5 9 -37 -17 -99 -80z"/>
                    <path d="M848 912 c-53 -31 -97 -61 -97 -67 0 -5 17 -29 38 -53 l37 -43 54 88
                    c29 48 60 98 68 111 8 12 10 22 6 21 -5 0 -53 -26 -106 -57z"/>
                    </g>
                    </svg>
                      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Maniac</span>
                  </a>
                  <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                      <li>
                          <Link to="#" className="mr-4 hover:underline md:mr-6 ">About</Link>
                      </li>
                      <li>
                          <Link to="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
                      </li>
                      <li>
                          <Link to="#" className="mr-4 hover:underline md:mr-6 ">Licensing</Link>
                      </li>
                      <li>
                          <Link to="/contactar" className="hover:underline">Contactar</Link>
                      </li>
                  </ul>
              </div>
              <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
              <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 Maniac™.</span>
          </div>
      </footer>
    </div>
      
  );

}


export default Footer;