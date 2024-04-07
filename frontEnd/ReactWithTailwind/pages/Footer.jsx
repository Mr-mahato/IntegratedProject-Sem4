import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="flex mt-5 bg-gray-500 justify-between  p-7 "
    >
      <h1 className="text-2xl ">
        Supporting local farmers, nourishing our community.
      </h1>
      <Link to={"/"}>
        <h1 className="text-3xl ">Agroguide</h1>
      </Link>
    </footer>
  );
}
