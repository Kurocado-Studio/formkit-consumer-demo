import { MotionProvider } from '@kurocado-studio/systemhaus-motion-react';
import {
  ThemeProvider,
  defaultSystemHausThemeVariables,
} from '@kurocado-studio/systemhaus-react';
import React from 'react';
import ReactDOM from 'react-dom/client';

import '../tailwind.css';
import { Demo } from './Demo';

const rootElement = document.querySelector('#root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <ThemeProvider
        progressOptions={{
          minimumDelay: 150,
        }}
        theme={defaultSystemHausThemeVariables}
      >
        <MotionProvider>
          <main className='h-screen w-screen space-y-2 overflow-y-auto bg-gray-100 py-8'>
            <Demo />
          </main>
        </MotionProvider>
      </ThemeProvider>
    </React.StrictMode>,
  );
}
