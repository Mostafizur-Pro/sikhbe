const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-base-200 text-base-content">
      <div className="container mx-auto footer">
        <aside>
          <div>
            <h2 className="text-5xl font-semibold pb-3">Sikhbe</h2>
            <p className="">Providing reliable tech since 2024</p>
          </div>
        </aside>
        <nav className="">
          <h4 className="text-xl uppercase font-bold text-gray-400 pb-3">
            Office Address
          </h4>
          <div className="space-y-1 text-sm">
            <p className="">
              <a className="link link-hover">Level-4, 34, Awal Centre, Banani, Dhaka</a>
            </p>
            <p className="">
              <a className="link link-hover">Support: web@sikhbe.com</a>
            </p>
            <p className="">
              <a className="link link-hover">Helpline: 01950165017 , 01731113169</a>
            </p>
            <p className="">
              <a className="link link-hover">(Available : Sat - Thu, 10:00 AM to 7:00 PM)</a>
            </p>
          </div>
        </nav>
        <nav className="">
          <h4 className="text-xl uppercase font-bold text-gray-400 pb-3">
            Likes
          </h4>
          <div className="space-y-1 text-sm">
            <p className="">
              <a className="link link-hover">Blog</a>
            </p>
            <p className="">
              <a className="link link-hover">Success</a>
            </p>
            <p className="">
              <a className="link link-hover">About us</a>
            </p>
           
          </div>
        </nav>
       
        <nav className="hidden md:block ">
          <h4 className="text-xl uppercase font-bold text-gray-400 pb-3">
            Legal
          </h4>

          <div className="space-y-1 text-sm">
            <p className="">
              <a className="link link-hover">Terms of use</a>{" "}
            </p>
            <p className="">
              <a className="link link-hover">Privacy policy</a>{" "}
            </p>
            <p className="">
              <a className="link link-hover">Cookie policy</a>{" "}
            </p>
            <p className="">
              <a className="link link-hover">Terms and Conditions</a>{" "}
            </p>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
