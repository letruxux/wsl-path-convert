import { useState } from "react";
import toast from "react-hot-toast";

function convert(p: string) {
  const q = p.includes(" ") ? '"' : "";
  return (
    q +
    p
      .replace(/\\/g, "/")
      .replace(/"/g, "")
      .replace(/^([A-Za-z]):/, "/mnt/$1")
      .toLowerCase()
      .replace(/\/+/g, "/") +
    q
  );
}

function App() {
  const [path, setPath] = useState("");

  return (
    <div className="bg-gray-900">
      <main className="flex flex-col items-center justify-center min-h-screen w-full max-w-4xl mx-auto p-4">
        <textarea
          name="path"
          id="path"
          value={path}
          placeholder="Enter path here..."
          className="border-blue-400 border-1 resize-none w-full h-48 p-4 border rounded bg-gray-800 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setPath(e.target.value)}
        />
        <textarea
          value={convert(path)}
          className="border-orange-400 border-1 resize-none w-full h-48 p-4 border rounded bg-gray-800 text-gray-100 mt-4 cursor-pointer"
          readOnly
          onClick={(e) => {
            navigator.clipboard.writeText(e.currentTarget.value);
            toast.success("Copied to clipboard");
          }}
        />
      </main>
    </div>
  );
}

export default App;
