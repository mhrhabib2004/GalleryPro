

const Banner = () => {
    return (
        <div>
            <div className="grid lg:grid-cols-2 gap-3 mt-2">
  <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
    <figure className="relative w-full h-60">
      <img 
        className="w-full h-full absolute top-0 start-0 object-cover rounded-xl" 
        src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
        alt="Image Description" 
      />
    </figure>
    <figure className="relative w-full h-60">
      <img 
        className="w-full h-full absolute top-0 start-0 object-cover rounded-xl" 
        src="https://images.unsplash.com/photo-1671726203638-83742a2721a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
        alt="Image Description" 
      />
    </figure>
  </div>
  <figure className="relative w-full h-72 sm:h-96 lg:h-full">
    <img 
      className="w-full h-full absolute top-0 start-0 object-cover rounded-xl" 
      src="https://images.unsplash.com/photo-1671726203394-491c8b574a0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80" 
      alt="Image Description" 
    />
  </figure>
</div>

        </div>
    );
};

export default Banner;