import React from 'react';
import { Text, RichText, Image } from '@sitecore-jss/sitecore-jss-react';

const BootCampDepartments = (props) => (
  <div>
    <h1>
      <Text field={props.fields.departmentName} />
    </h1>
    <br />
    <RichText field={props.fields.departmentResponsibilities} />
    <br />
    <Image field={props.fields.departmentLogo} />
  </div>
);

export default BootCampDepartments;
