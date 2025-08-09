const PromotionBar = ({ message, gradientColors }) => {
  return (
    <div
      className={`text-center text-white py-2 font-figtree ${gradientColors}`}
    >
      {message}
    </div>
  );
};

export default PromotionBar;
