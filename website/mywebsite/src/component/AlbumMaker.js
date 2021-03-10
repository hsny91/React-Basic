import React from 'react';
import PhotoEntry from './PhotoEntry';
import entries from './data/photo-entries'

class AlbumMaker extends React.Component {

  render() {
console.log(entries)
    return (
      <div className="flex-container">
        {/* <PhotoEntry src="berlin.jpg" location="Berlin, Germany" caption="Heart of Europe" /> */}
        {entries.itemlist.map((photo)=>{
          return <PhotoEntry key={photo.src} src={photo.src} location={photo.location} caption={photo.caption}/>

        })
      }
      </div>
    )

  }

}

export default AlbumMaker;
