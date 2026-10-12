🛒 FreshCart — E-Commerce ApplicationITI Graduation Project | React.js Frontend Application📑 Table of Contents✨ Key Features📊 Application Architecture & Flow🖼️ Application Screenshots⚙️ Prerequisites & Tech Stack🚀 Quick Start & Installation Guide📁 Project Folder Structure👥 Authors & Acknowledgments✨ Key Features🛒 Product Showcase & Recommendation: Dynamic rendering of products with real-time search filtering.🏷️ Brands Explorer: Filter products by top brands (Dell, Canon, Sony, Lenovo, OPPO, etc.).🔍 Product Detail View: Interactive image gallery using Swiper.js, detailed specifications, and ratings.📱 Fully Responsive Design: Mobile-first UI using Bootstrap and FontAwesome icons.⚡ Fast Navigation: Client-side single-page routing powered by react-router-dom.📊 Application Architecture & Flowflowchart TD
    A[User Opens App] --> B[Home / Products Page]
    B --> C{User Action}
    
    C -->|Search Product| D[Filter Products List by Name]
    C -->|Click Brand| E[Open Brand Modal / View Brand Products]
    C -->|Click Product Card| F[Navigate to Product Details Page]
    
    F --> G[Display Product Images Swiper]
    F --> H[Add Product to Shopping Cart]
    
    E --> B
    D --> B
🖼️ Application Screenshots🏠 Home & Popular Products(Hero slider and recommended products grid)🔍 Product Details View(Single product page with Swiper gallery and add-to-cart option)🏢 Brands Directory(Grid display of all partner brands)💡 Note: You can place your exported screenshots into an assets/ or screenshots/ directory inside the repository and reference them in this section.⚙️ Prerequisites & Tech StackEnsure you have the following installed before running the project:Node.js: v18.x or highernpm: v9.x or higherCategoryTechnologyFrontend FrameworkReact.js (Vite)RoutingReact Router DOM (v6)Styling & UIBootstrap 5, Custom CSSIconsFontAwesome FreeHTTP ClientAxiosSliders & CarouselSwiper.js🚀 Quick Start & Installation GuideFollow these steps to set up and run FreshCart locally on your machine:1. Clone the Repositorygit clone https://github.com/Joseph-Mohamed/Freshcart-Graduation_Project_ITI-.git
cd Freshcart-Graduation_Project_ITI-/Freshcart
2. Install Project DependenciesRun the command below to install all required packages (react-router-dom, bootstrap, axios, swiper, @fortawesome/fontawesome-free):npm install
3. Run Development ServerStart the Vite local development server:npm run dev
Open your browser and navigate to http://localhost:5173 (or the port specified in your console output).📁 Project Folder StructureFreshcart/
├── public/
├── src/
│   ├── assets/          # Static images and icons
│   ├── components/      # Reusable UI components (Navbar, Footer, ProductCard, etc.)
│   ├── services/        # API configuration & Axios calls
│   ├── App.jsx          # Route definitions & main app wrapper
│   ├── App.css          # Global application styles
│   ├── main.jsx         # Entry point importing Bootstrap & FontAwesome
│   └── index.css        # Base styles
├── index.html
├── package.json
└── vite.config.js
👥 Authors & AcknowledgmentsDeveloper: Joseph MohamedTrack: ITI React Summer Camp Graduation ProjectSpecial Thanks: Information Technology Institute (ITI) Instructors & Mentors.
