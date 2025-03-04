import { createRoot } from 'react-dom/client'

// import App from './components/App.tsx'

import router from './router.tsx'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

document.addEventListener('DOMContentLoaded', () => {
  const queryClient = new QueryClient()
  createRoot(document.getElementById('app') as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
      ,
      <RouterProvider router={router} />,
    </QueryClientProvider>,
  )
})
