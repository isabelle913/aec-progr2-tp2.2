import { Link } from "react-router-dom";

const Header = ({ isLinkVisible, category }) => {
  return (
    <div>
      <div className="d-flex flex-row align-items-center">
        <h1 className={isLinkVisible ? "col-9 text-start" : "col-12"}>
          Les recettes de Mathieu
        </h1>
        <div className="col-3 d-flex flex-column">
          {isLinkVisible && (
            <Link to={"/"}>
              <span>Retour aux catégorie</span>
            </Link>
          )}
          {category && (
            <Link to={`/category/${category}`}>
              <span>Retour à la catégorie {category}</span>
            </Link>
          )}
        </div>
      </div>
      <hr className="hr mt-5" />
    </div>
  );
};

export default Header;
