import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

export default function (manifest) {
  manifest.addComponent({
    name: 'BootCampDepartments',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'departmentName', type: CommonFieldTypes.SingleLineText },
      { name: 'departmentResponsibilities', type: CommonFieldTypes.RichText },
      { name: 'departmentLogo', type: CommonFieldTypes.Image }
    ],   
  });
}
