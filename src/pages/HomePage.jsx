import Timer from "../components/Timer";
import Quote from "../components/Quote";

function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Timer />
      <Quote />
    </div>
  );
}

export default HomePage;
