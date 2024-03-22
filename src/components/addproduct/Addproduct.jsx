import Icon1 from "../../assets/logo.png";
import Icon2 from "../../assets/settings.png";
import Icon3 from "../../assets/shop.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./style.scss";
import { useEffect, useState } from "react";

const Addproduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    brand: "",
    artikul: "",
    price: "",
    discountPrice: "",
  });

  useEffect(() => {
    if (id !== "product") {
      fetch(`http://localhost:3000/products/${id}`)
        .then((response) => response.json())
        .then((data) => setFormData(data));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(id);
    const method = id !== "product" ? "PUT" : "POST";
    const url = `http://localhost:3000/products/${id !== "product" ? id : ""}`;

    fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <>
      <div className="sidebar">
        <div className="flex">
          <Link to="/" className="">
            <img src={Icon1} alt="" />
          </Link>
          <Link to="/" className="">
            <img src={Icon2} alt="" />
          </Link>
          <Link to="/add">
            <img src={Icon3} alt="" />
          </Link>
        </div>
      </div>
      <header className="header">
        <div className=" header-wrapper">
          <h3>Новый товар</h3>
          <p>Главная / Товары / Новый товар</p>
        </div>
      </header>
      <div className="hero">
        <div className="container">
          <form onSubmit={handleSubmit} className="hero-box">
            <button className="btn1">Основные</button>
            <div className="flex">
              <div>
                Название <span>*</span>
              </div>
              <input
                className="input1"
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="flex2">
              <div>
                <div>Бренд *</div>
                <input
                  className="input2"
                  required
                  type="text"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                />
              </div>

              <div>
                <div>Артикул производителя *</div>
                <input
                  required
                  type="text"
                  name="artikul"
                  value={formData.artikul}
                  onChange={handleChange}
                />
              </div>
            </div>
            <p>Описание *</p>
            <textarea
              required
              name="description"
              className="textarea"
              rows={5}
              cols={95}
              value={formData.description}
              onChange={handleChange}
            ></textarea>
            <div className="flex3">
              <div>
                <div>Цена</div>
                <input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                />
              </div>

              <div>
                <div>Цена со скидкой</div>
                <input
                  className="input2"
                  type="text"
                  name="discountPrice"
                  value={formData.discountPrice}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="btns">
              <button type="submit" className="save-tovar">
                Сохранить
              </button>
              <button className="cancel-tovar">Отмена</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Addproduct;