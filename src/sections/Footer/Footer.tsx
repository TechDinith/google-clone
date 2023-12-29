import { linkGroups } from "./footer.constant";

const Footer = () => {
  return (
    <>
      <div className="flex border-b-2 border-zinc-800 items-center h-1/2">
        <p className="text-sm pl-8">Country</p>
      </div>

      <div className="text-sm py-2 px-10 items-center flex justify-between gap-24">
        {linkGroups.map((group, index) => (
          <div key={index} className="flex gap-6">
            {group.map((link, linkIndex) => (
              <a key={linkIndex} href="#">
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Footer;
