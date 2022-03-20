import Link from 'next/link';
import Image from "../../../image";
import {DEFAULT_CATEGORY_IMG_URL} from "../../../constants/urls";

const ParentCategoryBlock = ( props ) => {

	const { category } = props;

	return (
		<div className="product mb-5">
			<Link href={`/category/${category?.slug}`}>
				<a>
					<Image
						className="object-cover h-40 md:h-64"
						layout="fill"
						containerClassNames="h-56"
						sourceUrl={ category?.image?.sourceUrl ?? '' }
						defaultImgUrl={DEFAULT_CATEGORY_IMG_URL}
						altText={category?.image?.altText ?? category.slug}
					/>
					<div className="product-title-container p-3">
						<h3 className="product-title text-lg font-medium">{category?.name}</h3>
					
					</div>
				</a>
			</Link>
		</div>
	);
}

export default ParentCategoryBlock;
