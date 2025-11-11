import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
        rollupOptions: {
          input: {
            main: resolve(__dirname, 'index.html'),
            about: resolve(__dirname, 'about.html'),
            service: resolve(__dirname, 'service.html'),
            servicedetails: resolve(__dirname, 'service-details.html'),
            blog: resolve(__dirname, 'blog.html'),
            blogdetails: resolve(__dirname, 'blog-details.html'),
            casestudy: resolve(__dirname, 'case-study.html'),
            casestudydetails: resolve(__dirname, 'case-study-details.html'),
            contact: resolve(__dirname, 'contact.html'),
            faq: resolve(__dirname, 'faq.html'),
            privacypolici: resolve(__dirname, 'privacy-polici.html'),
            termscondition: resolve(__dirname, 'terms-condition.html'),
          },
        },
      },
})