import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossorigin="anonymous"
      ></link>
      <nav
        className="navbar bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} width="70" height="55"></img>
          </a>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Anasayfa
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                İletişim
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Hakkımızda
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Medya
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="row" style={{ marginTop: "20px" }}>
        <div className="col-md-3 offset-md-1">
          <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action">
              Kategoriler
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Elektronik Cihazlar
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Akıllı Ev Aletleri
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Yerli Malı Haftası
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Futbol Ürünleri
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Basketbol Ürünleri
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Tenis Ürünleri
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Vejeteryan Ürünleri
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Et Ürünleri
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Bahçe ve Dış Mekan Ürünleri
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Enstrüman ve Oyun
            </a>
          </div>
        </div>
        <div className="offset-md-1 col-md-6 offset-md-1">
          <div className="row">
            <div
              className="card col-md-4"
              style={{ width: "18rem", marginRight: "20px" }}
            >
              <img
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693009279096"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">iPhone 15 Pro Max</h5>
                <p className="card-text">En iyi, en hızlı, en kibar.</p>
                <a href="#" className="btn btn-primary">
                  Detay
                </a>
              </div>
            </div>
            <div
              className="card col-md-4"
              style={{ width: "18rem", marginRight: "20px" }}
            >
              <img
                src="https://www.yalehome.com/tr/market-images/Smart-Home/16-9/partner-pages/amazon-alexa/1920x1080_Alexa.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Amazon Alexa</h5>
                <p className="card-text">
                  Alexa ile günlük ihtiyaçlarının bazılarını akıllı evinle
                  konuşarak hallet.
                </p>
                <a href="#" className="btn btn-primary">
                  Detay
                </a>
              </div>
            </div>
            <div
              className="card col-md-4"
              style={{ width: "18rem", marginRight: "20px" }}
            >
              <img
                src="https://cdnuploads.aa.com.tr/uploads/Contents/2023/04/20/thumbs_b_c_d78e7c28dac70d05e32d7312db2e82fc.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Bayraktar Kızılelma</h5>
                <p className="card-text">
                  Bayraktar Kızılelma ile Türkiye'nin yerli üretime olan
                  dönüşümü keşfet.
                </p>
                <a href="#" className="btn btn-primary">
                  Detay
                </a>
              </div>
            </div>
            <div
              className="card col-md-4"
              style={{ width: "18rem", marginTop: "10px", marginRight: "20px" }}
            >
              <img
                src="https://cdnuploads.aa.com.tr/uploads/Contents/2023/10/11/thumbs_b_c_16f5dc35042154e3f510fabf2c9a817b.jpg?v=084830"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Futbol Aksesuarları</h5>
                <p className="card-text">
                  Dünyanın en çok oynanan ve sevilen sporunu tecrübe etmek için
                  en iyi ekipmanlar burada.
                </p>
                <a href="#" className="btn btn-primary">
                  Detay
                </a>
              </div>
            </div>
            <div
              className="card col-md-4"
              style={{ width: "18rem", marginTop: "10px", marginRight: "20px" }}
            >
              {" "}
              <img
                src="https://cangozmuzik.com.tr/uploads/p/b/Muzik-Aletleri-Isimleri-TOP-10-Enstruman-Listesi_1.jpg?v=1666768798"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Enstrüman ve Oyun</h5>
                <p className="card-text">
                  Kendine bir sosyal beceri katarak enstrüman satın alıp çalmayı
                  öğrenmek ister misin?
                </p>
                <a href="#" className="btn btn-primary">
                  Detay
                </a>
              </div>
            </div>
            <div
              className="card col-md-4"
              style={{ width: "18rem", marginTop: "10px", marginRight: "20px" }}
            >
              {" "}
              <img
                src="https://ideacdn.net/idea/kc/78/myassets/products/782/arya-bahce1.jpg?revision=1697143329"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Bahçe ve Dış Mekan Ürünleri</h5>
                <p className="card-text">
                  Evinizin bahçesine uygun bulabileceğiniz en kibar ürünler için
                  detaya tıklayın.
                </p>
                <a href="#" className="btn btn-primary">
                  Detay
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Divider(props) {
  const { primaryColor, secondaryColor, heightValue } = props;

  return (
    <hr
      style={{
        color: primaryColor,
        backgroundColor: secondaryColor,
        height: heightValue,
      }}
    />
  );
}

export default App;
