import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../public/logo.svg";
import news from "../public/news.svg";
import forum from "../public/forum.svg";
import showcase from "../public/showcase.svg";
import mobile from "../public/mobile.svg";
import hardware from "../public/hardware.svg";
import { Turn as Hamburger } from "hamburger-react";

const Header = () => {
  const [isCommunityOpen, setCommunityOpen] = useState(false);
  const [isCasesOpen, setCasesOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isCommunityH, setCommunityH] = useState(false);
  const [isConsoleH, setConsoleH] = useState(false);
  const [isDiscoveryH, setDiscoveryH] = useState(false);
  const [isDashboardH, setDashboardH] = useState(false);
  const [isCasesH, setCasesH] = useState(false);

  return (
    <>
      <header className="bg-black p-[0.9rem] text-white w-[100%] z-50 relative">
        <div className="flex items-center sm:justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src={logo}
                alt="spotify for developers logo"
                className="w-[250px] ml-[4px] pb-[5px] min-w-[250px]"
              />
            </Link>
          </div>
          <div className="pl-10 font-[200] w-[100%] ml-10 text-[14px] sm:hidden">
            <ul className="uppercase flex justify-start gap-[4rem] font-circular_light">
              <li className="hover:text-greenify hover:transition hover:ease-in-out">
                <Link
                  href="/discover"
                  onMouseEnter={() =>
                    setCommunityOpen(false) || setCasesOpen(false)
                  }
                  onClick={() =>
                    setDiscoveryH(true) ||
                    setCasesH(false) ||
                    setCommunityH(false) ||
                    setDashboardH(false) ||
                    setConsoleH(false)
                  }
                >
                  discover
                  {isDiscoveryH ? (
                    <div className="p-[2px] absolute pr-5 pl-5 bg-greenify mx-auto xs:w-fit mt-[0.15rem] w-10"></div>
                  ) : (
                    <div className="hidden"></div>
                  )}
                </Link>
              </li>
              <li className="hover:text-greenify hover:transition hover:ease-in-out">
                <Link
                  href="/console"
                  onClick={() =>
                    setDiscoveryH(false) ||
                    setCasesH(false) ||
                    setCommunityH(false) ||
                    setDashboardH(false) ||
                    setConsoleH(true)
                  }
                >
                  console
                  {isConsoleH ? (
                    <div className="p-[2px] absolute pr-5 pl-5 bg-greenify mx-auto xs:w-fit mt-[0.15rem] w-10"></div>
                  ) : (
                    <div className="hidden"></div>
                  )}
                </Link>
              </li>
              <li className=" hover:transition hover:ease-in-out hover:text-greenify z-50">
                <Link
                  href="/community/news"
                  onMouseEnter={() =>
                    setCommunityOpen(true) || setCasesOpen(false)
                  }
                  onClick={() =>
                    setDiscoveryH(false) ||
                    setCasesH(false) ||
                    setCommunityH(true) ||
                    setDashboardH(false) ||
                    setConsoleH(false)
                  }
                  className="relative"
                >
                  community
                  {isCommunityH ? (
                    <div className="p-[2px] absolute pr-5 pl-5 bg-greenify mx-auto xs:w-fit mt-[0.15rem] w-10"></div>
                  ) : (
                    <div className="hidden"></div>
                  )}
                </Link>
              </li>
              <li className="hover:text-greenify hover:transition hover:ease-in-out">
                <Link
                  href="/dashboard"
                  onMouseEnter={() =>
                    setCommunityOpen(false) || setCasesOpen(false)
                  }
                  onClick={() =>
                    setDiscoveryH(false) ||
                    setCasesH(false) ||
                    setCommunityH(false) ||
                    setDashboardH(true) ||
                    setConsoleH(false)
                  }
                  className="relative"
                >
                  dashboard
                  {isDashboardH ? (
                    <div className="p-[2px] absolute pr-5 pl-5 bg-greenify mx-auto xs:w-fit mt-[0.15rem] w-10"></div>
                  ) : (
                    <div className="hidden"></div>
                  )}
                </Link>
              </li>
              <li className="hover:text-greenify hover:transition hover:ease-in-out">
                <Link
                  href="/use-cases"
                  onMouseEnter={() =>
                    setCasesOpen(true) || setCommunityOpen(false)
                  }
                  onClick={() =>
                    setDiscoveryH(false) ||
                    setCasesH(true) ||
                    setCommunityH(false) ||
                    setDashboardH(false) ||
                    setConsoleH(false)
                  }
                  className="relative"
                >
                  use cases
                  {isCasesH ? (
                    <div className="p-[2px] absolute pr-5 pl-5 bg-greenify mx-auto xs:w-fit mt-[0.15rem] w-10"></div>
                  ) : (
                    <div className="hidden"></div>
                  )}
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <Hamburger size={25} toggled={isMenuOpen} toggle={setMenuOpen} />
          </div>
        </div>
      </header>
      {isCommunityOpen ? (
        <div
          className="bg-black_code block absolute p-10 w-[100%] font-bold z-[1] collapsed"
          onMouseLeave={() => setCommunityOpen(false)}
        >
          <ul className="flex gap-20 text-white">
            <li>
              <Link href="/community/news">
                <Image src={news} className="mb-3"></Image>
                NEWS
              </Link>
            </li>
            <li>
              <Link href="https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer">
                <Image src={forum} className="mb-3"></Image>
                FORUM
              </Link>
            </li>
            <li>
              <Link href="/community/showcase">
                <Image src={showcase} className="mb-3"></Image>
                SHOWCASE
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div
          className="absolute p-10 collapsing"
          onMouseLeave={() => setCommunityOpen(false)}
        ></div>
      )}
      {isCasesOpen ? (
        <div
          className="bg-black_code block absolute p-10 w-[100%] font-bold z-[1] collapsed"
          onMouseLeave={() => setCasesOpen(false)}
        >
          <ul className="flex gap-20 text-[14px] text-white">
            <li className="flex-col flex gap-2">
              <Link className="mb-2" href="/mobile-apps">
                <Image src={mobile} className="mb-3"></Image>
                MOBILE APPS
              </Link>
              <Link className="font-light" href="/messaging">
                Messaging
              </Link>
              <Link className="font-light" href="/connection-flow">
                Connection Flow
              </Link>
              <Link className="font-light" href="/content">
                Content
              </Link>
            </li>
            <li className="flex-col flex gap-2">
              <Link className="mb-2" href="/hardware">
                <Image src={hardware} className="mb-3"></Image>
                HARDWARE
              </Link>
              <Link className="font-light" href="/voice-integrations">
                Voice Integrations
              </Link>
              <Link className="font-light" href="/new-emerging">
                New & Emerging
              </Link>
              <Link className="font-light" href="/wearables">
                Wearables
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div
          className="absolute p-10 collapsing"
          onMouseLeave={() => setCasesOpen(false)}
        ></div>
      )}

      {isMenuOpen ? (
        <div className="md:hidden bg-black block z-[1] align-items relative collapsed w-[100%] h-[100%]">
          <nav className="text-white text-[14px] font-light bg-menu_grey uppercase relative h-auto w-full z-[100]">
            <ul>
              <li className="hover:text-greenify hover:transition hover:ease-in-out p-7 border-[1px] border-x-menu_grey border-y-dark_grey">
                <Link
                  href="/discover"
                  onClick={() => {
                    isMenuOpen(true);
                  }}
                >
                  discover
                </Link>
              </li>
              <li className="hover:text-greenify hover:transition hover:ease-in-out p-7 border-[1px] border-x-menu_grey border-b-dark_grey border-t-light_black">
                <Link
                  href="/console"
                  onClick={() => {
                    isMenuOpen(true);
                  }}
                >
                  console
                </Link>
              </li>
              <li className="hover:text-greenify hover:transition hover:ease-in-out p-7 border-[1px] border-x-menu_grey border-b-dark_grey border-t-light_black">
                <Link
                  href="/community/news"
                  onClick={() => {
                    isMenuOpen(true);
                  }}
                >
                  community
                </Link>
              </li>
              <li className="hover:text-greenify hover:transition hover:ease-in-out p-7 border-[1px] border-x-menu_grey border-y-light_black">
                <Link
                  href="/dashboard"
                  onClick={() => {
                    isMenuOpen(true);
                  }}
                >
                  dashboard
                </Link>
              </li>
              <li className="hover:text-greenify hover:transition hover:ease-in-out p-7 border-[1px] border-x-menu_grey border-t-dark_grey border-b-menu_grey">
                <Link
                  href="/use-cases"
                  onClick={() => {
                    isMenuOpen(true);
                  }}
                >
                  use cases
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <div className="md:hidden bg-menu_grey w-full collapsing-2 relative"></div>
      )}
    </>
  );
};

export default Header;
