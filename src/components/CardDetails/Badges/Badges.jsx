import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const Badges = ({ tags }) => {
  const tagsArr = tags.split(",");
  const tagsUnique = [];

  tagsArr.forEach((tag) => {
    if (!tagsUnique.includes(tag)) {
      tagsUnique.push(tag);
    }
  });

  const colors = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
  ];

  //console.log("tagsUnique", tagsUnique);
  return (
    <div>
      <Stack direction="horizontal" gap={2}>
        {tagsArr &&
          tagsUnique.map((tag) => (
            <Badge bg={colors[randomNumber(1, 6) - 1]} key={tag}>
              {tag}
            </Badge>
          ))}
      </Stack>
    </div>
  );
};

export default Badges;
