import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MYSY registration",
  description: "Created by parvShah@22CE2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-gray-900">
      <body className={`${inter.className} overflow-x-hidden`}>

        <nav className=" border-gray-200 bg-gray-900 text-white">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link
              href="https://vpmp.ac.in/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <span href="" className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                VPMP Polytechnic
              </span>
            </Link>
           
            <div className=" w-full md:block md:w-auto" id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link
                    href="/"
                    className="block py-2 px-3 text-white  rounded md:bg-transparent  md:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Fresh Registration
                  </Link>
                </li>
                <li>
                  <Link
                    href="/re"
                    className="block py-2 px-3 text-white rounded  md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Renew
                  </Link>
                </li>
                 </ul>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
