// import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const data = [
    {
        id: 1,
        title: "hamburguesa",
        price: 900,
        pictureUrl:
            "https://loremflickr.com/300/300/art",
    },
    {
        id: 2,
        title: "pizza",
        price: 400,
        pictureUrl:
            "https://loremflickr.com/300/300/cat",
    },
    {
        id: 3,
        title: "pancho",
        price: 800,
        pictureUrl:
            "https://loremflickr.com/300/300/soccer",
    },
    {
        id: 4,
        title: "arroz",
        price: 1100,
        pictureUrl:
            "https://loremflickr.com/300/300/paris",
    },
    {
        id: 6,
        title: "pasta",
        price: 1200,
        pictureUrl:
            "https://loremflickr.com/300/300/brazil",
    },
    {
        id: 7,
        title: "hamburguesa",
        price: 900,
        pictureUrl:
            "https://loremflickr.com/300/300/boy",
    },
    {
        id: 8,
        title: "pizza",
        price: 400,
        pictureUrl:
            "https://loremflickr.com/300/200/cow",
    },
    {
        id: 9,
        title: "pancho",
        price: 800,
        pictureUrl:
            "https://loremflickr.com/300/200/car",
    },
    {
        id: 10,
        title: "arroz",
        price: 1100,
        pictureUrl:
            "https://loremflickr.com/240/300/montain",
    },
    {
        id: 11,
        title: "arroz2",
        price: 1300,
        pictureUrl:
            "https://loremflickr.com/440/200/sea",
    },
    {
        id: 12,
        title: "pasta",
        price: 1200,
        pictureUrl:
            "https://loremflickr.com/240/200/tree",
    },
    {
        id: 13,
        title: "pancho",
        price: 800,
        pictureUrl:
            "https://loremflickr.com/240/200/people",
    },
    {
        id: 14,
        title: "arroz",
        price: 1100,
        pictureUrl:
            "https://loremflickr.com/240/200/usa",
    },
    {
        id: 15,
        title: "arroz2",
        price: 1300,
        pictureUrl:
            "https://loremflickr.com/240/200/baby",
    },
    {
        id: 16,
        title: "pasta",
        price: 1200,
        pictureUrl:
            "https://loremflickr.com/240/200",
    },
    
];


function ItemListContainer() {

    return (
        <section className="bg-gray-800">
            <h2 className="text-white text-center text-4xl pb-7 pt-4">RECENT</h2>
            <div className="mx-auto px-2 sm:px-6 lg:px-8">
                <div className="flex flex-1 flex-wrap items-center justify-center">
                    <ItemList items={data} />
                </div>
            </div>
        </section>
    );
}
export default ItemListContainer;