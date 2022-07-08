import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Welcome to</span>
        <span className="headerTitleLg">Blogify</span>
      </div>
      <img
        className="headerImg"
        src="https://coolhdwall.com/storage/202103/sunrise-anime-scenery-4k-wallpaper-3840x2160.jpg"
        alt=""
      />
    </div>
  );
}
