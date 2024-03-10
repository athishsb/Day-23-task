import { useState } from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';


function App() {
  let [cart,setCart]=useState(0);
  let data=[ {
    sale: false,
    name: 'Mens Jacket',
    image: 'https://www.beyoung.in/api/cache/catalog/products/new_shirt_upload_21_10_2022/sand_brown_solid_urban_shirt_for_men_base_15_11_2023_400x533.jpg',    
    reviews: true,  
    price: '$40.00',  
    oldPrice: "",
    offer: false,
   
  },
  {
    sale: true,
    name: 'Cider Brown Printed Varsity Jacket for Men',
    image: 'https://www.beyoung.in/api/cache/catalog/products/new_winter_wear_5_10_2022/cider_brown_printed_varsity_jacket_for_men_base_11_12_2023_700x933.jpg',
    reviews: true,
    price: '$16.00',
    oldPrice: '$29.00',
    offer: true,
    
  },
  {
    sale: true,
    name: 'Women Floral Print Anarkali Kurta with Pant and Dupatta',
    image: 'https://m.media-amazon.com/images/I/619AvISJtaL._SY741_.jpg',
    reviews: false,
    price: '$25.00',
    oldPrice:'$20.00',
    offer: true,

  },

  {
    sale:true,
    name: 'GRECIILOOKS Kurta Set with Dupatta for Women',
    image: 'https://m.media-amazon.com/images/I/71UVfLcPEML._SX679_.jpg',
    reviews: true,
    price: '$40.00',   
    oldPrice: "$35.00",
    offer: true,    
  },

  {
    sale: false,
    name: 'Light Blue Floral A-Line Kurta',
    image: 'https://www.beyoung.in/api/cache/catalog/products/11_New_kurti_26_3_2022/light_blue_floral_a-line_kurta_base_28_06_2023_700x933.jpg',
    reviews: true,
    price: ' $25.00',    
    oldPrice: '$50.00',
    offer: true,
   
  },
  {
    sale: false,
    name: 'Sliced Watermelon Casual Shirts for Women',
    image: 'https://www.beyoung.in/api/cache/catalog/products/half_sleeve_shirt_for_women/sliced_watermelon_half_sleeve_shirt_for_women_base_700x933.jpg',
    reviews: false,
    price: ' $120.00',   
    oldPrice: '$280.00',
    offer: true,
   
  },
  {
    sale: true,
    name: 'Navy Blue Women Plain T-Shirt',
    image: 'https://www.beyoung.in/api/cache/catalog/products/plain_new_update_images/navy_blue_womens_plain_t-shirt_women_base_700x933.jpg',
    reviews: true,
    price: ' $11.00',    
    oldPrice: '$19.00',
    offer: true,    
  },
  {
    sale: false,
    name: 'Men full sleeve  Printed hooded',
    image: 'https://rukminim2.flixcart.com/image/832/832/ktketu80/sweatshirt/b/3/a/m-67029201-puma-original-imag6wygzhubhpzp.jpeg',
    reviews: true,
    price: ' $20.00',   
    oldPrice: '',
    offer: false,   
  },
  {
    sale: true,
    name: 'Embellished Kurta Set with Dupatta',
    image: 'https://assets.ajio.com/medias/sys_master/root/20230717/TJ8c/64b55bcea9b42d15c95a9685/-473Wx593H-466319950-multi-MODEL2.jpg',
    reviews: false,
    price: ' $21.00',
    oldPrice: '$30.00',
    offer: true,
    
  },
  {
    sale: false,
    name: 'Color Block Flat Knit Sweater for Men',
    image: 'https://www.beyoung.in/api/cache/catalog/products/new_winter_bb_2023/color_block_flat_knit_sweater_for_men_base_19_10_2023_700x933.jpg',
    reviews: false,
    price: ' $12.00',
    oldPrice: '$25.00',
    offer: true,
    
  },
  {
    sale: true,
    name: 'Block Print Straight Double Layer Kurti',
    image: 'https://assets.ajio.com/medias/sys_master/root/20230906/dpEC/64f882dbafa4cf41f5c12884/-473Wx593H-461191248-yellow-MODEL.jpg',
    reviews: true,
    price: ' $17.00',
    oldPrice: '$20.00',
    offer: true,
    
  },
  {
    sale: true,
    name: 'Printed Straight Kurta Set',
    image: 'https://assets.ajio.com/medias/sys_master/root/20231211/GuWj/6576f928afa4cf41f5c3853c/-473Wx593H-466869105-green-MODEL.jpg',
    reviews: false,
    price: ' $20.00',
    oldPrice: '$25.00',
    offer: true,
    
  },]

  return (
    <>
      <Navigation cart={cart} setCart={setCart}/>
      <Header/>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {
              data.map((d,i)=>{
              return <Card key={i} product={d} cart={cart} setCart={setCart} />
            })
            }
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default App
