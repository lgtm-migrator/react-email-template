import React from 'react';

import { Logo } from 'react-emails-components-miscellaneous'; 

import styles from './styles';
import config from './config';


const LogoImage = () => {

    let props = {
        //link
        href:config.link,
        title:'',
        className:'',
        style:styles.title,

        //image    
        align:"center",
        alt:"",
        src:config.imgLink,
        width:600,
        style:styles.img,
        className:"mcnImage"
    }

    return (
        <td className="mcnImageContent" valign="top" style={styles.imageContent}>
            <Logo {...props} />       
      </td>
    );
}

export default LogoImage;