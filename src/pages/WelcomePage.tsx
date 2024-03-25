import React from "react";
import { Link } from "react-router-dom";

const WelcomePage: React.FC = () => {
  return (
    <div>
      <p>WelcomePage</p>
      <Link to={"/PreviewPage"}>
        <button>Länk till bildkarusell</button>
      </Link>
    </div>
  );
};

export default WelcomePage;
