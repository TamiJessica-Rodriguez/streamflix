import React from "react";
import { Link } from "react-router-dom";

const InfoPage: React.FC = () => {
  return (
    <div>
      <Link to={"/PreviewPage"}>
        <button>PreviewPage</button>
      </Link>
    </div>
  );
};

export default InfoPage;
