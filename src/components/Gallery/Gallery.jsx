import g1 from "../../../image/gallery/g1.jpg";
import g2 from "../../../image/gallery/g2.jpg";
import g3 from "../../../image/gallery/g3.jpg";
import g4 from "../../../image/gallery/g4.jpg";
import g5 from "../../../image/gallery/g5.jpg";
import g6 from "../../../image/gallery/g6.jpg";
import g7 from "../../../image/gallery/g7.png";
import g8 from "../../../image/gallery/g8.jpg";
import g9 from "../../../image/gallery/g9.jpg";
import g10 from "../../../image/gallery/g10.jpg";

const Gallery = () => {
  const images = [
    {
      id: 1,
      img: g9,
      class: `w-full h-full col-span-2 row-span-2 rounded-2xl shadow-sm min-h-96 md:col-start-3 md:row-start-1 aspect-square`,
    },
    {
      id: 2,
      img: g1,
      class: `w-full h-full rounded-2xl shadow-sm min-h-48 aspect-square`,
    },
    {
      id: 3,
      img: g2,
      class: `w-full h-full rounded-2xl shadow-sm min-h-48 aspect-square`,
    },
    {
      id: 4,
      img: g3,
      class: `w-full h-full rounded-2xl shadow-sm min-h-48 aspect-square`,
    },
    {
      id: 5,
      img: g4,
      class: `w-full h-full rounded-2xl shadow-sm min-h-48 aspect-square`,
    },
    {
      id: 6,
      img: g5,
      class: `w-full h-full rounded-2xl shadow-sm min-h-48 aspect-square`,
    },
    {
      id: 7,
      img: g6,
      class: `w-full h-full rounded-2xl shadow-sm min-h-48 aspect-square`,
    },
    {
      id: 8,
      img: g7,
      class: `w-full h-full rounded-2xl shadow-sm min-h-48 aspect-square`,
    },
    {
      id: 9,
      img: g8,
      class: `w-full h-full rounded-2xl shadow-sm min-h-48 dark:bg-gray-500 aspect-square`,
    },
    {
      id: 10,
      img: g10,
      class: `w-full h-full col-span-2 row-span-2 rounded-2xl shadow-sm min-h-96 md:col-start-1 md:row-start-3 aspect-square`,
    },
  ];

  return (
    <div className="max-w-[1170px] mx-auto">
      <h2 className="text-4xl font-mono text-center font-semibold">
        Our Gallery
      </h2>
      <section className="py-6">
        <div className="container-fluid sm:container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          {images.map((image, idx) => (
            <img
              key={idx}
              src={image.img}
              className={`${image.class} scale-100 hover:scale-110 transition duration-700 ease-in-out  object-cover object-top bg-gray-500`}
            ></img>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
