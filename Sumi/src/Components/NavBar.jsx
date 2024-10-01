// NavBar.jsx

import SumiLogo from "../assets/Logo/Sumi Logo.jpg";

export default function NavBar() {
  const navLinks = [
    { name: "About", href: "/Page/Careers" }, // Updated to match the routing convention
    { name: "Careers", href: "#" },
    { name: "History", href: "#" },
    { name: "Services", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Blog", href: "#" },
  ];

  return (
    <header className="bg-gray-200">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a href="#" className="block text-teal-600">
              <span className="sr-only">Home</span>
              <img
                src={SumiLogo}
                alt="Logo"
                className="w-12 h-12 hover:scale-110 transition duration-300"
              />
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-500 transition hover:text-gray-500/75"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
