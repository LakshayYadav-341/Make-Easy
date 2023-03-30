import React from "react";

export default function FeaturesTemplate(props) {
  return (
      <tr>
        <td>
          <h1 className="featuresCounting">{props.count}</h1>
        </td>
        <td className="featuresTableRightCol">
          <h2 className="featuresTableH2">{props.heading}</h2>
          <p className="featuresTableP">
            {props.text}
          </p>
        </td>
      </tr>
  );
}
