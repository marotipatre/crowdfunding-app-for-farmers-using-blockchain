import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 lg:w-1/4">
            <h5 className="text-white uppercase mb-4 font-medium">Contact Us</h5>
            <ul className="list-none">
              <li className="mb-2">
                <a href="mailto:info@farmoney.com" className="text-gray-400 hover:text-white">info@farmoney.com</a>
              </li>
              <li className="mb-2">
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white">+91 9112169751</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="text-gray-400 hover:text-white">Team</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4">
            <h5 className="text-white uppercase mb-4 font-medium">Feedback</h5>
            <ul className="list-none">
              <li className="mb-2">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeYO3NSdbtCtd-JjnVpHsaoR9HtXWry0givKAUJY--A-Lu4yQ/viewform?usp=sf_link" target="_blank" className="text-gray-400 hover:text-white">Submit Feedback</a>
              </li>
              <li className="mb-2">
                <a href="/faq" className="text-gray-400 hover:text-white">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4">
            <h5 className="text-white uppercase mb-4 font-medium">Farmoney</h5>
            <ul className="list-none">
              <li className="mb-2">
                <a href="/terms" className="text-gray-400 hover:text-white">Terms of Service</a>
              </li>
              <li className="mb-2">
                <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
              </li>
             
            </ul>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4">
            <h5 className="text-white uppercase mb-4 font-medium">Copyright</h5>
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Farmoney. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
