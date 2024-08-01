import MyProvider from "./context/theme";
import Button from "./components/button";
import Card from "./components/card";
function App() {
  return (
    <MyProvider >
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Button></Button>
          </div>
          <div className="w-full max-w-sm mx-auto"><Card></Card></div>
        </div>
      </div>
    </MyProvider>
  );
}

export default App;
