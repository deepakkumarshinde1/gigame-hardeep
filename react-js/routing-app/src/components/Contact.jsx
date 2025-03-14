import { useBasicDetailsContext } from "../context/basic.details.context";

function Contact() {
  let data = useBasicDetailsContext();
  return <div>Contact {data.mobile}</div>;
}

export default Contact;
