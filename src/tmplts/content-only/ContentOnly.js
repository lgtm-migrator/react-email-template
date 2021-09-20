import React from 'react';

import { Divider } from "react-email-components-typography";

import Container from '../Container/Container.jsx';

import Body from './Body/Body';

import { styles } from './styles';

const ContentOnly = ({ header }) => (
  <Container styles={{ ...styles }}>
    <tbody>
      <tr>
        <td valign="top" id="templateBody" style={styles.templateBody}>
          <Divider>
            
            <Body />

          </Divider>
        </td>
      </tr>
    </tbody>

  </Container>
);

export default ContentOnly;
