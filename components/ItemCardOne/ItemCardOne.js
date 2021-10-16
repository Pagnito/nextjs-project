import Image from 'next/image';

function ItemCardOne(props) {
  console.log(props.data.image)
  return (
    <div className="itemCardOneContainer">
      <div className="itemCardOneImageContainer">
        <Image objectPosition="top" objectFit="cover" layout="fill" src={props.data.image} />
      </div>
      <div className="itemCardOneInfo">
        <h3>{props.data.name}</h3>

        <h4>$50.00</h4>
      </div>
      <style jsx>{`
        .itemCardOneContainer {
          width: ${props.width};
          min-height: ${props.height};
          transition: background-color .2s ease-in-out;
          padding: 10px;
          border-radius: 3px;
        }
   
        .itemCardOneImageContainer {
          width: 100%;
          height: ${props.height};
          position: relative;
        }
      
        .itemCardOneContainer:hover .itemCardOneImageContainer {
          background-image: url(${props.hoverImage})
        }
      `}</style>
    </div>
  );
}

export default ItemCardOne;