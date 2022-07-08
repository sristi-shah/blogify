import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://www.cheatsheet.com/wp-content/uploads/2022/06/Spy-x-Family-Episode-10-Recap.jpg"
          alt="" height="200px" width="270px"
        />
        <p>
          This blog website is developed by Sristi Shah who is under-graduate (sophomore) in IIIT-Allahabad.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <a href="https://www.facebook.com/sristi.shah.923" className="sidebarIcon fab fa-facebook-square" ></a>
          <a href="https://www.linkedin.com/in/sristi-shah-321a1822b/" className="sidebarIcon fab fa-linkedin"></a>
          <a href="https://www.instagram.com/sristi_shah1/" className="sidebarIcon fab fa-instagram-square"></a>
        </div>
      </div>
    </div>
  );
}
