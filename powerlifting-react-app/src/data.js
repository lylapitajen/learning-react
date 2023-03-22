import squatImg from "./images/squat.jpg";
import benchImg from "./images/bench.jpg";
import deadliftImg from "./images/deadlift.jpg";
import beltImg from "./images/belt.png";
import kneeSleevesImg from "./images/knee-sleeves.jpg";
import wristWrapsImg from "./images/wrist-wraps.png";
export const pageLinks = [
  { id: 1, href: "#home", text: "Home" },
  { id: 2, href: "#about", text: "About" },
  { id: 3, href: "#blogs", text: "Blog" },
  { id: 4, href: "#products", text: "Products" },
];

export const socialLinks = [
  {
    id: 1,
    href: "https://instagram.com/",
    icon: "fab fa-instagram ",
    logo: "src/images/instagram.svg",
  },
  {
    id: 2,
    href: "https://twitter.com/",
    icon: "fab fa-twitter ",
    logo: "src/images/twitter.svg",
  },
  {
    id: 3,
    href: "https://facebook.com/",
    icon: "fab fa-facebook",
    logo: "src/images/facebook.svg",
  },
];

export const blogPosts = [
  { id: 1, blogImg: squatImg, title: "Squat" },
  { id: 2, blogImg: benchImg, title: "Bench" },
  { id: 3, blogImg: deadliftImg, title: "Deadlift" },
];

export const featuredProducts = [
  { id: 1, productImg: beltImg, productName: "Lever Belt", price: "£179.99" },
  {
    id: 2,
    productImg: kneeSleevesImg,
    productName: "Knee Sleeves",
    price: "£59.99",
  },
  {
    id: 3,
    productImg: wristWrapsImg,
    productName: "Wrist Wraps",
    price: "£29.99",
  },
];
