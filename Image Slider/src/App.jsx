import ImageSlider from "./components/imageSlider"
import "./components/style.css"
function App() {

const URL="https://picsum.photos/v2/list?page=4&limit=10"
  return (
    <ImageSlider  url={URL}></ImageSlider>
  )
}

export default App
