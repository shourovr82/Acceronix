import { RouterProvider } from 'react-router-dom';
import router from './Routes/Router';

function App({ children }) {
  return (
    <div data-theme="white">
      <RouterProvider router={router}>
        {children}
      </RouterProvider>
    </div>
  );
}

export default App;
