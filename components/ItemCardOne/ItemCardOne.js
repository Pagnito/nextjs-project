import Image from 'next/image';

function ItemCardOne(props) {
  let image = props.data.node.images.edges[0].node.transformedSrc;
  let title = props.data.node.title.substring(0, 20);
  let price = '$ ' + props.data.node.priceRange.minVariantPrice.amount + ' - ' + props.data.node.priceRange.maxVariantPrice.amount
  return (
    <div className="itemCardOneContainer">
      <div className="itemCardOneImageContainer">
        <Image objectPosition="top" objectFit="cover" layout="fill" src={image} />
      </div>
      <div className="itemCardOneInfo">
        <div className="itemCardInfoTitle"><b>{title}</b></div>
        <div><b>{price}</b></div>
      </div>
      <style jsx>{`
        .itemCardOneContainer {
          margin-top: 15px;
          width: ${props.width};
          padding: 10px;
          transition: background-color .2s ease-in-out;
          border-radius: 3px;
        }
        .itemCardOneInfo {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 1.1rem;
        }
        .itemCardInfoTitle {
          margin 10px 0px 5px 0px;
        }
        .itemCardOneImageContainer {
          width: 100%;
          padding-bottom: 100%;
          position: relative;
        }
      
      
      `}</style>
    </div>
  );
}

export default ItemCardOne;
// .itemCardOneContainer:hover .itemCardOneImageContainer {
//   background-image: url(${props.hoverImage})
// }