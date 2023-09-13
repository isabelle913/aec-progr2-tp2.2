import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Header = ({ isLinkVisible, category }) => {
  return (
    <div>
      <div className="d-flex flex-row align-items-center">
        <h1 className="col-9 text-start">Les recettes de Mathieu</h1>
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
          <Button variant="danger" className="mt-2">
            <Link to={"/favorite"}>
              <span className="text-white">NOUVEAUTÉ RECETTES FAVORITES</span>
            </Link>
          </Button>
        </div>
      </div>
      <hr className="hr mt-5" />
    </div>
  );
};

export default Header;
