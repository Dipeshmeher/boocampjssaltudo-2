import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

export default function (manifest) {
  manifest.addComponent({
    name: 'ProductDetails',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'productName', type: CommonFieldTypes.SingleLineText },
      { name: 'productModelYear', type: CommonFieldTypes.SingleLineText },
      { name: 'productBrand', type: CommonFieldTypes.SingleLineText },
      { name: 'productImage', type: CommonFieldTypes.Image },
      { name: 'productPricing', type: CommonFieldTypes.SingleLineText }
    ],    
  });
}
