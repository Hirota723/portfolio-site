import { menuItems } from "@/constants/menuItems";
import NavLink from "@/types/navLinks";

const NavLinks = ({ onClick, className }: NavLink) => {
  return (
    <>
      {menuItems.map((item) => (
        <a
          key={item.id}
          className={`cursor-pointer text-muted-foreground hover:text-primary transition-colors ${className}`}
          onClick={() => {
            document
              .querySelector(item.id)
              ?.scrollIntoView({ behavior: "smooth" });
            if (onClick) onClick();
          }}
        >
          {item.label}
        </a>
      ))}
    </>
  );
};

export default NavLinks;
