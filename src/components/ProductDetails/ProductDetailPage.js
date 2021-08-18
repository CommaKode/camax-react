import React,{useEffect} from 'react';
// import {useState} from 'react';
import ProductHero from './ProductHero/ProductHero';
import MonitorItems from '../Detail-Lists/Monitor';
import   './productDetail.scss';
import ProductReview from './ProductReview/ProductReview';


export const ProductDetailPage = (props) => {
    const { id } = props.match.params; 
  useEffect(() => {
    let parent = document.querySelector('.review-nav').parentElement;

    while (parent) {
        const hasOverflow = getComputedStyle(parent).overflow;
        if (hasOverflow !== 'visible') {
            console.log(hasOverflow, parent);
        }
        parent = parent.parentElement;
    }
  }, [])
   

  // const [list, setlist] = useState([]);

    // useEffect(() => {
    //     fetch(`https://fakestoreapi.com/products/${id}`)
    //       .then((resp) => {
    //         return resp.json();
    //       })
    //       .then((res) => {
    //         console.log(res,"detail");
    //        return setlist(res)
    //       })
    //       .catch((err) => {
    //         console.error(err);
    //       });
    //   }, []);
    return (
        <div className={"product-detail-page"}>
            <ProductHero list={MonitorItems[id]}/>
            <ProductReview list={MonitorItems[id]}/>
        </div>
    )
}
