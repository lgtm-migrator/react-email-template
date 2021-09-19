import React from 'react';

import { Divider } from "react-email-components-typography";

import HOC from '../HOC/HOC.jsx';


import Body from '../Body/Body.jsx';

import BodyPrototype from './Body/BodyPrototype';


import config from './config';
import { styles } from './styles';

const ContentOnly = ({ header }) => (
  <HOC styles={{ ...styles }}>
    <tbody>

      <tr>
        <td valign="top" id="templateBody" style={styles.templateBody}>
          <Divider>
              



            <BodyPrototype
              config={config}
            />



          </Divider>
        </td>
      </tr>
    </tbody>

  </HOC>
);

export default ContentOnly;
