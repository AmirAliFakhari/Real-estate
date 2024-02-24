function Slider({ src }) {
  console.log(src);
  return <img className="w-screen " src={`/src/assets/imgs/${src}`} />;
}

export default Slider;
