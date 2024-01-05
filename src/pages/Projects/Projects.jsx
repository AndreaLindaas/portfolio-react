import "./Projects.scss";
import { useEffect, useState } from "react";
import { PROJECTS_URL } from "../../lib/constants";
import { createImageUrl } from "../../lib/utils";
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
      <h1 className="myProjects">Mine Prosjekter</h1>
      <div className="cardContainer">{renderProjects()}</div>
    </>
  );
}
