import { Link } from "react-router-dom";

const CardDetailsFooter = ({ strYoutube }) => {
  return (
    <div>
      <Link to={strYoutube} target="_blank">
        Lien Youtube
      </Link>
    </div>
  );
};

export default CardDetailsFooter;
