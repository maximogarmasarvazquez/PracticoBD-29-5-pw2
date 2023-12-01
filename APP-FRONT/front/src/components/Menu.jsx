/* eslint-disable react-hooks/rules-of-hooks */

import { Link, useNavigate} from 'react-router-dom' // LINK este enlace pide componentes para renderizar y mostrar en pantalla sin reacargar el html completo
import '../estilos/App.css';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import logo from '../imagenes/logo.svg';
import opciones from '../imagenes/opciones.svg';
import '../estilos/Menu.css';



function classNames(...classes) {//#
  return classes.filter(Boolean).join(' ')
}



export default function menuNav (props) {
  const navigate = useNavigate();
  const { authOK } = props;  

  // let sigla = user.sigla;
  console.log(`authOK: `, authOK);  

  return (
    // 
    <Disclosure as="nav" className={ authOK.sigla == "ADM" ? "bg-blue-800" : authOK.sigla  == "OPE" ? "bg-yellow-800" : authOK.sigla  == "INV" ?  "bg-red-800" : "bg-green-800" } >
 
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <Menu as="div" className="relative ml-3 block md:hidden">
                  <div>
                    <Menu.Button className="relative flex ">
                      <span className="absolute -inset-1.5" />
                      
                      <img
                         width={25}
                        src={opciones}
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute left-2 z-10 mt-2 w-44 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    
                    <Menu.Item>
                        {({ active }) => (
                          <div
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                        <div>
                          <Link to="/">Home</Link>                  
                        </div>           
                         </div>
                        )}
                      </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                          <div
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                        <div>
                          <Link to="/productos">Productos</Link>
                        </div>           
                          </div>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                        <div>
                        </div>   
                         <Link to="/contactar">Contactar</Link>        
                        </div>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                        <div>
                          <Link to="/admin">Administración</Link>
                        </div>           
                          </div>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <div                         
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >                
                           {authOK ?
                            <div ><Link to="/logout">Cerrar sesion</Link></div>
                            :
                            <div ><Link to="/loginUser">Iniciar sesion</Link></div>           
                            }
                          </div>
                        )}
                      </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                          <div
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                        <div>
                          <Link to="/loginCliente">Cliente</Link>                  
                        </div>           
                         </div>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
               
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img              
                    src={logo} 
                    alt="logo"
                    width={80}
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex whitespace-nowrap">
                  <div className="nav-link">
                    <Link to="/">Home</Link>
                  </div>
                  <div className="nav-link">
                    <Link to="/productos">Productos</Link>
                  </div>
                  <div className="nav-link">
                    <Link to="/contactar">Contactar</Link>
                  </div>
                  <div className="nav-link">
                    <Link to="/admin">Administración</Link>
                  </div>
                  <div className="nav-link">
                    <Link to="/loginCliente">Inicio sesion</Link>
                  </div>
                  <div className="nav-link">
                    <Link to="/Registro">Registrarse</Link>
                  </div>
     
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button 
                  onClick={() => navigate("carrito")}
                  className="relative rounded-full bg-gray-800 p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <svg xmlns="http://www.w3.org/2000/svg" height="1.6em" viewBox="0 0 576 512"><g fill="#d7d7d7"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></g></svg>

                </button>

                {/* Profile dropdown */}
              
              </div>
            </div>
          </div>

        </>
    
    </Disclosure>
  )
}


 