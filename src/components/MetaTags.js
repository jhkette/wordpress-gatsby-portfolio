import React from 'react';
import Helmet from 'react-helmet'

function Metatags(props) {
    return (
        <Helmet>
         <html lang="en" />
              <title>{props.title}</title>
               <meta name='title' content= {props.title }/>
               <meta name='description' content= {props.description }/>
        </Helmet>
    )
}

export default Metatags;