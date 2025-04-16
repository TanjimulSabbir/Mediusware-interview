import React from "react";
import { Link } from "react-router-dom"; // for internal navigation
import BrandLogo from "../../assets/brand.svg"; // adjust path if needed

export default function NavBar() {
  return (
    <header className="bg-white sticky top-0 z-[999]">
      <nav
        className="sm:px-[30px] xl:px-[50px] 3xl:px-[120px] px-5 flex items-center justify-between xl:py-6 lg:py-4 py-3"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="lg:block xl:pr-8 pr-4 flex w-[120px] xl:w-[160px]">
          <a href="https://mediusware.com">
            <span className="sr-only">Mediusware</span>
            <img
              className="flex justify-center items-center"
              src={BrandLogo}
              alt="Mediusware Logo"
              width={160}
              height={160}
              style={{ width: "auto", height: "auto" }}
            />
          </a>
        </div>

        {/* Navigation Items */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
          <div className="hidden lg:flex xl:gap-x-8 lg:gap-x-6 lg:justify-center items-center">
            <Link to="/">
              <span className="nav-link">Home</span>
            </Link>
            <Link to="/why-mediusware">
              <span className="nav-link">Why Mediusware</span>
            </Link>
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  {item.name}
                </a>
              ) : (
                <Link to={item.href} key={item.name}>
                  <span className="nav-link">{item.name}</span>
                </Link>
              )
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

const navItems = [
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Our Team", href: "/team" },
  { name: "Academy", href: "/academy" },
  {
    name: "Careers",
    href: "https://job.mediusware.com/",
    external: true,
  },
];

// Tailwind animation class for links (you can extract this to a reusable class in your CSS file or Tailwind config)
const navLinkClass = `hover:text-[#00A88E] text-sm 2xl:text-xl font-medium uppercase relative after:content-[''] after:bg-[#00A88E] after:h-[3px] after:w-[0%] after:left-0 after:-bottom-[5px] after:rounded-xl after:absolute hover:after:w-[100%] after:duration-300`;

// Then replace `className="nav-link"` with `className={navLinkClass}` if you want cleaner control.
