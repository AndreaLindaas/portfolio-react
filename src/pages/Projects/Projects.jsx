import "./Projects.scss";
import { useEffect, useState } from "react";
import { IMAGE_BASE_URL, PROJECTS_URL } from "../../lib/constants";
import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
export default function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch(PROJECTS_URL)
      .then((response) => response.json())
      .then((result) => {
        setProjects(result.result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const createImageUrl = (imageUrl) => {
    const fixUrl = imageUrl.replace("image-", "").replace("-jpg", ".jpg");
    return IMAGE_BASE_URL + fixUrl;
  };

  const renderProjects = () => {
    return projects.map((project) => {
      return (
        <>
          <Link to={`/prosjekter/${project._id}`}>
            <Card sx={{ maxWidth: 345 }} className="card">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={createImageUrl(project.images[0].asset._ref)}
                  alt="image of project"
                />
                <CardContent className="cardContent">
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </>
      );
    });
  };
  return (
    <>
      <h1>Mine Prosjekter</h1>
      <div className="cardContainer">{renderProjects()}</div>
    </>
  );
}
