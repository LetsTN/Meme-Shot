import adc from "assets/cats/awesome_dude_cat.jpg";
import ga from "assets/cats/gatito_atormentado.jpg";
import idac from "assets/cats/is_that_a_cat.jpg";
import ld from "assets/cats/little_dude.jpg";
import osc from "assets/cats/oh_shit_cat.jpg";
import owo from "assets/cats/owo_cat.jpg";
import pc from "assets/cats/polite_cat.jpg";
import sc from "assets/cats/sad_cat.jpg";
import vc from "assets/cats/vomiting_cat.jpg";

import ad from "assets/dogs/angry_doge.jpg";
import c from "assets/dogs/camarelo.jpg";
import doge from "assets/dogs/doge.jpg";
import eb from "assets/dogs/eyebrows.jpg";
import hehe from "assets/dogs/hehe_dog.jpg";
import sd from "assets/dogs/sad_dog.jpg";
import sd2 from "assets/dogs/sad_dog2.jpg";
import style from "assets/dogs/style_dog.jpg";
import ud from "assets/dogs/uncomfortable_dog.jpg";

import aas from "assets/other/angry_at_self.jpg";
import hg from "assets/other/handsome_goat.jpg";
import hd from "assets/other/hmm_dude.jpg";
import horse from "assets/other/horse.jpg";
import mm from "assets/other/my_man.jpg";
import sp from "assets/other/screaming_parrot.jpg";
import sld from "assets/other/smug_little_dude.jpg";
import us from "assets/other/umer_snake.jpg";
import yg from "assets/other/yes_goat.jpg";
// import yorse from "assets/dogs/yorse.jpg";

interface IElements {
  name: string;
  title: string;
  childs: {
    name: string;
    image: any;
  }[];
}

interface IImages {
  [key: string]: IElements;
}

export const Images: IImages = {
  cats: {
    name: "Gatos",
    title: "Memes de Gatos",
    childs: [
      {
        name: "Awesome Dude Cat",
        image: adc,
      },
      {
        name: "Gatito Atormentado por tus Pensamientos",
        image: ga,
      },
      {
        name: "Is That a Cat?",
        image: idac,
      },
      {
        name: "Little Dude",
        image: ld,
      },
      {
        name: '"Oh Shit" Cat',
        image: osc,
      },
      {
        name: "OwO cat",
        image: owo,
      },
      {
        name: "Polite Cat",
        image: pc,
      },
      {
        name: "Sad Cat",
        image: sc,
      },
      {
        name: "Vomiting Cat",
        image: vc,
      },
    ],
  },
  dogs: {
    name: "Cachorros",
    title: "Memes de Cachorros",
    childs: [
      {
        name: "Angry Doge",
        image: ad,
      },
      {
        name: "Camarelo",
        image: c,
      },
      {
        name: "Doge",
        image: doge,
      },
      {
        name: "Eyebrows Dog",
        image: eb,
      },
      {
        name: "Hehe Dog",
        image: hehe,
      },
      {
        name: "Sad Dog",
        image: sd,
      },
      {
        name: "Sad Dog 2",
        image: sd2,
      },
      {
        name: "Estilera Dog",
        image: style,
      },
      {
        name: "Uncomfortable_dog Dog",
        image: ud,
      },
    ],
  },
  other: {
    name: "Outros",
    title: "Memes de Bixos em Geral",
    childs: [
      {
        name: "Bird Angry at Self",
        image: aas,
      },
      {
        name: "Handsome Goat",
        image: hg,
      },
      {
        name: "Hmmm Dude",
        image: hd,
      },
      {
        name: "Horse",
        image: horse,
      },
      {
        name: "My Man",
        image: mm,
      },
      {
        name: "Screaming Parrot",
        image: sp,
      },
      {
        name: "Smug Little Dude",
        image: sld,
      },
      {
        name: "Uber Eats Snake",
        image: us,
      },
      {
        name: "Yes Goat",
        image: yg,
      },
    ],
  },
};
