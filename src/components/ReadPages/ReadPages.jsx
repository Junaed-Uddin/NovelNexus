import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { getDataFromLocalStorage } from "../../utils/localStorage";
import { useLoaderData } from "react-router-dom";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  } 
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
    Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const ReadPages = () => {
  const bookData = useLoaderData();
  const [displayGraphData, setDisplayGraphData] = useState([]);

  useEffect(() => {
    const storedBookListId = getDataFromLocalStorage("readList");
    const bookListData = bookData.books.filter((book) =>
      storedBookListId.includes(book.bookId)
    );
    const bookNameNPages = bookListData.map((book) => {
      const data = {
        bookName: book.bookName.slice(0, 15) + "..",
        pages: book.totalPages,
      };
      return data;
    });
    setDisplayGraphData(bookNameNPages);
  }, [bookData.books]);

  return (
    <div className="max-w-6xl mx-auto mb-14">
      <h2 className="text-3xl font-semibold text-center text-blue-500 my-14">
        Read Books to Page Visual
      </h2>
      {
        displayGraphData.length? 
      <div className="flex justify-center items-center">
        <BarChart width={1000} height={450} data={displayGraphData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bookName"/>
          <YAxis dataKey="pages"/>
          <Bar
            dataKey="pages"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {displayGraphData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </div>:
      <p className="text-3xl text-red-500 text-center my-10">No data has been found in the Book list</p>
      }
    </div>
  );
};

export default ReadPages;
