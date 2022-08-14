import React from "react";
import logo from "./logo.svg";
import sepatu from "./sepatu-2.jpg";
import "./App.css";

function App() {
  return (
    <div className="ParentBox">
      <FotoProduk />
      <ProdukInfo name="SNEAKERS" category="LEBARAN" isDiskon="no" />
    </div>
  );
}

function FotoProduk() {
  return (
    <div className="Foto">
      <img src={sepatu} className="App-logo" alt="logo" />
    </div>
  );
}

function CekDiskon(props) {
  const { isDiskon } = props;
  if (isDiskon == "yes") {
    return <p>Diskon 50% Off</p>;
  } else if (isDiskon == "coming") {
    return <p>Akan ada diskon!</p>;
  } else {
    return <p>Belum ada Diskon</p>;
  }
}

function ProdukInfo(props) {
  const { category, name, isDiskon } = props;
  const price = 74000000;
  const benefits = ["Tahan Air", "Bahan Lebih Halus", "Tidak Gerah"];
  const listBenefits = benefits.map((listBenefit) => <li>{listBenefit}</li>);
  return (
    <div>
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">{name}</h1>
        <p className="Price">Rp. {price}</p>
        <CekDiskon isDiskon={isDiskon} />
        <p className="Info">
          React makes it painless to create interactive UIs. Design simple views
          for each state in your application, and React will efficiently update
          and render just the right components when your data changes.
        </p>
        <p className="Info">
          React makes it painless to create interactive UIs. Design simple views
          for each state in your application, and React will efficiently update
          and render just the right components when your data changes.
        </p>

        <div className="Benefits">
          <h3>Kelebihan</h3>
          <ul>
            <li>{listBenefits}</li>
          </ul>
        </div>

        <div className="Button">
          <button className="button-cta" onClick={(e) => TambahCart(name, e)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

function TambahCart(e) {
  // alert("Produk berhasil ditambahkan ke cart");
  console.log("Membeli Produk " + e);
}

export default App;
