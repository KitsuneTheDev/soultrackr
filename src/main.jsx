import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ModalProvider } from './context/ModalContext.jsx';
import { TaskProvider } from './context/TaskContext.jsx';
import { ViewProvider } from './context/ViewContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ModalProvider>
      <ViewProvider>
        <TaskProvider>
          <App />
        </TaskProvider>
      </ViewProvider>
    </ModalProvider>
  </StrictMode>,
)
