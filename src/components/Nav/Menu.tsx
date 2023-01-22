import { FC, useEffect, useState } from "react";
import { useSpring as useSpringWeb, animated as a } from "@react-spring/web";
import { TbApps } from "react-icons/tb";
import { BiNews } from "react-icons/bi";
import { MdPerson } from 'react-icons/md'

const Menu: FC = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleMenubarWidth = (width: number) => {
    if (width <= 500) {
      return 150;
    } else {
      return 200;
    }
  };

  useEffect(() => {
    const windowResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", windowResize);
    return () => window.removeEventListener("resize", windowResize);
  });

  const props: any = useSpringWeb({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <div>
      <a.section className="nav-container" style={props}>
        x priori
      </a.section>
      <div
        className="menubar"
        style={{
          marginLeft: width - (width <= 500 ? 170 : 250),
          width: handleMenubarWidth(width),
        }}
      >
        <a.div className="nav-menu block">
          <BiNews size={22} />
        </a.div>
        <a.div className="nav-menu apps">
          <TbApps size={22} />
        </a.div>
        <a.div className="nav-menu block">
          <MdPerson size={22} />
        </a.div>
      </div>
    </div>
  );
};
export default Menu;
