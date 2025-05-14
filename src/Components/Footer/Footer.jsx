import { Facebook, Instagram, Twitter, TwitterIcon } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-black text-white/80 py-8 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company */}
          <div>
            <h3 className="text-white text-sm font-medium mb-4">Company</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="hover:text-white">
                  Who Are We?
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white text-sm font-medium mb-4">Social</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="flex items-center hover:text-white">
                  <Facebook size={12} className="mr-2" />
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-white">
                  <Instagram size={12} className="mr-2" />
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-white">
                  <Twitter size={12} className="mr-2" />X (Twitter)
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-white">
                  <TwitterIcon size={12} className="mr-2" />
                  TikTok
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white text-sm font-medium mb-4">Support</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="hover:text-white">
                  Help Centre
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Work With Us */}
          <div>
            <h3 className="text-white text-sm font-medium mb-4">Work With Us</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="hover:text-white">
                  Become A Partner
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Affiliate Program
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="pt-4 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs">
          <div className="mb-4 md:mb-0">
            <p>Copyright 2025, GenPay. All Rights Reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
