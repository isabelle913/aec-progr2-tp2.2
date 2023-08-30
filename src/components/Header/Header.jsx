import { Link } from "react-router-dom";

const Header = ({ isLinkVisible }) => {
  console.log("isLinkVisible", isLinkVisible);

  return (
    <div>
      <div className="d-flex flex-row align-items-center">
        <h1 className={isLinkVisible ? "col-10 text-start" : "col-12"}>
          Les recettes de Mathieu
        </h1>
        {isLinkVisible && (
          <Link to={"/"} className="col-2">
            <span className="header-link">Retour aux catégorie</span>
          </Link>
        )}
      </div>
      <hr className="hr mt-5" />
    </div>
  );
};

export default Header;
