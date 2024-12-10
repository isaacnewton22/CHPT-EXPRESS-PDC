import { FaGithub, FaYoutube, FaStackOverflow } from "react-icons/fa";
import Link from "next/link";

const socialLinks = [
  {
    icon: <FaGithub />,
    path: "#",
  },
  {
    icon: <FaYoutube />,
    path: "#",
  },
  {
    icon: <FaStackOverflow />,
    path: "#",
  },
];
const Social = () => {
  return (
    <div className="flex gap-6">
      {socialLinks.map((item, index) => (
        <Link
          href={item.path}
          key={index}
          className="duration-3000 flex size-10 items-center justify-center rounded-full border-2 border-white text-white hover:bg-black hover:transition-all"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
