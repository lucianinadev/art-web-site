import "./Item.css";

function Item({ item }) {
    let {pictureUrl } = item;
    return (
        <div className="overflow-hidden">
            <div className="hover:scale-125 ease-in-out duration-300 ">
                <img src={pictureUrl} alt="" width={400} />
            </div>
        </div>
    );
}

export default Item;