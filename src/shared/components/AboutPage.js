if (process.env.BROWSER ) {
	require ('../Sass/about.scss');
}
import React from 'react';
import {ImageLoader} from './Shared/ImageLoader';
import connectDataFetchers from '../lib/connectDataFetchers.jsx';
import { connect } from 'react-redux';

import {BrandsData} from '../Data/AboutData';
import { Breadcrumb , BigHeader, OrangeBoard} from "./Shared/Shared";

function BrandImgpreloader() {
	return <div className="loading-div" style={{minHeight: "100px"}}/>;
}

const AboutPage = (props) => (
	<div className="container">
		<div className="row">
			<div className="col-lg-12">
				<Breadcrumb linkPair={[{link:"/home", desc:"Home"},{link:"", desc:"About Us"}]}/>
				<BigHeader smallTitle="Provide friendly services and reliable support">About Us</BigHeader>
			</div>
			<div className="col-sm-9">
				<OrangeBoard>
					<p>At <span className="text_logo"><strong>Hi-Tech Digital CCTV</strong></span>, our aim is to provide you with <b>professional</b> advice through our <b>experience</b> to satisfy all your security surveillance needs through our <b>friendly services</b>. We will only provide you with products of the highest <b>quality</b> for your surveillance soultion and will continue to provide an ongoing <b>reliable</b> support.
					</p>
					<p>Our products are predominantly Made in Taiwan and Made in Korea to ensure the best of its <b>quality</b> while still maintaining an <b>affordable</b> price.</p>
					<p>To meet all your needs, we endeavour to <b>explain</b> all the functions and features of our products until you <b>understand</b> them <b>clearly</b> before you make any decisions. We will continue to provide <b>friendly</b> services and <b>reliable</b> support to our customers to ensure the best results can be obtained from our products.</p>
				</OrangeBoard>
			</div>
			<div className="col-sm-3">
				<img className="img-responsive asia center" alt="Ausrtralian Security Industry Association Limited" title="Ausrtralian Security Industry Association Limited" src="/build/img/ASIALmemberjpeg_hires.jpg"/>
			</div>
			<div className="col-sm-12">
				<BigHeader smallTitle="">Brands We Carry</BigHeader>
			</div>

			<div className="col-sm-12 brand">
				<p className="note">These logos are all copyright of their respective owners.</p>
				<table className="table borderless">
					<tbody>
						{
							BrandsData.reduce( (acc, cur, curId) => {
									(curId%4===0)?acc.push([cur]):acc[acc.length-1].push(cur);
									return acc;
								},[])
								.map( (item, id) =>  (
									<tr key={id}>
										{
											item.map((item, id)=> {
												return(
													<td  key={id}>
														<ImageLoader src={item.img} alt={item.brand} title={item.brand} minHeight="60px"/>																
													</td>
												);
											})
										}
									</tr>
									)
								)
						}
					</tbody>
				</table>
			</div>
		</div>
	</div>
);

AboutPage.propTypes = {
};
export default connect(null)(connectDataFetchers(AboutPage, [ ]));

