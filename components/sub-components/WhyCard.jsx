"use client"
const WhyCard = ({ title, description , bgImage }) => {
  // CSS IS IN Global.css file from line 48 to line 90 
  return (
    <div
      className="containers"
    >
      <div className="card">
        <div className={`front ${bgImage}`}>
          Hover to see:<br />{title}
        </div>
        <div className="back">
          <h1 className="font-bold text-lg">{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default WhyCard;
