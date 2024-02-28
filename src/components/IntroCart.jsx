function IntroCart({ img, title, text, buttonText }) {
  return (
    <div>
      <img src={`src/assets/imgs/${img}`} alt="" />
      <p>{text}</p>
      <button>{buttonText}</button>
    </div>
  );
}

export default IntroCart;
