import Model from "../Model/Model";

const PhotoCard = ({photo}) => {

  const {  image, name, price, category,rating,description} = photo;
    return (
        <a
  className="p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
  href="#"
>
  <img
    src={image}
    className="shadow rounded-lg overflow-hidden border h-48"
    alt="Exercise"
  />
  <div className="mt-8">
    <h4 className="font-bold text-xl">{name}</h4>
    <p className="mt-2 text-gray-600">Category : {category}
    </p>
    <p className="mt-2 text-gray-600">Price : {price} $
    </p>
    <div className="mt-5">
      <button onClick={()=>document.getElementById('my_modal_3').showModal()}
        type="button"
        href="/"
        className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900"
      >
        View Details
      </button>

      {/* You can open the modal using document.getElementById('ID').showModal() method */}
<dialog id="my_modal_3" className="modal">
<Model/>
</dialog>
    </div>
  </div>
</a>

    );
};

export default PhotoCard;