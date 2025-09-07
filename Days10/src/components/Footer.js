const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 shadow-md mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm text-gray-400">&copy; 2025 Food Delivery App</p>
        <ul className="flex flex-row gap-4">
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-gray-200 transition duration-300"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-gray-200 transition duration-300"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-gray-200 transition duration-300"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;