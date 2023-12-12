import React, { createRef } from "react";

import Image from "./Image";

class Content extends React.Component {
  constructor() {
    super();
    this.state = { counter: 1 };
    this.birthdayRef = createRef();
    this.educationRef = createRef();
    this.imageRef = createRef();
  }

  componentDidMount() {
    this.birthdayRef.current.style.backgroundColor = "white";
    this.educationRef.current.style.backgroundColor = "white";
  }

  changeColor = () => {
    const paragraph1 = this.birthdayRef.current;
    const paragraph2 = this.educationRef.current;

    const currentColor1 = paragraph1.style.backgroundColor;
    const currentColor2 = paragraph2.style.backgroundColor;

    if (currentColor1 === "white") {
      paragraph1.style.color = "white";
      paragraph1.style.backgroundColor = "blue";
    } else if (currentColor2 === "white") {
      paragraph2.style.color = "black";
      paragraph2.style.backgroundColor = "lime";
    } else if (currentColor1 === "blue" && currentColor2 === "lime") {
      paragraph1.style.color = "black";
      paragraph1.style.backgroundColor = "lime";
      paragraph2.style.color = "white";
      paragraph2.style.backgroundColor = "blue";
    }
  };

  addImage() {
    const img = document.getElementById("Lviv");
    if (img.style.display === "none") {
      img.style.display = "block";
    } else if (!img) {
      img = document.createElement("img");
      img.id = "Lviv";
      img.src = "Lviv.jpg";
      img.alt = "Фото міста";
      document.body.appendChild(img);
    }
  }

  enlargeImage() {
    const img = document.getElementById("Lviv");
    img.setAttribute("width", img.width + 10);
  }

  reduceImage() {
    const img = document.getElementById("Lviv");
    img.setAttribute("width", img.width - 10);
  }

  removeImage() {
    const img = document.getElementById("Lviv");
    if (img) {
      img.style.width = "";
      img.style.height = "";
      img.style.display = "none";
    }
  }

  render() {
    return (
      <main>
        <div className="info">
          <div
            className="paragraph1"
            ref={this.birthdayRef}
            onClick={this.changeColor}
          >
            <p>Дата і місце народження: 14 грудня 2003 року, місто Донецьк</p>
          </div>
          <div
            className="paragraph2"
            ref={this.educationRef}
            onClick={this.changeColor}
          >
            <p>Освіта:</p>
          </div>
          <div className="education">
            <ul>Амвросіївська ЗОШ І-ІІІ ступенів №2,</ul>
            <ul>Маріупольська ЗОШ І-ІІІ ступенів №29,</ul>
            <ul>НТУУ "КПІ" імені Ігоря Сікорського.</ul>
          </div>
        </div>
        <div className="hobby">
          <p>Хобі:</p>
          <ul>
            <li>Комп'ютерні ігри;</li>
            <li>Вивчання політики та історії;</li>
            <li>Футбол;</li>
            <li>Перегляд кіно;</li>
            <li>Книги.</li>
          </ul>
        </div>
        <div className="films">
          <p>Улюблені книги та фільми:</p>
          <ol>
            <li>Фільм: "Зорянi вiйни: Епiзод IV - Нова надiя", 1977 рік:</li>
            <li>Фільм: "1917", 2019 рік;</li>
            <li>Фільм: "Огидна вісімка", 2015 рік;</li>
            <li>Серіал: "Дивні дива", 2016 - наш час;</li>
            <li>Книга: "Прекрасний новий світ", 1932 рік;</li>
            <li>Книга: "Місто", 1928 рік.</li>
          </ol>
        </div>
        <div className="favorite city">
          <p>
            Львів - одне з найстаріших міст України, і його історія налічує
            понад 700 років. Місто було засноване у 1256 році князем Данилом
            Галицьким і назване на честь його сина Лева. Протягом віків Львів
            був важливим культурним, торговим і політичним центром. Він пережив
            численні історичні перипетії, включаючи періоди польської,
            австрійської та радянської влади.
          </p>
        </div>

        {Array(this.state.counter)
          .fill(0)
          .map((_, index) => (
            <Image
              key={index}
              index={index}
              counter={this.state.counter}
              imageRef={this.imageRef}
            />
          ))}
        <div className="buttons">
          <button onClick={() => this.addImage()}>Додати</button>
          <button onClick={() => this.enlargeImage()}>Збільшити</button>
          <button onClick={() => this.reduceImage()}>Зменшити</button>
          <button onClick={() => this.removeImage()}>Видалити</button>
        </div>
      </main>
    );
  }
}

export default Content;
