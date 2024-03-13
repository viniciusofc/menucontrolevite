import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


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

function Sidebar({ children }) {
  const [open, setOpen] = useState(true);
  const [items, setItems] = useState(menuItems);

  const currentUrl = window.location.pathname;

  const marcarItemAtivo = () => {
    console.log('entrei aqui 1')
    const updatedItems = items.map(item => ({
        ...item,
        active: item.url === currentUrl
    }));
    setItems(updatedItems);
};

  useEffect(() => {
    return () => {
      marcarItemAtivo()
    }
  }, [currentUrl])


  return (
    <div className="flex">
      <div
        className={` ${open ? "w-72" : "w-20 "
          } bg-zinc-900 h-screen p-5  pt-8 relative duration-300`}
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
            className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
              }`}
          >
            Menu Vite
          </h1>
        </div>
        <ul className="pt-6">
          {items.map((Menu, index) => (
            <Link to={`${Menu.url}`} onClick={() => marcarItemAtivo()}>
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-zinc-800 text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"}  ${Menu.active && "bg-zinc-800"}`}
              >
                <img src={`/src/assets/${Menu.src}.png`} />
                <span className={`${!open && "hidden"} origin-left duration-200 `}>
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