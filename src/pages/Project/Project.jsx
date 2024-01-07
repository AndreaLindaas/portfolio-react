import "./Project.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { createImageUrl } from "../../lib/utils";
export default function Project() {
  const [project, setProject] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const projectUrl = () => {
    return (
      "https://b7ficnxh.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22post%22%20%26%26%20_id%3D%3D%22" +
      params.id +
      "%22%5D%5B0%5D"
    );
  };
  useEffect(() => {
    fetch(projectUrl())
      .then((response) => response.json())
      .then((result) => {
        setProject(result.result);
        setIsLoading(false);
      });
  }, []);
  const schoolOrFreelance = () => {
    if (project.isSchoolProject == true) {
      return <p className="bold">Skoleprosjekt</p>;
    } else {
      return <p className="bold">Freelance</p>;
    }
  };
  const renderImages = () => {
    if (project.images && project.images.length > 0) {
      return project.images.map((image, i) => {
        return (
          <img
            src={createImageUrl(image.asset._ref)}
            alt=""
            key={i}
            className="projectImage"
          />
        );
      });
    }
  };
  if (isLoading) {
    return (
      <div className="spinner">
        <CircularProgress />
      </div>
    );
  }
  return (
    <div className="container">
      <h1>{project.title}</h1>
      <div className="schoolOrFreelance">
        <p className="bold">Lansert {project.releaseDate}</p>
        <p className="bold">|</p>
        {schoolOrFreelance()}
      </div>
      <h2>Beskrivelse</h2>
      <p>{project.description}</p>
      <h2>Teknisk beskrivelse</h2>
      <p>{project.technicalDescription}</p>
      <div className="buttons">
        {project.productionUrl && (
          <Link to={project.productionUrl} target="_blank">
            <Button variant="contained" className="button">
              Besøk
            </Button>
          </Link>
        )}
        {project.githubUrl && (
          <Link to={project.githubUrl} target="_blank">
            <Button variant="contained" className="button">
              GitHub
            </Button>
          </Link>
        )}
      </div>
      <div>{renderImages()}</div>
    </div>
  );
}
