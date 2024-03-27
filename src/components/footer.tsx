function Footer() {
  return (
    <div className="bg-neutral-950 text-black flex flex-col md:flex-row justify-between p-10 bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600">
      <div className="flex-1 md:mb-0"></div>
      <div className="flex justify-center flex-1 md:mb-0 sm:text-md">
        <p>Copyright 2024 ©️</p>
      </div>
      <div className="flex flex-1 text-lg md:mb-0 justify-center sm:justify-end sm:text-xl">
        <i className="bx bxl-facebook p-1"></i>
        <i className="bx bxl-instagram-alt p-1"></i>
        <i className="bx bxl-twitter p-1"></i>
        <i className="bx bxl-youtube p-1"></i>
      </div>
    </div>
  );
}

export default Footer;
