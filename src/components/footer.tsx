/* eslint-disable tailwindcss/no-custom-classname */
function Footer() {
  return (
    <div className="flex flex-col justify-between bg-neutral-950 bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600 p-6 text-black md:flex-row">
      <div className="flex-1 md:mb-0"></div>
      <div className="sm: mb-0 flex flex-1 justify-center text-sm ">
        <p>Copyright 2024 ©️</p>
      </div>
      <div className="flex flex-1 justify-center text-lg sm:justify-end sm:text-xl md:mb-0">
        <i className="bx bxl-facebook p-1"></i>
        <i className="bx bxl-instagram-alt p-1"></i>
        <i className="bx bxl-twitter p-1"></i>
        <i className="bx bxl-youtube p-1"></i>
      </div>
    </div>
  );
}

export default Footer;
