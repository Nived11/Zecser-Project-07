import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import { FiMenu } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";

type NavLink = {
  label: string;
  path: string;
};

type MobileDrawerProps = {
  links: NavLink[];
  logo?: string;
  title?: string;
};
const MobileDrawer = ({ links, logo, title }: MobileDrawerProps) => {
  const { pathname } = useLocation();
  return (
    <Sheet>
      <SheetTrigger className="text-white">
        <FiMenu className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent side="left" className="bg-primary text-white w-64">
        <SheetHeader>
          <div className="flex items-center gap-3 pt-4">
            {logo && (
              <img
                src={logo}
                alt={title}
                className="h-14 w-14 rounded-full object-cover"
              />
            )}
            <span className="text-[16px] font-semibold">{title}</span>
          </div>
        </SheetHeader>
        <nav className="mt-2 px-[20px] flex flex-col gap-1">
          {links.map((link, idx) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={idx}
                to={link.path}
                className={cn(
                  "flex items-center gap-3 px-4 py-2 rounded-md transition-colors",
                  isActive
                    ? "bg-white/10 text-white font-semibold"
                    : "text-white hover:bg-white/5"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileDrawer;
