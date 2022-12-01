import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
      <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
        <Product
            id="12438094"
            title="Pratham Blue Women's Silk Saree With Blouse Piece"
            price={1500}
            rating={5}
            image="https://m.media-amazon.com/images/I/710YR58lquS._UY741_.jpg"
          />

          <Product
            id="49538094"
            title="Titan Smart 2 Fashion Smartwatch, 1.78” AMOLED Display with Premium Metal Body, Multiple Sports Modes with 100+ Watchfaces, Complete Health Suite with Stress Monitor, 7 Days Battery Life & 3 ATM"
            price={2500}
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/I/41uMQZlXqML._AC_SX184_.jpg"
          />
      

         <Product
            id="4903850"
            title="Mammon Women's PU Leather Handbag Combo"
            price={1000}
            rating={3}
            image="https://m.media-amazon.com/images/I/61i2f6JRKoL._UX625_.jpg"
          />
          </div>

       <div className="home__row">
         <Product
            id="23445930"
            title="Savya Home® APEX Chairs™ Apollo Chrome Base HIGH Back Office CHAIR2"
            price={3000}
            rating={5}
            image="https://m.media-amazon.com/images/I/81yJVI6Za5L._SX679_.jpg"
          />

         <Product
            id="4903824"
            title="boAt Rockerz 450 Pro Bluetooth On Ear Headphones with Mic with 70 Hours Battery, 40Mm Drivers, Bluetooth V5.0 Padded Ear Cushions, Easy Access Controls and Voice Assistant(Luscious Black)"
            price={1500}
            rating={3}
            image="https://m.media-amazon.com/images/I/61jlFEwSt+L._AC_UL320_.jpg"
          />


          <Product
            id="32543543"
            title="Curio Centre Round Cotton Home Swing & Hammock Chair (135 Cm X 57 Cm X 43 Cm, White)"
            price={3500}
            rating={4}
            image="https://m.media-amazon.com/images/I/61Q8QT64xgL._SY741_.jpg"
            />
           </div>
        

        <div className="home__row">
          <Product
            id="26529332"
            title="Wow Craft - Multi Purpose Foldable and Portable 2 Seater Dining Table for Home, Kitchen Made with Engineered Plywood top and Powder Coated Finish (Color:- Brown)"
            price={1500}
            rating={4}
            image="https://m.media-amazon.com/images/I/71GER29qlIL._SX522_.jpg"
            />

         <Product
            id="4903850"
            title="Samsung Galaxy Tab S6 Lite 26.31 cm (10.4 inch), S-Pen in Box, Slim and Light, Dolby Atmos Sound, 4 GB RAM, 64 GB ROM, Wi-Fi Tablet, Gray"
            price={18000}
            rating={3}
            image="https://m.media-amazon.com/images/I/61rq3n8ZrUL._AC_UL320_.jpg"
            />

         <Product
            id="4903258"
            title="DECORVAIZ Plastic Flower Pot, Multicolour, 3 Pcs"
            price={599}
            rating={5}
            image="https://m.media-amazon.com/images/I/81VySUVX+sL._SX679_.jpg"
          />
          </div>

      <div className="home__row">
         <Product
            id="4901425"
            title="PAPER PLANE DESIGN Family Tree Collage Photo Frames for Wall Decor Set (Style-7)"
            price={399}
            rating={4}
            image="https://m.media-amazon.com/images/I/41-7Nar7NwL._SX300_SY300_QL70_FMwebp_.jpg"
          />

         <Product
            id="1452850"
            title="Decals Design 'Tree with Birds and Cages' Wall Sticker (PVC Vinyl, 30 cm x 90 cm, Brown)"
            price={250}
            rating={3}
            image="https://m.media-amazon.com/images/I/61GR+4iC7aL._SX425_.jpg"
          />

         <Product
            id="4903850"
            title="Wonderchef Nutri-blend Mixer, Grinder & Blender | Powerful 400W 22000 RPM motor | Stainless steel Blades | 2 unbreakable jars | 2 Years warranty "
            price={2000}
            rating={3}
            image="https://m.media-amazon.com/images/I/61BGNSBBwYL._SX522_.jpg"
          />
           </div>

   
      <div className="home__row">
         <Product
            id="23654178"
            title=" GrowKaro Air Purifying Live Money plant Indoor Plant In Beautiful Green Metal Pot Decorated on Cycle Stands for Home & Living Room Decor | Office Desk "
            price={999}
            rating={5}
            image=" https://m.media-amazon.com/images/I/714-g506quL._SL1500_.jpg "
          />

         <Product
            id="90829456"
            title=" Plantex Stainless Steel 3-Tier Fruit & Vegetable Basket for Dining Table/Kitchen - Countertop (Chrome) "
            price={1500}
            rating={4}
            image=" https://m.media-amazon.com/images/I/81BzZ+qup4L._SL1500_.jpg "
          />
         
         <Product
            id="12438094"
            title="Unique Woodcraft Sheesham Wood 4 Seater Dining Table with Chairs Four Seater Dining Room Furniture Wooden Dining Table for Living Room Home and Restaurant (Honey Teak Finish)"
            price={10000}
            rating={2}
            image="https://m.media-amazon.com/images/I/71ZgRNLXt+L._SX522_.jpg"
          />
          </div>


       <div className="home__row">
         <Product
            id="4903850"
            title="Sukkhi Sparkling Gold Plated Wedding Jewellery Austrian Diamond Set of 4 Necklace Combo for Women (SKR48715)"
            price={25000}
            rating={7}
            image="https://m.media-amazon.com/images/I/711ZldF8GQL._UY535_.jpg"
          />

         <Product
            id="4903850"
            title="Dell G15 5511 Gaming Laptop Intel Core i5-11260H 8Gb/512Gb SSD/Nvidia RTX 3050 4Gb GDDR6/15.6 (39.62Cms) FHD WVA AG 250 Nits 120Hz, Win 11 + MSO, Orange Backlit KB, (D560825WIN9B, 2.65Kgs)"
            price={55000}
            rating={3}
            image="https://m.media-amazon.com/images/I/6192pE7H2FL._SX679_.jpg"
          />

         <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={3000}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
        
        
 
         
        </div>
      </div>
    </div>
  );
}

export default Home;