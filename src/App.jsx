import "./App.css";

function App() {
  return (
    <>
      <div className="p-6 space-y-8">
        {/* LATIHAN 1 - NAVBAR */}
        LATIHAN 1
        <nav className="p-4 bg-gray-100 flex flex-col md:flex-row justify-between md:items-center rounded shadow-md">
          <div className="font-bold text-xl text-black mb-2 md:mb-0">MyLogo</div>
          <ul className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
            <li><a href="#" className="text-gray-700 hover:text-black transition duration-150 block">Home</a></li>
            <li><a href="#" className="text-gray-700 hover:text-black transition duration-150 block">About</a></li>
            <li><a href="#" className="text-gray-700 hover:text-black transition duration-150 block">Contact</a></li>
          </ul>
        </nav>
        
        <hr className="my-8 border-t-2 border-gray-200" />

        LATIHAN 2
        <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri 1"
            className="h-48 w-full object-cover" 
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri 2"
            className="h-48 w-full object-cover"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri 3"
            className="h-48 w-full object-cover"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri 4"
            className="h-48 w-full object-cover"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri 5"
            className="h-48 w-full object-cover"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri 6"
            className="h-48 w-full object-cover"
          />
        </div>

        {/* LATIHAN 3 - PRICING TABLE */}
        LATIHAN 3
        <div> 
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-1">
            
            <div className="bg-gray-200 p-4 text-center shadow-md">
              <div className="font-bold text-base">Basic</div>
              <div className="mt-1 text-sm font-normal">Rp 50.000</div>
            </div>
            
            <div className="bg-blue-200 p-6 text-center shadow-lg relative z-10">
              <div className="font-bold text-base">Pro</div>
              <div className="mt-1 text-sm font-normal">Rp 100.000</div>
            </div>
            
            <div className="bg-gray-200 p-4 text-center shadow-md">
              <div className="font-bold text-base">Premium</div>
              <div className="mt-1 text-sm font-normal">Rp 200.000</div>
            </div>
          </div>
        </div>
        <hr />
{/* LATIHAN 4 - DASHBOARD LAYOUT */}
        LATIHAN 4
        <div className="min-h-screen">
          <header className="bg-gray-300 p-4">Header</header>
          <aside className="bg-gray-200 p-4">Sidebar</aside>
          <main className="bg-white p-4 border">Content</main>
          <footer className="bg-gray-300 p-4">Footer</footer>
        </div>
        <hr />
        {/* LATIHAN 5 - CARD PRODUCT */}
        LATIHAN 5
        <div className="p-4 border">
          <img
            src="https://www.placehold.co/80x80"
            alt="Gambar Produk"
            className="h-20 w-20"
          />
          <div>
            <h3 className="font-bold">Nama Produk</h3>
            <p className="text-sm text-gray-600">Deskripsi produk singkat...</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
