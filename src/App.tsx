import './styles.css'
import Navi from './component/Navi'

export default function App() {
  return (
    <>
      <Navi/>
      <div className='flex justify-center min-h-screen mt-[7vh] bg-gradient-to-r from-black via-white to-black'>
        <div className='w-1/2 p-4 '>
          <h1 className="text-xl font-pre text-white z-10 opacity-100">신효환</h1>
        </div>
      </div>
    </>
  )
}
