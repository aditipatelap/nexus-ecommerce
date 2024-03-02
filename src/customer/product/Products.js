import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../context/DataContext';

const Products = ({ headerHeight }) => {
  const { products } = useContext(DataContext);
  const basePath = process.env.PUBLIC_URL + "/images/photo/products";
  console.log(products);

  const productsList = [
    {id: 1, src: basePath + "/product.png", title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores facilis sed fuga, iusto consequatur eius voluptate error?", price: 1000, discount: 20},
    {id: 2, src: basePath + "/product.png", title: "Lorem ipsum dolor, sit amet consectetur", price: 1000, discount: 20},
    {id: 3, src: basePath + "/product.png", title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores facilis sed fuga, iusto consequatur eius voluptate error?", price: 1000, discount: 20},
    {id: 4, src: basePath + "/product.png", title: "Lorem ipsum dolor, sit amet consectetur", price: 1000, discount: 20},
    {id: 5, src: basePath + "/product.png", title: "Lorem ipsum dolor, sit amet consectetur", price: 1000, discount: 20},
    {id: 6, src: basePath + "/product.png", title: "Lorem ipsum dolor, sit amet consectetur", price: 1000, discount: 20},
    {id: 7, src: basePath + "/product.png", title: "Lorem ipsum dolor, sit amet consectetur", price: 1000, discount: 20},
    {id: 8, src: basePath + "/product.png", title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores facilis sed fuga, iusto consequatur eius voluptate error?", price: 1000, discount: 20},
    {id: 9, src: basePath + "/product.png", title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores facilis sed fuga, iusto consequatur eius voluptate error?", price: 1000, discount: 20},
    {id: 10, src: basePath + "/product.png", title: "Lorem ipsum dolor, sit amet consectetur", price: 1000, discount: 20},
    {id: 11, src: basePath + "/product.png", title: "Lorem ipsum dolor, sit amet consectetur", price: 1000, discount: 20},
    {id: 12, src: basePath + "/product.png", title: "Lorem ipsum dolor, sit amet consectetur", price: 1000, discount: 20},
    {id: 13, src: basePath + "/product.png", title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores facilis sed fuga, iusto consequatur eius voluptate error?", price: 1000, discount: 20},
    {id: 14, src: basePath + "/product.png", title: "Lorem ipsum dolor, sit amet consectetur", price: 1000, discount: 20},
  ];

  return (
    <div className="w-full font-poppins px-6" style={{marginTop: `${headerHeight}px`}}>
      <p className="pt-5 sm:py-3 xs:py-3 md:text-sm sm:text-sm xs:text-xs">
        <Link to="/" className='hover:underline'>Home </Link>
        &gt; 
        <Link to="/home/products" className='hover:underline'> Products</Link> 
      </p>

      {/* Items list */}
      <div className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-5 mt-5 mb-10">
        {productsList.map((product) => (
            <a href="#" key={product.id} >
                <div className="h-full bg-white border-2 border-gray-400 rounded-xl p-2 pt-4 shadow-lg flex flex-col item-hover">
                    {/* add image */}
                    <div className="h-48 md:h-40 sm:h-36 xs:h-28 flex justify-start">
                        <img src={product.src} alt="product" className="h-full w-full object-contain"/>
                    </div>
                    {/* price details */}
                    <div className="flex mt-4 px-2 items-end space-x-1 flex-wrap">
                        <p className="font-poppins text-3xl md:text-2xl sm:text-xl xs:text-xl font-semibold text-sky-900">${product.price - (product.price * product.discount / 100)}</p>
                        <p className="font-poppins line-through text-gray-500">${product.price}</p>
                        <p className="font-poppins text-xl md:text-lg sm:text-base xs:text-base font-bold text-green-600">{product.discount}%</p>
                    </div>
                    {/* image title */}
                    <h2 className="font-poppins md:text-sm sm:text-sm xs:text-sm font-semibold mt-2 text-wrap px-2 ">
                        {product.title.length > 60 ? product.title.slice(0, 60) + '...' : product.title}
                    </h2>
                </div>
            </a>
        ))}
      </div>

    </div>
  );
};

export default Products;