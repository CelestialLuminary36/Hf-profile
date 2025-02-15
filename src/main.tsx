import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux'; // 导入 Provider
import { createRoot } from 'react-dom/client'
import './index.css'
import MainRoute from './routes/router';
import store from './store/storatge'

const { router } = MainRoute();

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
