import Header from '@/components/header'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      <div className='grid-background'></div>
      <main className='min-h-screen overflow-x-hidden"'> 
        <div className='w-full px-4 sm:px-6 lg:max-w-7xl lg:mx-auto'>
      <Header />
      <Outlet />
        </div>
      </main>
      <div className='p-10 text-center bg-gray-800 mt-10'>Thats my footer</div>
    </div>
  );
};

export default AppLayout;
