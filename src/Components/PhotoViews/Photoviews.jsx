import { useState, useEffect } from "react";
import PhotoCard from "../PhotoViewaCard/PhotoCard";

const Photoviews = () => {
  const [photosData, setPhotosData] = useState([]); // প্রাথমিক মান `[]`
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data on component mount
  useEffect(() => {
    fetch("https://mhrhabib2004.github.io/photo_data/products.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setPhotosData(data); // ডেটা সেট করা
        setLoading(false); // লোডিং বন্ধ করা
      })
      .catch((error) => {
        setError(error.message); // এরর সেট করা
        setLoading(false); // লোডিং বন্ধ করা
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // লোডিং দেখানো
  }

  if (error) {
    return <div>Error: {error}</div>; // এরর দেখানো
  }

  return (
    <div>
      <h1>Photo Views</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-5 md:gap-4 gap-3">
        {photosData.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} /> // PhotoCard রেন্ডার করা
        ))}
      </div>
    </div>
  );
};

export default Photoviews;
