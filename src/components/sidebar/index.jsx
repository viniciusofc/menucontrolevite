import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Sidebar({ children }) {
  const [open, setOpen] = useState(true);
  const menuItems = [
    { title: "Home", src: "Home", url: "/home", active: false },
    { title: "Seu Painel", src: "Painel", url: "/teste", active: false },
    // { title: "Inbox", src: "Chat" },
    { title: "Seu Perfil", src: "User", url: "/teste", gap: true, active: false },
    { title: "Produtos", src: "Product", url: "/products", active: false },
    { title: "Segmentos", src: "Categories", url: "/teste", active: false },
    { title: "Análise", src: "Analytics", url: "/teste", active: false },
    // { title: "Files ", src: "Folder", gap: true },
    { title: "Sair", src: "Logout", url: "/teste", gap: true, active: false },
  ];

  function marcarItemAtivo() {
    console.log('entrei aqui')
    const currentUrl = window.location.pathname;
    menuItems.forEach(item => {
      if (item.url === currentUrl) {
        item.active = true;
      } else {
        item.active = false;
      }
    });
  }

  useEffect(() => {
    return () => {
      marcarItemAtivo()
    }
  }, [])

  console.log()

  return (
    <div className="flex">
      <div
        className={` ${open ? "w-72" : "w-20 "
          } bg-white h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="/src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
         border-2 rounded-full  ${!open && "rotate-180 top-11"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="/src/assets/logo.png"
            className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"
              }`}
          />
          <h1
            className={`text-black origin-left font-medium text-xl duration-200 ${!open && "scale-0"
              }`}
          >
            Menu Vite
          </h1>
        </div>
        <ul className="pt-6">
          {menuItems.map((Menu, index) => (
            <Link to={`${Menu.url}`} onClick={() => marcarItemAtivo()}>
              <li
                key={index}
                className={`flex rounded-md p-2 cursor-pointer hover:bg-zinc-100 text-black text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"}  ${Menu.active && "bg-zinc-100"}`}
              >
                <img src={`/src/assets/${Menu.src}.png`} className="grayscale"/>
                <span className={`${!open && "hidden"} origin-left duration-200 font-semibold`}>
                  {Menu.title}
                </span>

              </li>
            </Link>
          ))}
        </ul>
      </div>
      {children}
    </div>

  );
}

export default Sidebar;