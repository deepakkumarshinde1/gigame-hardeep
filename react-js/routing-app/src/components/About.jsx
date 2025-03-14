import { useBasicDetailsContext } from "../context/basic.details.context";

function About() {
  let data = useBasicDetailsContext();
  console.log(data);
  return <div>About {data.mobile}</div>;
}

export default About;
