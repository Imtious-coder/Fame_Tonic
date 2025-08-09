const BulletPoints = ({ icon, text }) => {
  return (
    <li className="flex items-center gap-[10px] leading-[22px] mb-[13px]">
      <span>{icon}</span>
      <p>{text}</p>
    </li>
  );
};

export default BulletPoints;
