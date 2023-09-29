import MapGoogle from "./components/MapGoogle";

const App = () => {
  return (
    <>
      <header>
        <h1>Google Maps React</h1>
      </header>
      <main className="container mx-auto pt-5">
        <div className="h-[600px] w-full">
          <MapGoogle/>
        </div>
      </main>
    </>
  );
};

export default App;
