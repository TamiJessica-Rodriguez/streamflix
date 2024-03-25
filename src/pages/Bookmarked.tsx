import { Link } from "react-router-dom";

export default function Bookmarked() {
  return (
    <div>
      <Link to={"/PreviewPage"}>
        <button>PreviewPage</button>
      </Link>
    </div>
  );
}
