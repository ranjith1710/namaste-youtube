import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="p-8 w-48 text-sm">
      <ul>
        <Link to="/">
          <li className="pb-2">Home</li>
        </Link>
        <li className="pb-2">Shorts</li>
        <li className="pb-2">Live</li>
      </ul>
      <h1 className="font-bold pt-5 pb-2">Subscription</h1>
      <ul>
        <li className="pb-2">Gaming</li>
        <li className="pb-2">Sports</li>
        <li className="pb-2">News</li>
        <li className="pb-2">Learning</li>
      </ul>
      <h1 className="font-bold pt-5 pb-2">Watch Later</h1>
      <ul>
        <li className="pb-2">Gaming</li>
        <li className="pb-2">Sports</li>
        <li className="pb-2">News</li>
        <li className="pb-2">Learning</li>
      </ul>
    </div>
  );
};

export default Sidebar;
