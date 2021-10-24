import Image from 'next/image';
import Link from 'next/link';

function ItemCardOne(props) {
  let image = props.data.node.images.edges[0].node.transformedSrc;
  let title = props.data.node.title.substring(0, 20);
  let price = '$ ' + props.data.node.priceRange.minVariantPrice.amount + ' - ' + props.data.node.priceRange.maxVariantPrice.amount;
  let handle = props.data.node.handle;

  return (
    <Link href={`/product/${handle}`}>
      <div className="itemCardOneContainer">
        <div className="itemCardOneImageContainer">
          <div className="itemCardOneImageStyleSquare"></div>
          <Image objectPosition="top" objectFit="cover" layout="fill" src={image} />
          <div className="itemCardOneImageStyleTriangle"></div>

        </div>
        <div className="itemCardOneInfo">
          <div className="itemCardInfoTitle"><b>{title}</b></div>
          <div><b>{price}</b></div>
        </div>
        <div id="itemCardOneButtons">
          <div className="itemCardOneButtonContainer">
            <Image objectPosition="center" layout="fill" src="/images/like.png" />
          </div>
          <div className="itemCardOneButtonContainer">
            <Image objectPosition="center" layout="fill" src="/images/eye.png" />
          </div>
          <div className="itemCardOneButtonContainer">
            <Image objectPosition="center" layout="fill" src="/images/cart-bag.png" />
          </div>
        </div>

        <style jsx>{`
        .itemCardOneContainer {
          margin-top: 15px;
          width: ${props.width + '%'};
          padding: 10px;
          transition: background-color .2s ease-in-out;
          position: relative;
          overflow: hidden;
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
          transition: all .3s ease-in-out
        }

        .itemCardOneImageStyleSquare {
          background-color: #BD1615;
          width: 102%;
          padding-bottom: 102%;
          position: absolute;
          margin-top: -4%;
          margin-left: 3%;
          transition: all .3s ease-in-out
        }
        .itemCardOneContainer:hover #itemCardOneButtons {
          opacity: 1;

        }
        .itemCardOneContainer:hover .itemCardOneImageContainer {
          width: 98%;
          padding-bottom: 98%;
        }
        .itemCardOneContainer:hover .itemCardOneImageStyleSquare {
          margin-top: 0%;
          margin-left: 0%;
          width: 100%;
          padding-bottom: 100%;
        }
        .itemCardOneImageStyleTriangle {
          clip-path: polygon(0 6%, 0% 100%, 100% 100%);
          position: absolute;
          bottom: -1px;
          left: -1px;
          background: white;
          height: 30px;
          width: 30px;
        }
        #itemCardOneButtons {
          position: absolute;
          top: 20px;
          display: flex;
          flex-direction: column; 
          transition: all .5s ease-in-out .2s;
          opacity: 0;
          right: 25px;
        }
        .itemCardOneButtonContainer {
          width: 30px;
          height: 30px;
          position: relative;
          margin-top: 10px;
          
        }
      
      
      `}</style>
      </div>
    </Link>
  );
}

export default ItemCardOne;
// .itemCardOneContainer:hover .itemCardOneImageContainer {
//   background-image: url(${props.hoverImage})
// }