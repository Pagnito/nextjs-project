import Image from 'next/image';

function ItemCardOne(props) {
  return (
    <div className="itemCardOneContainer">
      <div className="itemCardOneImageContainer">
        <Image layout="fill" src={} />
      </div>
      <div className="itemCardOneInfo">
        <h3> Hard Leather Jacket </h3>

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
          background-image: url(${props.image});
          transition: background-image .2s ease-in-out;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat      
        }
        .itemCardOneImageContainer {
          width: 100%;
          height: ${props.height}
        }
        .itemCardOneContainer:hover {
          background-color:  rgba(0,0,0,.1);
        }
        .itemCardOneContainer:hover .itemCardOneImageContainer {
          background-image: url(${props.hoverImage})
        }
      `}</style>
    </div>
  );
}

export default ItemCardOne;