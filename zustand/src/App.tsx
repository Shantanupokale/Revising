import { create } from 'zustand'
import './App.css'
import { Button } from './components/ui/button';

interface Store {
  count: number,
  inc: () => void,
  dec: () => void,
}

const useStore = create<Store>((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 }))
}));

function App() {
  const { count, inc, dec } = useStore();

  return (
    <div className="flex items-center justify-center h-screen bg-blue-400">
      <div className="flex gap-4 items-center">
        <Button onClick={inc} className="bg-green-500">+</Button>
        {count < 0 && <>
        Count can be go below zero
        </>}
        <span className="text-2xl font-bold">{count}</span>
        <Button onClick={dec} className="bg-red-500">-</Button>
      </div>
    </div>
  )
}

export default App;
