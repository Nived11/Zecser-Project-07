import { LOGO_PATH, SCHOOL_NAME } from "../../utils/constants";
import { ADMIN_NAV_LINKS, SUB_ADMIN_NAV_LINKS } from "./data";
import { Link, useLocation } from "react-router-dom";
import MobileDrawer from "./MobileDrawer";
import { cn } from "../../lib/utils";

export type AdminOrSubType = "Admin Panel" | "Sub-Admin Panel";
export type AdminOrSubProps = {
  type: AdminOrSubType;
};

const Header = ({ type }: AdminOrSubProps) => {
  const { pathname } = useLocation();
  return (
    <header className="bg-primary text-white sticky top-0 left-0 z-50 w-full">
      <div className="flex items-center justify-between px-4 py-2 lg:px-12">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 flex items-center justify-center rounded">
            <img src={LOGO_PATH} className="object-cover w-full h-full" />
          </div>
          <div>
            <h1 className="text-lg font-semibold leading-tight">
              {SCHOOL_NAME}
            </h1>
            <p className="text-xs text-gray-200 uppercase tracking-wider">
              {type}
            </p>
          </div>
        </div>
        <ul className="hidden lg:flex items-center text-[14px] lg:gap-1 xl:gap-2">
          {(type === "Admin Panel" ? ADMIN_NAV_LINKS : SUB_ADMIN_NAV_LINKS).map(
            (link, idx) => {
              
              const isActive = pathname.replace('/','') === link.path.replace('/','');
              return (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className={cn(
                      "px-3 py-1 rounded hover:bg-white/10 duration-200 ease-in-out",
                      isActive ? "text-white" : "text-white/70"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            }
          )}
        </ul>

        <div className="lg:hidden">
          <MobileDrawer
            links={
              type === "Admin Panel" ? ADMIN_NAV_LINKS : SUB_ADMIN_NAV_LINKS
            }
            logo={LOGO_PATH}
            title={SCHOOL_NAME}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
