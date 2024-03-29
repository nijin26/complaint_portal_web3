import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ConnectWallet,
  useConnect,
  magicLink,
  useDisconnect,
  useConnectionStatus,
  useMagic,
} from "@thirdweb-dev/react";
import { toast } from "react-toastify";
import Button from "./Button";
import Modal from "./Modal";
import { useRouter } from "next/router";

const Navbar = () => {
  const [phoneNumber, setPhoneNumber] = useState("+919645116496");
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const connectWithMagic = useMagic();
  const disconnect = useDisconnect();
  const status = useConnectionStatus();

  const submitLoginMobile = async (e) => {
    e.preventDefault();
    try {
      setIsOpen(false);
      await connectWithMagic({
        apiKey: process.env.NEXT_PUBLIC_MAGIC_AUTH,
        phoneNumber: phoneNumber,
      });
      toast.success("Connection Succesfull");
      router.push("/Complainant/Edit");
    } catch (err) {
      toast.error("Connection Error. Try Again");
      console.log(err, "magic auth error");
    }
  };

  const handleDisconnect = () => {
    disconnect();
    router.push("/");
    toast.success("Disconnected");
    localStorage.setItem("userName", "");
    localStorage.setItem("stationID", "");
    localStorage.setItem("superiorID", "");
    localStorage.setItem("dmID", "");
  };

  const handleProfileRoute = () => {
    const userName = localStorage.getItem("userName");
    const stationID = localStorage.getItem("stationID");
    const superiorID = localStorage.getItem("superiorID");
    const dmID = localStorage.getItem("dmId");

    if (stationID && stationID !== "") return router.push("/Station/Profile");
    if (superiorID && superiorID !== "")
      return router.push("/Superior/Profile");
    if (dmID && dmID !== "") return router.push("/DistrictMagistrate/Profile");
    return router.push("/Complainant/Edit");
  };

  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex xs:flex-col xs:justify-center xs:items-center xs:content-center  justify-between min-h-16 py-2">
            <div className="flex">
              <div className="-my-px ml-6  xs:ml-0 flex items-center">
                <Link
                  href="/"
                  className="ml-3 xs:ml-0 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900 focus:bg-gray-100"
                >
                  Home
                </Link>
                <Link
                  href="/About"
                  className="ml-3  xs:ml-0 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900 focus:bg-gray-100"
                >
                  About
                </Link>
              </div>
            </div>
            <div>
              {status === "connected" ? (
                <div>
                  <Button
                    className="mx-2"
                    outlined={true}
                    onClick={handleProfileRoute}
                  >
                    Profile
                  </Button>
                  <Button onClick={handleDisconnect}>Disconnect</Button>
                </div>
              ) : (
                <div className="flex xs:flex-col xs:justify-center  xs:items-center xs:my-3">
                  <Button
                    className="mr-2 xs:my-2"
                    outlined
                    onClick={() => setIsOpen(true)}
                  >
                    Connect with Mobile Number
                  </Button>

                  <ConnectWallet />
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <h2 className="text-lg font-medium mb-4">Enter Mobile Number</h2>
        <form onSubmit={submitLoginMobile}>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
            placeholder="Mobile Number"
          />
          <Button onClick={submitLoginMobile} className="w-full">
            Submit
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default Navbar;
