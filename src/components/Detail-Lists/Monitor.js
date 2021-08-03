import product1 from "../../Images/Shop/CDV- GUARD.png";
import product2 from "../../Images/Shop/CDV-43D.png";
import product3 from "../../Images/Shop/CDV-43DM.png";
import product4 from "../../Images/Shop/CDV-43WIN.png";
import product5 from "../../Images/Shop/CDV-46B.png";
import product6 from "../../Images/Shop/CDV-46BM.png";
import product7 from "../../Images/Shop/CDV-51D.png";
import product8 from "../../Images/Shop/CDV-70MS4.png";
import product9 from "../../Images/Shop/CDV-70T4.png";
import product10 from "../../Images/Shop/CDV-70TM4.png";
import product11 from "../../Images/Shop/CDV-70WIN.png";
import product12 from "../../Images/Shop/CDV-80MS4.png";
import product13 from "../../Images/Shop/CDV-70T4.png";

export const Options = [
  // {name:"فیلتر قیمت",key=""},
  "فیلتر قیمت",
  "سایز صفحه نمایش",
  "حافظه",
  "ارتباط داخلی",
  "گوشی",
  "باز کن درب پارکینگ",
  "نوع صفحه ی نمایش",
  "کارتخوان",
  "اتصال تلفن به مونیتور",
  "اتصال به دوربین دیگر",
  "اتصال به دو پنل بیرونی",
  "اتصال به گارد نگهبانی",
  "قفل اضافه",
];

const MonitorItems = [
  {
    name: "cdv-guard",
    price: "1200000000",
    size: "4.3",
    sd: false,
    intercommunicate: false,
    handyPhone: true,
    parkingOpener: true,
    touch: false,
    cart: true,
    mobileConnect: false,
    camera: true,
    twoPanelConnect: false,
    guard: true,
    extraLock: false,
    image: product1,
  },
  {
    name: "cdv-43d",
    price: "561615",
    size: "8",
    sd: true,
    inConnectorOn: true,
    handyPhone: true,
    parkingOpener: true,
    touch: true,
    cart: false,
    mobileConnect: false,
    camera: false,
    twoPanelConnect: true,
    guard: true,
    extraLock: true,
    image: product2,
  },
  {
    name: "cdv-43dm",
    price: "1200000",
    size: "4.6",
    sd: true,
    inConnectorOn: false,
    handyPhone: true,
    parkingOpener: false,
    touch: false,
    cart: false,
    mobileConnect: false,
    camera: false,
    twoPanelConnect: false,
    guard: true,
    extraLock: false,
    image: product3,
  },
  {
    name: "cdv-43win",
    price: "1200000",
    size: "8",
    sd: false,
    inConnectorOn: true,
    handyPhone: true,
    parkingOpener: false,
    touch: true,
    cart: false,
    mobileConnect: true,
    camera: false,
    twoPard: true,
    guadrd: true,
    extraLock: true,
    image: product4,
  },
  {
    name: "cdv-46b",
    price: "1200000",
    size: "8",
    sd: true,
    inConnectorOn: true,
    handyPhone: false,
    parkingOpener: true,
    touch: false,
    cart: true,
    mobileConnect: false,
    camera: false,
    twoPanelConnect: false,
    guard: false,
    extraLock: false,
    image: product5,
  },
  {
    name: "cdv-46bm",
    price: "1200000",
    size: "4.3",
    sd: true,
    inConnectorOn: false,
    handyPhone: true,
    parkingOpener: true,
    touch: true,
    cart: true,
    mobileConnect: true,
    camera: false,
    twoPanelConnect: true,
    guard: true,
    extraLock: true,
    image: product6,
  },
  {
    name: "cdv-51d",
    price: "1200000",
    size: "7",
    sd: true,
    inConnectorOn: true,
    handyPhone: true,
    parkingOpener: true,
    touch: false,
    cart: true,
    mobileConnect: false,
    camera: true,
    twoPanelConnect: true,
    guard: false,
    extraLock: true,
    image: product7,
  },
  {
    name: "cdv-51dm",
    price: "1200000",
    size: "4.6",
    sd: false,
    inConnectorOn: true,
    handyPhone: false,
    parkingOpener: true,
    touch: false,
    cart: true,
    mobileConnect: false,
    camera: true,
    twoPanelConnect: true,
    guard: false,
    extraLock: true,
    image: product8,
  },
  {
    name: "cdv-70ms4",
    price: "1200000",
    size: "5.1",
    sd: true,
    inConnectorOn: false,
    handyPhone: true,
    parkingOpener: false,
    touch: false,
    cart: true,
    mobileConnect: false,
    camera: true,
    twoPanelConnect: true,
    guard: true,
    extraLock: true,
    image: product9,
  },
  {
    name: "cdv-70t4",
    price: "1200000",
    size: "4.3",
    sd: true,
    inConnectorOn: true,
    handyPhone: true,
    parkingOpener: true,
    touch: true,
    cart: true,
    mobileConnect: false,
    camera: false,
    twoPanelConnect: true,
    guard: true,
    extraLock: false,
    image: product10,
  },
  {
    name: "cdv-70tm4",
    price: "1200000",
    size: "7",
    sd: false,
    inConnectorOn: false,
    handyPhone: false,
    parkingOpener: true,
    touch: false,
    cart: true,
    mobileConnect: true,
    camera: false,
    twoPanelConnect: true,
    guard: true,
    extraLock: false,
    image: product11,
  },
  {
    name: "cdv-70win",
    price: "1200000",
    size: "5.1",
    sd: true,
    inConnectorOn: true,
    handyPhone: true,
    parkingOpener: true,
    touch: false,
    cart: true,
    mobileConnect: false,
    camera: false,
    twoPanelConnect: false,
    guard: false,
    extraLock: false,
    image: product12,
  },
  {
    name: "cdv-80ms4",
    price: "1200000",
    size: "7",
    sd: true,
    inConnectorOn: true,
    handyPhone: false,
    parkingOpener: true,
    touch: true,
    cart: true,
    mobileConnect: true,
    camera: true,
    twoPanelConnect: false,
    guard: false,
    extraLock: true,
    image: product13,
  },
];

export default MonitorItems;
