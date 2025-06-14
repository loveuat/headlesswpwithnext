"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import { fetchGraphQL } from "@/lib/api";
import { GET_PRIMARY_MENU } from "@/lib/queries";
import { GET_THEME_OPTIONS } from "@/lib/queries";

const Header = () => {
  const pathname = usePathname();

  const [menuItems, setMenu] = useState([]);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);
   const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [logoAlt, setLogoAlt] = useState<string>('Logo');
  useEffect(() => {
    async function loadMenu() {
      const res = await fetch("https://mywp.atulbramhe.site/wp-json/custom/v1/menu/primary");
      const flat = await res.json();

      // Convert to nested structure
      const buildTree = (items, parent = "0") =>
        items
          .filter(item => item.parent === parent)
          .map(item => ({
            ...item,
            children: buildTree(items, item.id.toString())
          }));

      setMenu(buildTree(flat));
    }

    loadMenu();
  }, []);


  useEffect(() => {
    const getLogo = async () => {
      try {
        const data = await fetchGraphQL(GET_THEME_OPTIONS);

        const logo =
          data?.data?.acfOptionsThemeOptions?.themeOptions?.primaryLogo;

        if (logo?.sourceUrl) {
          setLogoUrl(logo.sourceUrl);
          setLogoAlt(logo.altText || 'Logo');
        } else {
          console.warn('Logo not found in GraphQL response:', data);
        }
      } catch (error) {
        console.error('Failed to fetch logo:', error);
      }
    };

    getLogo();
  }, []);
  // Sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY >= 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarToggleHandler = () => setNavbarOpen(!navbarOpen);
  const handleSubmenu = (index) => setOpenIndex(openIndex === index ? -1 : index);
  
  return (
    <header
      className={`left-0 top-0 z-40 flex w-full items-center ${
        sticky
          ? "fixed z-[9999] bg-white bg-opacity-80 shadow backdrop-blur-sm dark:bg-gray-900 dark:shadow dark:bg-opacity-90"
          : "absolute bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className={`w-48 ${sticky ? "py-3" : "py-6"}`}>
          <Image
            src={logoUrl}
            alt={logoAlt}
            width={140}
            height={30}
            className="dark:hidden"
          />
          <Image
            src="/images/logo/logo-2.svg"
            alt="Logo Dark"
            width={140}
            height={30}
            className="hidden dark:block"
          />
        </Link>

        <div className="lg:hidden">
          <button
            onClick={navbarToggleHandler}
            aria-label="Toggle Menu"
            className="rounded px-3 py-2 focus:ring-2 focus:ring-primary"
          >
            <span className="block h-0.5 w-6 bg-black dark:bg-white mb-1"></span>
            <span className="block h-0.5 w-6 bg-black dark:bg-white mb-1"></span>
            <span className="block h-0.5 w-6 bg-black dark:bg-white"></span>
          </button>
        </div>

        <nav
          className={`absolute top-full right-0 z-30 w-[250px] rounded bg-white px-6 py-4 dark:bg-gray-900 lg:static lg:block lg:w-auto lg:bg-transparent lg:dark:bg-transparent lg:p-0 ${
            navbarOpen ? "block" : "hidden"
          }`}
        >
          <ul className="lg:flex lg:space-x-8">
            {menuItems.map((item, index) => (
              <li key={item.id} className="group relative">
                {item.url ? (
                  <Link
                    href={item.url}
                    className={`block py-2 lg:inline-block lg:py-6 ${
                      pathname === item.url
                        ? "text-primary"
                        : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                    }`}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <div>
                    <button
                      onClick={() => handleSubmenu(index)}
                      className="flex w-full items-center justify-between py-2 text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:py-6"
                    >
                      {item.label}
                      <svg className="ml-2" width="20" height="20" viewBox="0 0 20 20">
                        <path
                          fill="currentColor"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414L10 13.414 5.293 8.707a1 1 0 010-1.414z"
                        />
                      </svg>
                    </button>
                    <ul
                      className={`absolute left-0 top-full z-20 mt-2 w-48 rounded bg-white shadow-lg dark:bg-gray-800 lg:invisible lg:opacity-0 group-hover:visible group-hover:opacity-100 transition ${
                        openIndex === index ? "block" : "hidden"
                      }`}
                    >
                      {item.children.map((child) => (
                        <li key={child.id}>
                          <Link
                            href={child.url}
                            className="block px-4 py-2 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                          >
                            {child.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <Link
            href="/signin"
            className="text-dark dark:text-white hover:opacity-70 text-base font-medium"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="bg-primary text-white px-5 py-2 rounded hover:bg-opacity-80 transition"
          >
            Sign Up
          </Link>
          <ThemeToggler />
        </div>
      </div>
    </header>
  );
};

export default Header;
