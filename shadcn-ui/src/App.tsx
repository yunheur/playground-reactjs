import Accordion from "./components/Accordion";
import { NavigationMenuDemo } from "./components/NavigationMenuDemo";

function App() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Shadcn UI</h1>
      <div className="h-4" />
      <div className="flex flex-col gap-y-4">
        <Card title="Flex">
          <span className="bg-red-100">span</span>
          <span className="bg-red-200">span</span>
          <div className="flex">
            <span className="bg-red-100">span</span>
            <span className="bg-red-200">span</span>
            <span className="bg-red-300">span</span>
            <div className="bg-red-400">div</div>
          </div>
        </Card>
        <Card title="Accordion">
          <Accordion />
        </Card>
        <Card title="Navigation">
          <NavigationMenuDemo />
        </Card>
      </div>
    </div>
  );
}

function Card({ title, children }: React.PropsWithChildren<{ title: string }>) {
  return (
    <div className="border-[1px] border-solid border-black rounded-md">
      <div className="px-4 py-2">
        <h5 className="font-bold">{title}</h5>
      </div>
      <div className="border-t-[1px] border-solid border-black px-4 py-2">
        {children}
      </div>
    </div>
  );
}

export default App;
