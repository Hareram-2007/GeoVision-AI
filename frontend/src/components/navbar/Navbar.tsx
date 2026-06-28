import { NavLink } from "react-router-dom";

function Navbar() {
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Analysis", path: "/analysis" },
    { label: "Dashboard", path: "/dashboard" },
    { label: "About", path: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 text-2xl font-bold tracking-tight"
        >
          <span className="text-3xl">🌍</span>
          <span className="text-slate-900">
            GeoVision <span className="text-blue-600">AI</span>
          </span>
        </NavLink>

        {/* Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative font-medium transition duration-200 ${
                    isActive
                      ? "text-blue-600"
                      : "text-slate-600 hover:text-blue-600"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">

          <button
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
          >
            Sign Up
          </button>

          <button
            className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700"
          >
            Login
          </button>

        </div>

      </nav>
    </header>
  );
}

export default Navbar;