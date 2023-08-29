import Accordion from "./components/Accordion";

function App() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Radix UI</h1>
      <div className="h-4" />
      <div className="flex flex-col gap-y-4">
        <Card title="Accordion">
          <Accordion />
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
