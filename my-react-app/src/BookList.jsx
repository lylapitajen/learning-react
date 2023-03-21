import img1 from "./img/img-1.jpg";
import img2 from "./img/img-2.jpg";
import img3 from "./img/img-3.jpg";
const books = [
  {
    author: "Sally Page",
    title: "The Keeper of Stories",
    img: img1,
    id: 1,
  },
  {
    author: "Nathan Anthony",
    title: "Bored of Lunch: The Healthy Air Fryer Book",
    img: img2,
    id: 2,
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: img3,
    id: 3,
  },
];
const Book = (props) => {
  const { img, title, author, getBook, id, number } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button
        onClick={() => {
          getBook(id);
        }}
      >
        Display Title
      </button>
      <h4>{author}</h4>
      <span className="number">{`#${number + 1}`}</span>
    </article>
  );
};

const BookList = () => {
  const getBook = (id) => {
    const correctBook = books.find((book) => book.id === id);
    console.log(correctBook);
  };
  return (
    <section className="booklist">
      <EventExample />
      {books.map((book, i) => {
        return <Book {...book} key={book.id} getBook={getBook} number={i} />;
      })}
    </section>
  );
};

const EventExample = () => {
  const handleFormInput = (e) => {
    console.log(e);
    console.log("Handle form input");
  };
  const handleButtonInput = () => {
    alert("Handle form input");
  };
  const handleSubmit = () => {
    console.log("form submitted");
  };
  return (
    <section>
      <form>
        <h2>Typical form</h2>
        <input type="text" name="example" onChange={handleFormInput}></input>
      </form>
      <button type="submit" onClick={handleSubmit}>
        Click me
      </button>
    </section>
  );
};

export default BookList;
