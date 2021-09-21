import React from 'react';

import { Table } from 'react-email-components-table';

import LogoImage from '../LogoImage/LogoImage.jsx';

import { styles } from './styles';
import config from './config';

const LogoLayout = () => (
  <Table
    className="mcnImageBlock"
    style={styles.imageBlock}
  >
    <tbody className="mcnImageBlockOuter">
      <tr>
        <td 
          valign="top" style={styles.imageContentContainer} 
          className="mcnImageBlockInner">
          <Table
            align="left"
            className="mcnImageContentContainer"
            style={styles.imageContentContainer}
          >
            <tbody>
              <tr>
                <LogoImage />                
              </tr>
            </tbody>
          </Table>
        </td>
      </tr>
    </tbody>
  </Table>
);

export default LogoLayout;
