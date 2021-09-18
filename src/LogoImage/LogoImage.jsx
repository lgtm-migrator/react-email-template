import React from 'react';

import { Logo } from 'react-emails-components-miscellaneous'; 

import { styles } from './styles';
import config from './config';


() => {

    let props = {
        href:config.link,
        title:'',
        className:'',
        style:styles.title,

        align="center"
        alt=""
        src={config.imgLink}
        width={600}
        style={styles.img}
        className="mcnImage"
    }
    return (
        <td className="mcnImageContent" valign="top" style={styles.imageContent}>

            <Logo {...props} />

            <a href={config.link} title='' className='' target="_blank" style={styles.title}>
            <img
                align="center"
                alt=""
                src={config.imgLink}
                width={600}
                style={styles.img}
                className="mcnImage"
            />
            </a>

        
      </td>
    );
}