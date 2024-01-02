import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function Project() {
  const [project, setProject] = useState({});
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
        console.log(result.result);
      });
  }, []);
  return <div>{project.title}</div>;
}
