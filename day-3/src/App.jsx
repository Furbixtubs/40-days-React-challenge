import "./App.css";
import Hero from "./components/hero";

export default function App() {
  return (
    <main className="flex gap-6 p-6">
      <Hero
        header="Hello from Furbix Tubs"
        paragraph="I am a Frontend Developer learning React and Vite"
        button="Click me!"
        bg="#dbeafe"
      />
      <Hero
        header="Hello from Speedy King"
        paragraph="I am a Backend Developer learning Java"
        button="Click me!"
        bg="#dcfce7"
      />
      <Hero
        header="Hi I'm Favour"
        paragraph="I am a UI/UX designer"
        button="Click me!"
        bg="#f3e8ff"
      />
    </main>
  );
}
