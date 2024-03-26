function Footer() {
  return (
    <div className="bg-neutral-950 text-white flex flex-col md:flex-row justify-between p-10">
      <div className="flex-1 md:mb-0"></div>
      <div className="flex justify-center flex-1 md:mb-0 sm:text-md">
        <p>Copyright 2024 ©️</p>
      </div>
      <div className="flex flex-1 text-lg md:mb-0 justify-center sm:justify-end sm:text-3xl">
        <i className="bx bxl-facebook"></i>
        <i className="bx bxl-instagram-alt"></i>
        <i className="bx bxl-twitter"></i>
        <i className="bx bxl-youtube"></i>
      </div>
    </div>
  );
}

export default Footer;
