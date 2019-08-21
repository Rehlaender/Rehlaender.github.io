import React from 'react';

import './MediaButtons.css';

export const MediaButtons = (props) => {
  const {links} = props;

  const returnCleanedString = (href) => {
    const noHttps = href.split("://")[1];
    const noDotCom = noHttps.substring(0, noHttps.indexOf(".com"));
    if(href.includes('github.com')) {
      return 'github';
    } else if(href.includes('github.io')){
      return 'site'
    } else if(href.includes('drive.google')){
      return 'drive'
    } else {
      return noDotCom.split(".").length > 1 ? noDotCom.split(".")[1] : 'default';
    }
  };

  const transfromArrayIntoObjectByName = (mediaLinks) => {
    const cleanedLinks = mediaLinks.map(media => {
      return {
        link: media, 
        icon: returnCleanedString(media),
      };
    });
    return cleanedLinks;
  }

  const buttonsIteration = (mediaLinks) => {
    return transfromArrayIntoObjectByName(mediaLinks).map(link => {
      return (
        <a className="media-icon" href={link.link}>{link.icon}</a>
      )
    })
  }
  return (
    <div className="mediaButtons">
      {buttonsIteration(links)}
    </div> 
  );
};

