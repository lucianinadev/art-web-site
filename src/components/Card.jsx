import "./Card.css";
import Button from "./common/Button";

export default function Card({ data }) {
  let { title, description, pictureUrl } = data;

  return (
    <div className="text-center inline-block w-full ">
      <div className=" mb-10 w-4/5 inline-block ">
          <div className="inner-skew">
            <img className="max-w-xs " src={pictureUrl} alt={title} />
          </div>
        </div>

      <div className="text-container flex flex-col ">
        <h3 className="text-gray-900 text-xl font-bold mt-2 mb-1">{title}</h3>
        <div className="text-sm mb-2">{description}</div>
        <div className="flex flex-col gap-2">
          <Button />
          <Button />
        </div>
      </div>
    </div>
  );
}
