import useFetch from "./custom";

function App() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => {
          return (
            <p key={item.id}>
              {" "}
              {item.id} : {item.title}
            </p>
          );
        })}
    </>
  );
}
export default App;
