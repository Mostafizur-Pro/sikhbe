import logo from "@/assets/logo/logo2.png";
import footerBG from "@/assets/footer/background/bg.webp";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-main text-white relative">
      <div className="absolute inset-0">
        <Image
          src={footerBG}
          alt="Footer Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-50"
        />
      </div>
      <div className="container mx-auto relative footer">
        <aside>
          <div>
            <Image className="h-24 w-auto" src={logo} alt="Logo" />
            {/* <p className="">Providing reliable tech since 2024</p> */}
          </div>
        </aside>
        <nav>
          <h4 className="text-xl uppercase font-bold text-gray-400 pb-3">
            Office Address
          </h4>
          <div className="space-y-1 text-sm">
            <p>
              <a className="link link-hover">
                Level-4, 34, Awal Centre, Banani, Dhaka
              </a>
            </p>
            <p>
              <a className="link link-hover">Support: web@sikhbe.com</a>
            </p>
            <p>
              <a className="link link-hover">
                Helpline: 01950165017 , 01731113169
              </a>
            </p>
            <p>
              <a className="link link-hover">
                (Available : Sat - Thu, 10:00 AM to 7:00 PM)
              </a>
            </p>
          </div>
        </nav>
        <nav>
          <h4 className="text-xl uppercase font-bold text-gray-400 pb-3">
            Likes
          </h4>
          <div className="space-y-1 text-sm">
            <p>
              <a className="link link-hover">Blog</a>
            </p>
            <p>
              <a className="link link-hover">Success</a>
            </p>
            <p>
              <a className="link link-hover">About us</a>
            </p>
          </div>
        </nav>

        <nav className="hidden md:block">
          <h4 className="text-xl uppercase font-bold text-gray-400 pb-3">
            Legal
          </h4>
          <div className="space-y-1 text-sm">
            <p>
              <a className="link link-hover">Terms of use</a>
            </p>
            <p>
              <a className="link link-hover">Privacy policy</a>
            </p>
            <p>
              <a className="link link-hover">Cookie policy</a>
            </p>
            <p>
              <a className="link link-hover">Terms and Conditions</a>
            </p>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
