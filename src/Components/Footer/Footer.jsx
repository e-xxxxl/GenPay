import logo from '../../assets/images/genpayfooter.png'
import { Facebook, Instagram, Twitter, TwitterIcon as TikTok } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-[#e5ff00] text-black py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <img src={logo || "/placeholder.svg"} alt="GenPay Logo" className="h-36" />
          </div>

          
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How GenPay Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold mb-4">Socials</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-center hover:underline">
                  <Facebook size={16} className="mr-2" />
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:underline">
                  <Instagram size={16} className="mr-2" />
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:underline">
                  <Twitter size={16} className="mr-2" />
                  Twitter (X)
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:underline">
                  <TikTok size={16} className="mr-2" />
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="pt-4 border-t border-black/20 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">copyright © 2025. GenPay Technologies. All Rights Reserved</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-sm hover:underline">
              Terms & Conditions
            </a>
            <a href="#" className="text-sm hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="text-sm hover:underline">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
